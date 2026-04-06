import Navbar from './Navbar'
import Home from './Home'
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      {/*< Home /> */}
      <Register />
      <Login />
      <Footer />
    </>
  )
}

export default App