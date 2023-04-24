export class Calculator {
  constructor(public template: string | HTMLElement) {}

  eval(input: HTMLInputElement): void {
    input.value = eval(input.value);
    console.log(input.value);
  }

  render(el: HTMLElement): void {
    el.innerHTML += this.template;
  }
}
