import Block from "../../utils/Block";
import store, { StoreEvents } from "../../utils/Store";
import router from "../../utils/Router";
import { isEmpty } from "../../utils/isEmpty";

import auth from "../../controllers/auth";
import chats from "../../controllers/chat";

import Link from "../../components/link/link";

import avatar from "../../../static/image/avatar.svg";

import { settingClick } from "../../utils/events";
import settingsController from "../../controllers/setting";

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

    const linkChangeAvatar = new Link({
      name: "Поменять аватар",
      class: "account__avatar__change",
      events: {
        click: settingsController.pageClick,
      },
    });

    const linkChangeData = new Link({
      name: "Изменить данные",
      class: "account__check",
    });
    const linkChangePass = new Link({
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
      linkChangeAvatar,
      linkChangeData,
      linkChangePass,
      linkOut,
      backArrow,
      ...props,
      ...store.getState(),
    });

    if (isEmpty(store.getState())) {
      auth.getUserInfo();
      chats.getChats();
    }

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Account;
