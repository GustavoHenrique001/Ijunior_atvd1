

const cardholderNameInCard = document.querySelector('.cardholder-name');
const cardNumberInCard = document.querySelector('.card-number');
const cardExpiryMonthInCard = document.querySelector('.month-exp-date');
const cardExpiryYearInCard = document.querySelector('.year-exp-date');
const cardCvcInCard = document.querySelector('.cvc');

const cardName = document.querySelector('.name');
const cardNumber = document.querySelector('.number');
const CardMounthExpDate = document.querySelector('.mm-exp-date');
const CardYearExpDate = document.querySelector('.yy-exp-date');
const cardCvc = document.querySelector('.cvc-input');

const InvalidTextName = document.querySelector('.invalid-text-name');
const InvalidTextNumber = document.querySelector('.invalid-text-number');
const InvalidTextExp = document.querySelector('.invalid-text-exp');
const InvalidTextCvc = document.querySelector('.invalid-text-cvc');
const InvalidTextGeneral = document.querySelector('.invalid-text-general');

const buttonCONFIRMAR = document.querySelector('#CONFIRMAR');
const buttonContinue = document.querySelector('#continue');

const Forms = document.querySelector('.card-form');
const SuccessMessage = document.querySelector('.success-message');

cardName.addEventListener('input', (e) => {
  cardholderNameInCard.textContent = e.target.value

  InvalidTextName.style.display = 'none'
  e.target.style.color = 'black'

  if (e.target.value.match(/[^a-zA-Z ]/g)) {
    InvalidTextName.style.display = 'block'
    e.target.style.color = 'red'
  }

});

cardNumber.addEventListener('input', (e) => {
  cardNumberInCard.textContent = e.target.value;
  cardNumberInCard.textContent = cardNumberInCard.textContent.replace(/(\d{4})/g, '$1 ').trim();

  InvalidTextNumber.style.display = 'none'
  e.target.style.color = 'black'
  
  if (e.target.value.match(/[^0-9]/g)) {
    InvalidTextNumber.style.display = 'block'
    e.target.style.color = 'red'
  }
  
});

CardMounthExpDate.addEventListener('input', (e) => {
  cardExpiryMonthInCard.textContent = e.target.value
  
  InvalidTextExp.style.display = 'none'
  e.target.style.color = 'black'
  
  if (e.target.value.match(/[^0-9]/g)) {
    InvalidTextExp.style.display = 'block';
    e.target.style.color = 'red'
  }
  
});

CardYearExpDate.addEventListener('input', (e) => {
  cardExpiryYearInCard.textContent = e.target.value
  
  InvalidTextExp.style.display = 'none'
  e.target.style.color = 'black'
  
  if (e.target.value.match(/[^0-9]/g)) {
    InvalidTextExp.style.display = 'block';
    e.target.style.color = 'red'
  }
  
});

cardCvc.addEventListener('input', (e) => {
  cardCvcInCard.textContent = e.target.value
  
  InvalidTextCvc.style.display = 'none';
  e.target.style.color = 'black'
  
  if (e.target.value.match(/[^0-9]/g)) {
    InvalidTextCvc.style.display = 'block';
    e.target.style.color = 'red'
  }
});

buttonCONFIRMAR.addEventListener('click', () => {
  if (
    cardNumber.value.match(/[^0-9]/g) || 
    CardMounthExpDate.value.match(/[^0-9]/g) || 
    CardYearExpDate.value.match(/[^0-9]/g) || 
    cardCvc.value.match(/[^0-9]/g) || 
    cardName.value === '' || 
    cardNumber.value === '' || 
    CardMounthExpDate.value === '' || 
    CardYearExpDate.value === '' || 
    cardCvc.value === ''
  ) {
    InvalidTextGeneral.style.display = 'block';
  } else {
    InvalidTextGeneral.style.display = 'none';
    Forms.style.display = 'none';
    SuccessMessage.style.display = 'block';
  }
});

buttonContinue.addEventListener('click', () => {
  cardName.value = '';
  cardNumber.value = '';
  CardMounthExpDate.value = '';
  CardYearExpDate.value = '';
  cardCvc.value = '';

  cardholderNameInCard.textContent = 'GUGU BABAYAGAG';
  cardNumberInCard.textContent = '0000 0000 0000 0000';
  cardExpiryMonthInCard.textContent = '00';
  cardExpiryYearInCard.textContent = '00';
  cardCvcInCard.textContent = '000';

  Forms.style.display = 'block';
  SuccessMessage.style.display = 'none';
});