import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <a href='./Home'>Click</a>
        <nav>
            <ul class="nav__links">
                <li>Products</li>
                <li>Hot Deals</li>
                <li>Flyer</li>
            </ul>
        </nav>
        <div class="cart">
        <span class="fa fa-shopping-cart">0</span>
        </div>
        
        <button class="butt">Sign in</button>
      </header>
      <body>
        <div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
      </body>
    </div>
  );
}

export default Home;
