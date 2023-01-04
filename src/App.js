import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel.component.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ScrollButton from './components/ScrollButton.jsx';
import Header from "./components/Header";
import "./index.css";



function App() {
  return (
    <div className="App">
   
      <Header/>
      <CarouselComponent />
      <ContactForm />
      <ScrollButton />
      
     
    </div>
  
   
     
 
  );
}



export default App;


