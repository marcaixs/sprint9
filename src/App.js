import { Routes, Route } from "react-router-dom"
import { MainPage } from './components/MainPage'
import { ShopPage } from './shopComponents/ShopPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="shop" element={ <ShopPage /> } />
      </Routes>
      
    </div>
  );
}

export default App;
