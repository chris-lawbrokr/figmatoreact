import fs from "fs/promises";
import path from "path";

export async function writeGlobals(colors: Record<string, string>) {
  const lines = Object.entries(colors).map(
    ([name, value]) =>
      `  --${name.toLowerCase().replace(/\//g, "-")}: ${value};`
  );

  const css = `@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
${lines.join("\n")}
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
`;

  const globalsPath = path.join(process.cwd(), "app/globals.css");
  await fs.writeFile(globalsPath, css);
}
