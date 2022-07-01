import Validation from "./Validation";

const inputFocus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  input.classList.remove("input_error");
};

const inputBlur = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const verifyResult = Validation.verification(input.name, input.value);

  toggleErrorElement(input, verifyResult);
};

const formSubmit = (event: Event): void => {
  event.preventDefault();

  const data: Record<string, string> = {};
  const inputFields = document.querySelectorAll(".auth-form__input");
  let validationError: number = 0;

  inputFields.forEach((input: any) => {
    const { verify } = Validation.verification(input.name, input.value);
    if (!verify) validationError++;

    data[input.name] = input.value;
  });

  if (validationError === 0) {
    if (document.querySelector('[name="repeat_password"]')) {
      if (!(data.password === data.repeat_password)) {
        console.log("Пароли не совпадают");
      } else {
        console.log("Данные формы", data);
      }
    } else {
      console.log("Данные формы", data);
    }
  } else {
    console.log("Некорректные данные");
  }
};

const createErrorElement = (message: string): HTMLElement => {
  const div = document.createElement("div");
  div.setAttribute("class", "input__error_label");
  div.textContent = message;

  return div;
};

const toggleErrorElement = (
  target: HTMLInputElement,
  verifyResult: {
    verify: boolean;
    message: string;
  }
): void => {
  if (!verifyResult.verify) {
    target.classList.add("input_error");

    if (
      target.nextElementSibling === null ||
      (target.nextElementSibling !== null &&
        target.nextElementSibling.tagName !== "DIV")
    ) {
      const element = createErrorElement(verifyResult.message);
      target.after(element);
    }
  }

  if (
    target.nextElementSibling !== null &&
    target.nextElementSibling.tagName === "DIV" &&
    verifyResult.verify
  ) {
    target.nextElementSibling.remove();
  }
};

export { inputFocus, inputBlur, formSubmit };
