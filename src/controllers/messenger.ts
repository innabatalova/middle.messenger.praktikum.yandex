import renderDOM from "../utils/renderDOM";

import PopupController from "./popup";
import chats from "./chat";
import user from "./user";
import store from "../utils/Store";
import Socket from "utils/Soket";

class MessengerController {
  public pageClick(event: Event): void {
    if ((event.target as HTMLElement).dataset.value === "closePopup") {
      (event.target as HTMLElement).remove();
    }

    if ((event.target as HTMLElement).dataset.value === "messageForm") {
      event.preventDefault();

      const id = store.getState().currentChats.id;
      const sockets = store.getState().socket;
      let socket: Socket;

      Object.entries(sockets).forEach(([key, value]) => {
        if (key === id) socket = value as Socket;
      });

      socket.send({
        content: ((event.target as HTMLFormElement)[1] as HTMLInputElement)
          .value,
        type: "message",
      });

      ((event.target as HTMLFormElement)[1] as HTMLInputElement).value = "";
    }

    if (
      (
        (event.target as HTMLElement).closest(
          '[data-value="chats"]'
        ) as HTMLElement
      ).dataset.value === "chats"
    ) {
      const id = (
        (event.target as HTMLElement).closest(
          '[data-value="chats"]'
        ) as HTMLElement
      ).dataset.id;
      const title = (
        (event.target as HTMLElement).closest(
          '[data-value="chats"]'
        ) as HTMLElement
      ).dataset.title;
      const avatar = (
        (event.target as HTMLElement).closest(
          '[data-value="chats"]'
        ) as HTMLElement
      ).dataset.avatar;

      let socket: Socket;
      const sockets = store.getState().socket;

      Object.entries(sockets).forEach(([key, value]) => {
        if (key === id) socket = value as Socket;
      });

      socket.send({
        content: "0",
        type: "get old",
      });

      store.setState("currentChats", { id, title, avatar });
    }
  }

  public openAddChatPopup() {
    const popup = new PopupController();
    const addChatPopup = popup.createPopup({
      formId: "addChatForm",
      formTitle: "Создать чат",
      events: {
        submit: (event: Event) => {
          event.preventDefault();

          const addChatForm = document.getElementById(
            "addChatForm"
          ) as HTMLFormElement;
          const formData: Record<string, any> = {};

          new FormData(addChatForm).forEach((value, key) => {
            formData[key] = value;
          });

          chats.createChat(formData);
        },
      },
      inputs: [
        {
          className: "input form__input",
          type: "text",
          name: "title",
          placeholder: "Имя чата",
        },
      ],
      button: {
        content: "Создать чат",
      },
    });

    renderDOM("main", addChatPopup);
  }

  public openAddUserToChatPopup() {
    const popup = new PopupController();
    const addUserToChatPopup = popup.createPopup({
      formId: "addUserToChatForm",
      formTitle: "Добавить пользователя",
      events: {
        submit: (event: Event) => {
          event.preventDefault();

          const addUserToChatForm = document.getElementById(
            "addUserToChatForm"
          ) as HTMLFormElement;
          const formData: Record<string, any> = {};

          new FormData(addUserToChatForm).forEach((value, key) => {
            formData[key] = value;
          });

          chats.addUserToChat(formData);
        },
      },
      inputs: [
        {
          className: "input form__input",
          type: "text",
          name: "login",
          placeholder: "Логин пользователя",
        },
      ],
      button: {
        content: "Добавить",
      },
    });

    renderDOM("main", addUserToChatPopup);
  }

  public openDeleteUserFromChatPopup() {
    const popup = new PopupController();
    const deleteUserFromChatPopup = popup.createPopup({
      formId: "deleteUserFromChatForm",
      formTitle: "Удалить пользователя",
      events: {
        submit: (event: Event) => {
          event.preventDefault();

          const deleteUserFromChatForm = document.getElementById(
            "deleteUserFromChatForm"
          ) as HTMLFormElement;
          const formData: Record<string, any> = {};

          new FormData(deleteUserFromChatForm).forEach((value, key) => {
            formData[key] = value;
          });

          chats.deleteUserFromChat(formData);
        },
      },
      inputs: [
        {
          className: "input form__input",
          type: "text",
          name: "login",
          placeholder: "Логин пользователя",
        },
      ],
      button: {
        content: "Удалить",
      },
    });

    renderDOM("main", deleteUserFromChatPopup);
  }

  public messageListener() {
    const data = JSON.parse((event as MessageEvent).data);

    if (data.type === "message") {
      this.addMessage(data);
    }

    if (Array.isArray(data)) {
      this.addMessagesArray(data);
    }
  }

  private addMessagesArray(data: Record<string, any>[]) {
    let prepareMessages: {
      time: string;
      avatar: string;
      name: string;
      content: any;
    }[] = [];

    data.forEach((message) => {
      // User
      let first_name: string;
      let second_name: string;
      let display_name: string;
      let avatar: string;
      const userId: string = message.user_id;

      // Date
      const date = new Date(message.time).toLocaleDateString();
      const hours = new Date(message.time).getHours();
      const minutes = new Date(message.time).getMinutes();

      // Text
      const content = message.content;

      // Get user
      user
        .getUserById(userId)
        .then((xhr: XMLHttpRequest) => {
          const {
            avatar,
            display_name = xhr.response.display_name
              ? xhr.response.display_name
              : `${first_name} ${second_name}`,
          } = xhr.response;

          prepareMessages.push({
            time: `${hours}:${minutes} ${date}`,
            name: display_name,
            avatar,
            content,
          });
        })
        .then(() => {
          if (prepareMessages.length == data.length) {
            store.setState("messages", prepareMessages);
          }
        });
    });
  }

  private addMessage(message: {
    user_id: string;
    time: string | number | Date;
    content: any;
  }) {
    let messagesArray = store.getState().messages;

    // User
    let first_name: string;
    let second_name: string;
    const userId: string = message.user_id;

    // Date
    const date = new Date(message.time).toLocaleDateString();
    const hours = new Date(message.time).getHours();
    const minutes = new Date(message.time).getMinutes();

    // Text
    const content = message.content;

    // Get user
    user
      .getUserById(userId)
      .then((xhr: XMLHttpRequest) => {
        const {
          avatar,
          display_name = xhr.response.display_name
            ? xhr.response.display_name
            : `${first_name} ${second_name}`,
        } = xhr.response;

        messagesArray.unshift({
          time: `${hours}:${minutes} ${date}`,
          name: display_name,
          avatar,
          content,
        });
      })
      .then(() => {
        store.setState("messages", messagesArray);
      });
  }
}

export default new MessengerController();
