import Block from "../../utils/Block";
import router from "../../utils/Router";
import store, { StoreEvents } from "../../utils/Store";
import { isEmpty } from "../../utils/helpers/isEmpty";

import chat from "../../controllers/chat";
import auth from "../../controllers/auth";
import messenger from "../../controllers/messenger";

import Contact from "../../components/contact/contact";
import Input from "../../components/input/input";

import photo from "../../../static/image/photo-content.png";
import "../../sass/style.scss";
import template from "./template";
import Link from "../../components/link/link";

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
      // events: {
      //   click: () => router.go("/settings"),
      // },
    });

    const addContact = new Link({
      name: "+",
      class: "contact__counter contact__counter__add",
      events: {
        click: messenger.openAddChatPopup,
      },
    });

    const photoContant = photo;

    super("div", {
      addContact,
      inputSearch,
      photoContant,
      linkToSetting,
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

export default Chat;
