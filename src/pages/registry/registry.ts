import Block from "../../utils/Block";
import { inputFocus, inputBlur, formSubmit } from "../../utils/events";

import Input from "../../components/input/input";
import Button from "../../components/button/button";
import Link from "../../components/link/link";

import "../../sass/style.scss";
import template from "./template";

class Auth extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputEmail = new Input({
      name: "email",
      type: "email",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputLogin = new Input({
      name: "login",
      type: "text",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputFirstName = new Input({
      name: "first_name",
      type: "text",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputSecondName = new Input({
      name: "second_name",
      type: "text",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputPhone = new Input({
      name: "phone",
      type: "tel",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputPass = new Input({
      name: "password",
      type: "password",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const inputPassRepeat = new Input({
      name: "repeat_password",
      type: "password",
      events: {
        focus: inputFocus,
        blur: inputBlur,
      },
    });
    const buttonRegistry = new Button({
      name: "Зарегистрироваться",
      events: {
        click: formSubmit,
      },
    });
    const linkOpen = new Link({
      href: "#",
      name: "Войти",
    });

    super("div", {
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputPhone,
      inputPass,
      inputPassRepeat,
      buttonRegistry,
      linkOpen,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Auth;
