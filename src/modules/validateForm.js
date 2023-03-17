import { renderWarn } from "./renderWarn";

export const validateForm = (input) => {
  let parent = input.parentElement;
  let warn = parent.querySelector('.form__warning');
  let text = '';

  if (input.value.length <= 2) {
    if (warn !== null) warn.remove();;
    text = 'Введено менее 3 символов';
    renderWarn(text, parent);
    return;
  } else if (input.value.length > 256) {
    if (warn !== null) warn.remove();;  
    text = 'Значение не должно превышать 256 символов';
    renderWarn(text, parent);
    return;
  } else {
    if (warn === null) return;

    warn.remove();
  }
};
