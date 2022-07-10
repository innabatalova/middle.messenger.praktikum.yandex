import Block from "../../utils/Block";
import store, { StoreEvents } from "../../utils/Store";
import router from "../../utils/Router";
import { isEmpty } from "../../utils/isEmpty";

import auth from "../../controllers/auth";
import chats from "../../controllers/chat";
import settingsController from "../../controllers/setting";

import Field from "../../components/field/field";
import Link from "../../components/link/link";

import avatar from "../../../static/image/avatar.svg";

import { settingClick } from "../../utils/events";

import "../../sass/style.scss";
import template from "./template";

class Account extends Block {
  constructor(props: Record<string, any> = {}) {
    const backArrow = new Link({
      class: "back__arrow",
      events: {
        click: () => router.go("/messenger"),
      },
    });
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
      name: "Выйти",
      class: "account__back",
      events: {
        click: settingClick,
      },
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
      backArrow,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Account;
