import Block from "../../utils/Block";

import Contact from "../../components/contact/contact";

import photo from "../../../static/image/photo-content.png";
import "../../sass/style.scss";
import template from "./template";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
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
      {
        contact: new Contact({
          name: "Киноклуб",
          text: "Вы: стикер",
          time: "12:00",
        }),
      },
      {
        contact: new Contact({
          name: "Илья",
          text: "Друзья, у меня для вас особенный выпуск новостей!...",
          time: "15:12",
          counter: "4",
        }),
      },
      {
        contact: new Contact({
          name: "Вадим",
          text: "Вы: Круто!",
          time: "Пт",
        }),
      },
      {
        contact: new Contact({
          name: "тет-а-теты",
          text: "И Human Interface Guidelines и Material Design рекомендуют...",
          time: "Ср",
        }),
      },
      {
        contact: new Contact({
          name: "1, 2, 3",
          text: "Миллионы россиян ежедневно проводят десятки часов свое...",
          time: "Пн",
        }),
      },
      {
        contact: new Contact({
          name: "Design Destroyer",
          text: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
          time: "Ср",
        }),
      },
      {
        contact: new Contact({
          name: "Day.",
          text: "В 2008 году художник Jon Rafman начал собирать...",
          time: "Пн",
        }),
      },
    ];

    super("div", {
      contactList,
      photoContant,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Chat;
