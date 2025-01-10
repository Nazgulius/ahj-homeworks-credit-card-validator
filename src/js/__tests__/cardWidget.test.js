import { CardWidget } from "../CardWidget"

// widget render
test('widget should render', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    expect(container.innerHTML).toEqual(CardWidget.markup);
})

// valid class
test('widget should add valid class in visa', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '4929647010095410';
    widget.submit.click();

    expect(document.querySelector('.visa').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in MasterCard', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '5441817817597258';
    widget.submit.click();

    expect(document.querySelector('.master').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in American Express', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '340734944089492';
    widget.submit.click();

    expect(document.querySelector('.amex').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in JCB', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '3589051137893661';
    widget.submit.click();

    expect(document.querySelector('.jcb').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in Discover', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '6011960502629495';
    widget.submit.click();

    expect(document.querySelector('.discover').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in Diners Club', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '30557742080727';
    widget.submit.click();

    expect(document.querySelector('.diners_club').classList.contains('valid')).toEqual(true);
})

test('widget should add valid class in Mir', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();

    widget.input.value = '2200000000000053';
    widget.submit.click();

    expect(document.querySelector('.mir').classList.contains('valid')).toEqual(true);
})

// invalid class
test('widget should add invalid class in visa', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new CardWidget(container);

    widget.bindToDOM();
    widget.submit.click();

    expect(document.querySelector('.visa').classList.contains('invalid')).toEqual(true);
})
