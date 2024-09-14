const formEl = document.querySelector('.form');

document.addEventListener('click', function (event) {
  console.log('Було натиснуто на елемент:', event.target); // Лог для перевірки події
  if (event.target.matches('input[type="text"][name="delay"]')) {
    console.log('Було натиснуто на поле "delay"');
  }
});
