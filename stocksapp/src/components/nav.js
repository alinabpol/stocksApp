import './App.css';
//import route and our components
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home.js"
import About from "./pages/about.js"
import AllStocks from "./pages/allStocks.js"
import Stocks from "./pages/stocks.js"
import Nav from "./components/nav.js"

function App() {
    return (
      <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/stocks" element={<AllStocks/>}/>
            <Route path="/stocks/:symbol" element={<Stocks/>}/>
        </Routes>
  
      </div>
    );
  }
  
  export default App;
  