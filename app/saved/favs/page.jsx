import Product from "../../list/Product";
function Favorites({ favorites, products, handleFavoriteSelection }) {
  return (
    <div>
      <h3>Favorites</h3>
      {favorites.length > 0 ? (
        favorites.map((favorite) => {
          const favoriteProduct = products.find((p) => p.id === favorite);
          return favoriteProduct ? (
            <Product
              key={favoriteProduct.id}
              product={favoriteProduct}
              handleFavoriteSelection={handleFavoriteSelection}
              favorites={favorites}
            />
          ) : null;
        })
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
}
