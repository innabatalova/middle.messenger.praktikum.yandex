import Block from "../../utils/Block";
import store, { StoreEvents } from "../../utils/Store";
import router from "../../utils/Router";
import { isEmpty } from "../../utils/helpers/isEmpty";

import auth from "../../controllers/auth";
import chats from "../../controllers/chat";

import Link from "../../components/link/link";

import { settingClick } from "../../utils/events";
import settingsController from "../../controllers/setting";

import "../../sass/style.scss";
import template from "./template";

class Account extends Block {
  constructor(props: Record<string, any> = {}) {
    if (isEmpty(store.getState())) {
      auth.getUserInfo();
      chats.getChats();
    }

    const backArrow = new Link({
      class: "back__arrow",
      events: {
        click: () => router.go("/messenger"),
      },
    });

    const linkChangeAvatar = new Link({
      name: "Поменять аватар",
      dataset: "openAvatarPopup",
      class: "account__avatar__change",
      events: {
        click: settingsController.pageClick,
      },
    });

    const linkChangeData = new Link({
      name: "Изменить данные",
      dataset: "openChangeProfilePopup",
      class: "account__check",
      events: {
        click: settingsController.pageClick,
      },
    });
    const linkChangePass = new Link({
      name: "Изменить пароль",
      dataset: "openChangePasswordPopup",
      class: "account__check",
      events: {
        click: settingsController.pageClick,
      },
    });
    const linkOut = new Link({
      name: "Выйти",
      class: "account__back",
      events: {
        click: settingClick,
      },
    });

    super("div", {
      linkChangeAvatar,
      linkChangeData,
      linkChangePass,
      linkOut,
      backArrow,
      ...props,
      ...store.getState(),
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Account;
