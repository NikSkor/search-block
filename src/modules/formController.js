import { getRepo } from "./getRepo";
import {validateForm} from "./validateForm";

export const formController = (form, formSearch) => {
  const searchRequest = form.search;

  validateForm(searchRequest);

  if (searchRequest.value === '') {
    searchRequest.addEventListener('input', () => {
      validateForm(searchRequest);
    });
  }

  getRepo(searchRequest.value);

  form.reset();
};