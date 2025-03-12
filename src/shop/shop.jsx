import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './shop.css'
import Cart from "../cart/cart";

function Shop() {
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState([])
    const [items, setItems] = useState([])

  function newItem(title, amount) {
    items.push({title: title, amount: amount})
  }

  useEffect(() => {
    
  }, [items])

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const productPromises = [];
        for (let i = 1; i <= 10; i++) {
          productPromises.push(fetch(`https://fakestoreapi.com/products/${i}`).then(res => res.json()));
        }

        const fetchedProducts = await Promise.all(productPromises);
        setProducts(fetchedProducts);
        setAmount(new Array(fetchedProducts.length).fill(1)); // Initialize the amount array
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    dataFetch();
  }, []); 

  function handleAmountChange(index, newAmount) {
    setAmount(prevAmount => {
      const newAmountArray = [...prevAmount];
      newAmountArray[index] = newAmount;
      return newAmountArray;
    });
  }

  // Handle increment and decrement buttons
  function increment(index) {
    setAmount(prevAmount => {
      const newAmountArray = [...prevAmount];
      newAmountArray[index] += 1;
      return newAmountArray;
    });
  }

  function decrement(index) {
    setAmount(prevAmount => {
      const newAmountArray = [...prevAmount];
      newAmountArray[index] = Math.max(newAmountArray[index] - 1, 1); // Prevent negative amounts
      return newAmountArray;
    });
  }

  function buy(title) {

  }

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
                      <button type="button" onClick={() => newItem(product.title, amount[index])}>Add to cart</button>
                      <input type="text" value={amount[index]} onChange={(e) => handleAmountChange(index, parseInt(e.target.value) || 0)}/>
                      <div id="num-change-container">
                          <button type="button" className="num-change" onClick={() => increment(index)}>></button>
                          <button type="button" className="num-change down" onClick={() => decrement(index)}>></button>
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