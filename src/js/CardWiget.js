import { isValidCard } from "./validators";

export class CardWiget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
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
        <input class="form-control col-md-6 input" id="card_number" name="card_number" type="text"
          placeholder="Credit card number" data-original-title="" title="">
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
    this.parentEl.innerHTML = CardWiget.markup;

    this.element = this.parentEl.querySelector(CardWiget.selector);
    this.submit = this.element.querySelector(CardWiget.submitSelector);
    this.input = this.element.querySelector(CardWiget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  } 

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;

    if(isValidCard(value)) {
      if(value[0] === 4) {
        this.element.querySelector(".visa").classList.add('valid');
        this.element.querySelector(".visa").classList.remove('invalid');
        console.log(visa);
      } else {
      
      }
        this.input.classList.add('valid');
        this.input.classList.remove('invalid');
    } else {
        
    }
  }

  
  
}