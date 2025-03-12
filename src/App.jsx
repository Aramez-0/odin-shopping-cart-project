import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function App() {

  

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
        <p>Shop to your heart's content</p>
      </main>
      <footer>
        <p>Footer. Information maybe</p>
      </footer>
    </div>
  )
}

export default App
