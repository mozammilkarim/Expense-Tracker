import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import AddExpense from './add-expenses/AddExpense';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/add-expense" element={<AddExpense/>}/>
      </Routes>
      
      {/* <Home/> */}
      <Footer/>
    </Router>
  );
}

export default App;
