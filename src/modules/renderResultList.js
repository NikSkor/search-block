import {createRepo} from "./createRepo";
import {createElement} from "./utils/createElement";

export const renderResultList = (arr, parent)=> {
  parent.innerHTML = '';

  if (arr.length === 0) {
    createElement(
      'p',
      {
        className: 'search__empty-title',
        textContent: 'Ничего не найдено',
      },
      {
        parent: parent,
      }
    );
  }
  let ul = createElement(
    'ul',
    {
      className: 'search__list',
    },
    {
      parent: parent,
    }
  );
  arr.map((item) => {
    ul.append(createRepo(item));
  });
};