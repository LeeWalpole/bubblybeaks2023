import "../globals.css";

async function getData() {
  const res = await fetch("http://127.0.0.1:10058/wp-json/custom/v1/product");
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
    <main>
      {products.map((product) => (
        <article key={product.id} className="product">
          <h6 className="product-title">{product.title}</h6>
        </article>
      ))}
    </main>
  );
}
