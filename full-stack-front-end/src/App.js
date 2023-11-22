import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
import Footer from './layout/Footer';
//sequence is imp: Router, Routes, Route

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adduser" element={ <AddUser /> } />
          <Route exact path="/edituser/:id" element={ <EditUser/> } />
          <Route exact path="/viewuser/:id" element={ <ViewUser></ViewUser> } />
        </Routes>

        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
