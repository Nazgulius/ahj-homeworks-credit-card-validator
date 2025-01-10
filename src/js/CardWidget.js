import { isValidCard } from "./validators";
import { isValidCardLength } from "./validatorsLength";

export class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);

    this.arrayCardBankName = {
      2200: '.mir',
      2201: '.mir',
      2202: '.mir',
      2203: '.mir',
      2204: '.mir',
      34: '.amex',
      37: '.amex',
      35: '.jcb',
      300: '.diners_club',
      301: '.diners_club',
      302: '.diners_club',
      303: '.diners_club',
      304: '.diners_club',
      305: '.diners_club',
      4: '.visa',
      51: '.master',
      52: '.master',
      53: '.master',
      54: '.master',
      55: '.master',
      65: '.discover',
      6011: '.discover',
      622126: '.discover',
      622925: '.discover',
      644: '.discover',
      645: '.discover',
      646: '.discover',
      647: '.discover',
      648: '.discover',
      649: '.discover',
    };
  }

  static get markup() {
    return `
    <h3>Check your credit card number</h3>
    <ul class="cards list-unstyled">
      <li><span class="card visa invalid" title="Visa">Visa</span></li>
      <li><span class="card master invalid" title="Mastercard">Mastercard</span></li>
      <li><span class="card amex invalid" title="American Express">American Express</span></li>
      <li><span class="card discover invalid" title="Discover">Discover</span></li>
      <li><span class="card jcb invalid" title="JCB">JCB</span></li>
      <li><span class="card diners_club invalid" title="Diners Club">Diners Club</span></li>
      <li><span class="card mir invalid" title="Мир">Мир</span></li>
    </ul>
    <form id="form" class="form-inline" novalidate="novalidate">
      <div class="form-group">
        <input class="form-control col-md-6 input" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
        <button data-id="innogrn-submit" class="btn btn-success submit">Click to Validate</button>
      </div>
    </form>
    `;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.input';
  }

  static get selector() {
    return '.form-inline';
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardWidget.markup;

    this.element = this.parentEl.querySelector(CardWidget.selector);
    this.submit = this.element.querySelector(CardWidget.submitSelector);
    this.input = this.element.querySelector(CardWidget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  } 

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;

    // сбрасываем все предыдущие valid
    for (const key in this.arrayCardBankName) {
      const element = document.querySelector(this.arrayCardBankName[key]);  
      if (element) {  
          element.classList.add('invalid');  
          element.classList.remove('valid');  
      } 
    }
    
    if(isValidCard(value) && isValidCardLength(value)) {
      for (const key in this.arrayCardBankName) {
        if (value.startsWith(key)) {  
          // Найдем элемент на странице и изменим классы  
          const element = document.querySelector(this.arrayCardBankName[key]);  
          if (element) {  
              element.classList.add('valid');  
              element.classList.remove('invalid');  
          }
          
          break; // Выходим из цикла, поскольку соответствующий ключ найден  
        } 
      }
    }
  }
  
}