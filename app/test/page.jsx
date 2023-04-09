import { getData } from "../api/wordpress";

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
