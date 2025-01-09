import { CardWiget } from "./CardWiget";

document.addEventListener('DOMContentLoaded', () => { 
  const container = document.querySelector('.container');
  const form = new CardWiget(container);
  
  
  form.bindToDOM();

});