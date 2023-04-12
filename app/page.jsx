import Products from "./list/Products";

const wp_api_endpoint = "https://bubblybeaks.com/wp-json/api/lists"; // this works on

// revalidate this page every 10 seconds, since the getData's fetch
// request has `revalidate: 10`.
async function getData() {
  const res = await fetch(wp_api_endpoint, { next: { revalidate: 10 } });
  return res.json();
}

const ProductsPage = async () => {
  const products = await getData();

  return <Products products={products} />;
};

export default ProductsPage;
