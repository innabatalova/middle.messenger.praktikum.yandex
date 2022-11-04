import Block from "@core/Block";
import { goToLogin, inputFocus, inputBlur, signUp } from "@utils/events";

import Input from "@components/input/input";
import Button from "@components/button/button";
import Link from "@components/link/link";

import avatar from "../../../static/image/avatar.svg";

import "@sass/style.scss";
import template from "./template";

class Registry extends Block {
  constructor(props: Record<string, any> = {}) {
    const avatarUser = avatar;

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
        click: signUp,
      },
    });
    const linkOpen = new Link({
      name: "Войти",
      events: {
        click: goToLogin,
      },
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
      avatarUser,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Registry;
