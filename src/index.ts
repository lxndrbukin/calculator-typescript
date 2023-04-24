import { template } from './template';
import { Calculator } from './Calculator';

const calculator = new Calculator(template);

const root: HTMLElement = document.querySelector('#root');

calculator.render(root);

const inputForm: HTMLFormElement = document.querySelector('.calc-input-form');
const input: HTMLInputElement = document.querySelector('.calc-input');

inputForm.addEventListener('submit', (e: SubmitEvent): void => {
  e.preventDefault();
  calculator.eval(input);
});
