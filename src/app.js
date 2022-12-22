import React from 'react';
import './App.css';
import CarouselComponent from "./components/carousel.component.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ScrollButton from './components/ScrollButton.jsx';
import CardList from "./components/CardList"
import IMAGES from "./image/index"

const products = [
  {id: 1, name: "Agility Adultos 20 KG", price: 5800, image:IMAGES.img1, alt:"Agility Adultos 20 KG"},
  {id: 2, name: "Chaleco para Perro", price: 3600, image:IMAGES.img2,alt:"Chaleco para Perro"},
  {id: 3, name: "Collar para Gato", price: 6800, image:IMAGES.img3,alt:"Collar para Gato"},
  {id: 4, name: "Royal Canin ", price: 7200, image:IMAGES.img4,alt:"Royal Canin Bulldog Frances"},
  {id: 5, name: "Croquetas Humedas", price: 1700, image:IMAGES.img5,alt:"Croquetas Humedas"},
  {id: 6, name: "Pedigre Cach 20KG", price: 6800, image:IMAGES.img6,alt:"Pedigre Cachorro 20 KG"},
  {id: 7, name: " Whiscas 3KG", price: 2300, image:IMAGES.img7,alt:" Whiscas 3KG"}, 
  {id: 8, name: "Collar para Perro", price: 2100, image:IMAGES.img8,alt:"Collar para perro"},
  {id: 9, name: "Piloto para Perro", price: 4200, image:IMAGES.img9,alt:"Piloto para Perro"},
  {id: 10, name:"Dog Chow 3KG", price: 4100, image:IMAGES.img10,alt:"Dog Chow  3KG"},
  {id: 11, name: "Pro Plan  3KG", price: 3700, image:IMAGES.img11,alt:"Pro Plan Mente Activa 3KG"},
  {id: 12, name: "Eukanuba  3KG", price: 3900, image:IMAGES.img12,alt:"Eukanuba Digestion Saludable 3KG"},


]

function App() {
  return (
    <div className="App">
      <CarouselComponent />
      <CardList products={products}/>
      <ContactForm />
      <ScrollButton />
      <Carrusell />
     
    </div>
  
   
     
 
  );
}

export default App;
