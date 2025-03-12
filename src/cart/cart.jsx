import { Link } from "react-router-dom";
import { useState } from "react";

function Items() {
  let items = []
  
}

function Cart() {
  
  return (
    <div id='container'>
      <header>
        <Link to='/'><h1>Shopping site</h1></Link>
          <nav>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>Cart</Link>
      
          </nav>
      </header>
      <main>
        <p>Items in cart</p>

      </main>
      <footer>
        <p>Footer. Information maybe</p>
      
      </footer>
    </div>
  )
}

export default Cart