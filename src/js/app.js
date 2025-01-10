import { CardWidget } from "./CardWidget";

//document.addEventListener('DOMContentLoaded', () => { 
  const container = document.querySelector('.container');
  const form = new CardWidget(container);
  
  
  form.bindToDOM();

//});