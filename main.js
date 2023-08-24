import { tryCalculateAge } from './modules/actions';
import { btnCalculate, inputBornDate } from './modules/htmlElements';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  inputBornDate.value = new Date().toISOString().split('T')[0];
  inputBornDate.max = inputBornDate.value;
});

inputBornDate.addEventListener('keypress', (evt) => {
  if (evt.key === 'Enter') tryCalculateAge();
})

btnCalculate.addEventListener('click', () => {
  tryCalculateAge();
});

