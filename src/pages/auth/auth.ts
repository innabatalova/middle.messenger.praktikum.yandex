import Block from "../../utils/Block";
import { inputFocus, inputBlur, formSubmit } from "../../utils/events";

import Input from "../../components/input/input";
import Button from "../../components/button/button";
import Link from "../../components/link/link";

import "../../sass/style.scss";
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
        click: formSubmit,
      },
    });
    const linkToReg = new Link({
      href: "#",
      name: "Нет аккаунта?",
    });

    super("div", {
      inputLogin,
      inputPass,
      buttonAuth,
      linkToReg,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Auth;
