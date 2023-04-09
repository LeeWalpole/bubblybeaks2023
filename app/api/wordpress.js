export async function getData() {
  const wp_api_endpoint = "https://bubblybeaks.com/wp-json/api/lists";
  const res = await fetch(wp_api_endpoint);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
