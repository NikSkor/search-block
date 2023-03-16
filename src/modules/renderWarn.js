import {createElement} from "./utils/createElement";

export const renderWarn = (text, parent)=> {
  let warn = createElement(
    'span',
    {
      className: 'form__warning',
      textContent: `${text}`,
    },
    {
      parent: parent,
    }
  );

  return warn;
};