import Block from "../../utils/Block";

import Field from "../../components/field/field";
import Link from "../../components/link/link";

import avatar from "../../../static/image/avatar.svg";

import "../../sass/style.scss";
import template from "./template";

class Account extends Block {
  constructor(props: Record<string, any> = {}) {
    const avatarUser = avatar;
    const fieldEmail = new Field({
      name: "email",
      data: "Почта",
      value: "pochta@yandex.ru",
    });
    const fieldLogin = new Field({
      name: "login",
      data: "Логин",
      value: "ivanivanov",
    });
    const fieldFisrtName = new Field({
      name: "first_name",
      data: "Имя",
      value: "Иван",
    });
    const fieldSecondName = new Field({
      name: "second_name",
      data: "Фамилия",
      value: "Иванов",
    });
    const fieldDisplayName = new Field({
      name: "display_name",
      data: "Имя в чате",
      value: "Иван",
    });
    const fieldPhone = new Field({
      name: "phone",
      data: "Телефон",
      value: "+7 (909) 967 30 30",
    });
    const linkChangeData = new Link({
      href: "#",
      name: "Изменить данные",
      class: "account__check",
    });
    const linkChangePass = new Link({
      href: "#",
      name: "Изменить пароль",
      class: "account__check",
    });
    const linkOut = new Link({
      href: "#",
      name: "Выйти",
      class: "account__back",
    });

    super("div", {
      avatarUser,
      fieldEmail,
      fieldLogin,
      fieldFisrtName,
      fieldSecondName,
      fieldDisplayName,
      fieldPhone,
      linkChangeData,
      linkChangePass,
      linkOut,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Account;
