export async function fetchItems<T extends Object>(
  API_URL: string
): Promise<T[] | undefined> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch items: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}
