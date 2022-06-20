class Validation {
  private static FIELDS: Record<
    string,
    {
      pattern: RegExp;
      error: string;
      success: string;
    }
  > = {
    first_name: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
      error: "Попробуйте другое имя",
      success: "Имя подходит!",
    },
    second_name: {
      pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
      error: "Попробуйте другую фамилию",
      success: "Фамилия подходит!",
    },
    login: {
      pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
      error: "Неверный логин",
      success: "Логин подходит!",
    },
    email: {
      pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
      error: "Попробуйте другой email",
      success: "email подходит!",
    },
    password: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
      error: "Неверный пароль",
      success: "Надежный пароль",
    },
    repeat_password: {
      pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
      error: "Неверный пароль",
      success: "Пароли совпали",
    },
    phone: {
      pattern: /^[+-d]?\d{10,15}$/,
      error: "Попробуйте другой номер телефона",
      success: "Номер подходит!",
    },
    message: {
      pattern: /(.|\s)*\S(.|\s)*/,
      error: "Введите сообщение",
      success: "Сообщение создано",
    },
  };

  static verification(inputName: string, inputValue: string) {
    const verifResult: {
      verify: boolean;
      message: string;
    } = {
      verify: true,
      message: "",
    };

    const pattern = Validation.FIELDS[inputName].pattern;

    if (pattern.test(inputValue)) {
      verifResult.message = Validation.FIELDS[inputName].success;
    } else {
      verifResult.verify = false;
      verifResult.message = Validation.FIELDS[inputName].error;
    }

    return verifResult;
  }
}

export default Validation;
