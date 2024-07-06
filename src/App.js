import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from "./Components/Section3"  ;
import Section4 from "./Components/Section4";  
import Section5 from "./Components/Section5"  ; 
import Footer from "./Components/Footer.js"  ; 
import Modal from './Components/Modal';
import {useState} from "react" ; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <> 
    
    
        <Navbar/>
        <ToastContainer/> 
        <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal"/>
        <Section1  setopen={setModalOpen} />
        <Section2  setopen={setModalOpen}/>
        <Section3  setopen={setModalOpen} />
        <Section4/>
        <Section5/>
        <Footer/>
    </>
  );
}

export default App;
