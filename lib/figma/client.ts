const BASE_URL = "https://api.figma.com/v1";

export async function figmaFetch(path: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "X-Figma-Token": process.env.FIGMA_TOKEN!,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Figma error: ${res.statusText}`);
  }

  return res.json();
}
