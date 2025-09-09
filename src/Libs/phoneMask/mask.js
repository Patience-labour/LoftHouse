import { maskList } from "./mask_list";


export const mask = (selector) => {
  function setMask() {
    let matrix = '+###############';
    const phone = this.value.replace(/[\s#-)(]/g, '');

    for (const item of maskList) {
      const code = item.code.replace(/[\s#]/g, '');
      if (phone.startsWith(code)) {
        matrix = item.code;
        break;
      }
    }

    let i = 0;
    const val = this.value.replace(/\D/g, '');

    this.value = matrix.replace(/(?!\+)./g, function (a) {
      return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  }

  function handleBlur() {
    if (this.value === '+' || this.value.trim() === '') {
      this.value = '';
    } else if (this.value.startsWith('+')) {
      this.value = this.value.substring(1);
    }
  }

  function handleFocus() {
    if (this.value && !this.value.startsWith('+')) {
      this.value = '+' + this.value;
    } else if (!this.value) {
      this.value = '+';
    }
    setMask.call(this);
  }

  const inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.removeEventListener('input', setMask);
    input.removeEventListener('focus', handleFocus);
    input.removeEventListener('blur', handleBlur);

    input.addEventListener('input', setMask);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    if (input.value) {
      setMask.call(input);
    }
  });
};