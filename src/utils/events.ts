import Validation from './Validation';

const inputFocus = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    input.classList.remove('input_error');
}

const inputBlur = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const verifyResult = Validation.verification(input.name, input.value);

    toggleErrorElement(input, verifyResult);
}

const formSubmit = (event: Event): void => {
    event.preventDefault();

    const data: Record<string, string> = {};
    const inputFields = document.querySelectorAll('.form__input');
    let validationError: number = 0;

    inputFields.forEach((input: HTMLInputElement) => {
        const { verify } = Validation.verification(input.name, input.value);
        if (!verify) validationError++;

        data[input.name] = input.value;
    });

    if (validationError === 0) {
        console.log('Данные формы', data);
    } else {
        console.log('Некорректные данные');
    }
}

const createErrorElement = (message: string): HTMLElement => {
    const div = document.createElement('div');
    div.setAttribute('class', 'input__error-label');
    div.textContent = message;

    return div;
}

const toggleErrorElement = (target: HTMLInputElement, verifyResult: {
    verify: boolean
    message: string
}): void => {
    if (!verifyResult.verify) {
        target.classList.add('input_error');

        if (
            target.nextElementSibling === null
            || target.nextElementSibling !== null
            && target.nextElementSibling.tagName !== 'DIV'
        ) {
            const element = createErrorElement(verifyResult.message);
            target.after(element);
        }
    }

    if (
        target.nextElementSibling !== null
        && target.nextElementSibling.tagName === 'DIV'
        && verifyResult.verify
    ) {
        target.nextElementSibling.remove();
    }
}


export { inputFocus, inputBlur, formSubmit };