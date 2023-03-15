/* eslint-disable jsx-a11y/alt-text */
import logo from './LOGOWEB.png';
import React from 'react';
import './App.css';

var identbutton = document.getElementById('imagebutton');
var imag = document.getElementById('contentimage');
var runtext = function(){
    imag.style.background="url(../images/contimgtwo.jpg)";
}
identbutton.addEventListener("click",runtext,"false");

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Pastelerias Colombia,para poder pedir 
          la sabrosura en linea ( ͡° ͜ʖ ͡ – ✧)
        </p>
       

        <a
          className="App-link"
          href="file:///C:/Users/juanj/Documents/Nodej/Ingdesistema-1/su-proyecto/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mira nuestro sitio web!
          <button id="imagebutton">cliquea aqui para ver nuestros ricas delicias</button>
          <img id="contentimage"/>
        </a>
      </header>
      <div class="box bg"></div>
      
  <div class="box b"></div>
    </div>
  );
}

//Botón de postres


export default App;
