import Block from "../../core/Block";
import router from "../../core/Router";
import store, { StoreEvents } from "../../core/Store";
import { isEmpty } from "../../utils/helpers/isEmpty";

import chat from "../../controllers/chat";
import auth from "../../controllers/auth";
import messenger from "../../controllers/messenger";

import Input from "../../components/input/input";
import Link from "../../components/link/link";

import "../../sass/style.scss";
import template from "./template";

import profileArrowBG from "../../../static/image/profile-arrow.svg";
import searchBG from "../../../static/image/search.svg";

console.log("iueghvuuksbfhkfvnlrgku");


class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    if (isEmpty(store.getState())) {
      auth.getUserInfo();
      chat.getChats();
      console.log(store.getState());
    }

    const linkToSetting = new Link({
      name: "Профиль",
      class: "chat-list__link",
      events: {
        click: () => router.go("/settings"),
      },
    });

    const inputSearch = new Input({
      name: "search",
      id: "search",
      class: "chat-list__search",
      type: "text",
      placeholder: "Поиск",
    });

    const addContact = new Link({
      name: "+",
      class: "contact__counter contact__counter__add",
      events: {
        click: messenger.openAddChatPopup,
      },
    });

    const openMenu = new Link({
      name: `
      <div class="chat-text__header__menu_dot"></div>
      <div class="chat-text__header__menu_dot"></div>
      <div class="chat-text__header__menu_dot"></div>`,
      class: "chat-text__header__menu",
      events: {
        click: () => {
          const openMenuBlock = document.querySelector(
            ".menu__open"
          ) as HTMLDivElement;
          openMenuBlock.classList.toggle("menu__open__opened");
        },
      },
    });

    const addUser = new Link({
      name: "+",
      class: "contact__counter menu__open__counter",
      events: {
        click: messenger.openAddUserToChatPopup,
      },
    });

    const removeUser = new Link({
      name: "-",
      class: "contact__counter menu__open__counter",
      events: {
        click: messenger.openDeleteUserFromChatPopup,
      },
    });

    super("div", {
      addContact,
      addUser,
      openMenu,
      removeUser,
      inputSearch,
      linkToSetting,
      events: {
        click: messenger.pageClick,
        submit: messenger.pageClick,
      },
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

export default Chat; profileArrowBG; searchBG;
