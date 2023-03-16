import {validateForm} from "./validateForm";

export const formController = (form, formSearch) => {
  const searchRequest = form.search;

  validateForm(searchRequest);

  if (searchRequest.value === '') {
    searchRequest.addEventListener('input', () => {
      validateForm(searchRequest);
    });
  }

  form.reset();
};