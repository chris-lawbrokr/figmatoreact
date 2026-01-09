import { figmaFetch } from "@/lib/figma/client";
import fs from "fs/promises";
import path from "path";

export async function POST() {
  try {
    const fileKey = process.env.FIGMA_FILE_KEY!;
    const outputDir = path.join(process.cwd(), "tokens");

    await fs.mkdir(outputDir, { recursive: true });

    console.log("\n==================== FIGMA FULL DUMP START ====================\n");

    // Fetch every available Figma endpoint for a file
    const [
      file,
      styles,
      components,
      componentSets,
      versions,
      comments
    ] = await Promise.all([
      figmaFetch(`/files/${fileKey}`),
      figmaFetch(`/files/${fileKey}/styles`),
      figmaFetch(`/files/${fileKey}/components`).catch(() => null),
      figmaFetch(`/files/${fileKey}/component_sets`).catch(() => null),
      figmaFetch(`/files/${fileKey}/versions`).catch(() => null),
      figmaFetch(`/files/${fileKey}/comments`).catch(() => null),
    ]);

    console.log("✔ File fetched:", file.name);
    console.log("✔ Pages:", file.document?.children?.length ?? 0);
    console.log("✔ Styles:", styles?.meta?.styles ? Object.keys(styles.meta.styles).length : 0);
    console.log("✔ Components:", components?.meta?.components ? Object.keys(components.meta.components).length : 0);
    console.log("✔ Component Sets:", componentSets?.meta?.component_sets ? Object.keys(componentSets.meta.component_sets).length : 0);
    console.log("✔ Versions:", versions?.versions?.length ?? 0);
    console.log("✔ Comments:", comments?.comments?.length ?? 0);

    console.log("\n==================== RAW DOCUMENT TREE ====================\n");

    // Log every page in full (no filtering, no traversal limits)
    file.document?.children?.forEach((page: any, index: number) => {
      console.log(`\n========== PAGE ${index + 1}: ${page.name} ==========\n`);
      console.log(JSON.stringify(page, null, 2));
    });

    console.log("\n==================== SAVING FULL DUMP ====================\n");

    const fullDump = {
      fetchedAt: new Date().toISOString(),
      file,
      styles,
      components,
      componentSets,
      versions,
      comments,
    };

    await fs.writeFile(
      path.join(outputDir, "figma.full-dump.json"),
      JSON.stringify(fullDump, null, 2)
    );

    console.log("✔ figma.full-dump.json written to /tokens");
    console.log("\n==================== FIGMA FULL DUMP COMPLETE ====================\n");

    return Response.json({
      success: true,
      message: `Full Figma API dump saved to tokens/figma.full-dump.json`,
      filePath: path.join(outputDir, "figma.full-dump.json"),
      summary: {
        fileName: file.name,
        pages: file.document?.children?.length ?? 0,
        styles: styles?.meta?.styles ? Object.keys(styles.meta.styles).length : 0,
        components: components?.meta?.components ? Object.keys(components.meta.components).length : 0,
        componentSets: componentSets?.meta?.component_sets ? Object.keys(componentSets.meta.component_sets).length : 0,
        versions: versions?.versions?.length ?? 0,
        comments: comments?.comments?.length ?? 0,
      }
    });

  } catch (error) {
    console.error("\n==================== FIGMA FULL DUMP ERROR ====================\n");
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
