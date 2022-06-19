import Block from "../../utils/Block";

import Input from "../../components/input/input";
import Button from "../../components/button/button";
import Link from "../../components/link/link";

import "../../sass/style.scss";
import template from "./template";

class Auth extends Block {
  constructor(props: Record<string, any> = {}) {
    const inputLogin = new Input({
      label: "Логин",
      name: "login",
      type: "text",
    });
    const inputPass = new Input({
      label: "Пароль",
      name: "password",
      type: "password",
    });
    const buttonAuth = new Button({
      name: "Авторизоваться",
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
