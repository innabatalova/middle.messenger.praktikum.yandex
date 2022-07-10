import Block from "../../utils/Block";
import router from "../../utils/Router";
import store, { StoreEvents } from "../../utils/Store";
import { isEmpty } from "../../utils/isEmpty";

import chat from "../../controllers/chat";
import auth from "../../controllers/auth";
import messenger from "../../controllers/messenger";

import Contact from "../../components/contact/contact";

import photo from "../../../static/image/photo-content.png";
import "../../sass/style.scss";
import template from "./template";
import Link from "../../components/link/link";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    if (isEmpty(store.getState())) {
      auth.getUserInfo();
      chat.getChats();
    }

    const linkToSetting = new Link({
      name: "Профиль",
      class: "chat-list__link",
      events: {
        click: () => router.go("/settings"),
      },
    });

    const photoContant = photo;
    const contactList = [
      {
        contact: new Contact({
          name: "Андрей",
          text: "Изображение",
          time: "10:49",
          counter: "2",
        }),
      },
    ];

    super("div", {
      contactList,
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
