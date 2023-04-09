"use client";

import { getData } from "../api/wordpress";
import { useState, useEffect } from "react";
import Image from "next/image";
import Product from "../list/Product";
import FavoriteProduct from "../components/Favorites";

// import { getData } from "../api/wordpress";

function Products() {
  // Set up state variables for products, selected category, favorites, and loading
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  let initialFavorites = [];
  const storedFavorites = localStorage.getItem("favorites");

  if (typeof window !== "undefined" && storedFavorites) {
    try {
      initialFavorites = JSON.parse(storedFavorites);
    } catch (error) {
      console.error("Error parsing favorites from localStorage:", error);
      // Handle the error, e.g. by resetting the value in localStorage
    }
  }

  const [favorites, setFavorites] = useState(initialFavorites);

  const [loading, setLoading] = useState(true);

  // Fetch data from the API and update the products state
  useEffect(() => {
    getData()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g. by setting an error state variable
      });
  }, []);

  // Generate an array of categories based on the products state
  const categories = products
    .map((product) => product.category)
    .flat()
    .filter((category, index, array) => array.indexOf(category) === index);

  // Create a new array of products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.includes(selectedCategory))
    : products;

  // Handle category selection by updating the selectedCategory state
  function handleCategorySelection(category) {
    setSelectedCategory(category);
  }

  // Handle favorite product selection by updating the favorites state and storing in localStorage
  function handleFavoriteSelection(id) {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  // Update localStorage when the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // If the products are still loading, display a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main">
      <div>
        <nav className="product-categories">
          <div className="category-column">
            <ul>
              <li
                onClick={() => handleCategorySelection("")}
                className={selectedCategory === "" ? "active" : ""}
                key="all"
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategorySelection(category)}
                  className={selectedCategory === category ? "active" : ""}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section class="products">
          <div className="product-list">
            {filteredProducts.map((product) => (
              <h6 key={product.id} class="product-title">
                {product.title}
              </h6>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Products;
