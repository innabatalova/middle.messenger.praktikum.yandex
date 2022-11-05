import Block from "@core/Block";
import {
  goToRegister,
  inputFocus,
  inputBlur,
  signIn,
} from "../../utils/events";

import Input from "@components/input/input";
import Button from "@components/button/button";
import Link from "@components/link/link";

import "@sass/style.scss";
import template from "./template";

class Auth extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputLogin = new Input({
      name: "login",
      type: "text",
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
    const buttonAuth = new Button({
      name: "Авторизоваться",
      events: {
        click: signIn,
      },
    });
    const linkToReg = new Link({
      name: "Нет аккаунта?",
      events: {
        click: goToRegister,
      },
    });

    super("div", {
      inputLogin,
      inputPass,
      buttonAuth,
      linkToReg,
      ...props,
    });
  }


  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Auth;
