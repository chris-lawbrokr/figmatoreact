export function extractColors(styles: any, file: any) {
  const colorStyles = Object.values(styles.meta.styles).filter(
    (s: any) => s.style_type === "FILL"
  );

  const colors: Record<string, string> = {};

  for (const style of colorStyles as any[]) {
    const node = file.document.children
      .flatMap((p: any) => p.children || [])
      .find((n: any) => n.id === style.node_id);

    if (!node?.fills?.[0]?.color) continue;

    const { r, g, b } = node.fills[0].color;
    colors[style.name] = `rgb(${Math.round(
      r * 255
    )}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  }

  return colors;
}
