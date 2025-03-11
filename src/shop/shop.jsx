import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './shop.css'

function Shop() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const productPromises = [];
        for (let i = 1; i <= 10; i++) {
          productPromises.push(fetch(`https://fakestoreapi.com/products/${i}`).then(res => res.json()));
        }

        const fetchedProducts = await Promise.all(productPromises);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    dataFetch();
  }, []); 

  return (
    <div id='shop-container'>
      <header>
        <Link to='/'><h1>Shopping site</h1></Link>
        <nav>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
      </header>
      <main>
        <p>Shop to your heart's content</p>
        
          {products.length > 0 ? (
            <div id="product-container">
              {products.map((product, index) => (
                <div key={index} className="product">
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <div id="buy-container">
                      <button type="button">Add to cart</button>
                      <input type="text" />
                      <div id="num-change-container">
                          <button type="button" className="num-change">></button>
                          <button type="button" className="num-change down">></button>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
      </main>
          <footer>
            <p>Footer. Information maybe</p>
    
          </footer>
    </div>
)
}

export default Shop