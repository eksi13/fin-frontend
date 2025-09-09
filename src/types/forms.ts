export interface FormElements extends HTMLFormControlsCollection {
  addItem: HTMLInputElement;
  searchItem: HTMLInputElement;
  amountSearchMin: HTMLInputElement;
  amountSearchMax: HTMLInputElement;
  dateSearchMin: HTMLInputElement;
  dateSearchMax: HTMLInputElement;
  categoriesChecked: HTMLInputElement;
}

export interface AddItemFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
