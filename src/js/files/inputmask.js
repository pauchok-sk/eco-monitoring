export default function inputmask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const imTel = new Inputmask("+7 (999) 999 99-99");
  imTel.mask(inputs);
}
