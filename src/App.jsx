import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./routes/navigation/navbar.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import React from 'react';


const Shop = () => {
  return (
    <div>
      <header>
        <h1>Welcome to our Clothing Application</h1>
      </header>

      <main>
        <div className="product">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img src="product2.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <button>Add to Cart</button>
        </div>

        {/* Add more product divs as needed */}

      </main>

      <footer>
        <p>&copy; 2023 Clothing Application. All rights reserved.</p>
      </footer>
    </div>
  );
}





const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;