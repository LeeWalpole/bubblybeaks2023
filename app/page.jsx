// const wp_api_endpoint = "http://localhost:10058/wp-json/api/lists";
const wp_api_endpoint = "https://bubblybeaks.com/wp-json/api/lists"; // this works on

async function getData() {
  const res = await fetch(wp_api_endpoint);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const products = await getData();

  return (
    <main className="main">
      <h1>Home</h1>
      {products.map((product) => (
        <article key={product.id} className="product">
          <h6 className="product-title">{product.title}</h6>
        </article>
      ))}
    </main>
  );
}
