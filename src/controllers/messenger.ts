import renderDOM from "../utils/helpers/renderDOM";

import PopupController from "./popup";
import chat from "./chat";
import user from "./user";
import store from "../utils/Store";
import Socket from "../utils/Soket";
import Validation from "../utils/Validation";

let socket: Socket;

class MessengerController {
  public pageClick(event: Event): void {
    if ((event.target as HTMLElement).dataset.value === "messageForm") {
      event.preventDefault();

      const newMessage = (
        (event.target as HTMLFormElement)[1] as HTMLInputElement
      ).value;
      const verifyResult = Validation.verification("message", newMessage);
      if (verifyResult.verify == false) {
        alert(verifyResult.message);
      }

      console.log(verifyResult);

      const id = store.getState().currentChats.id;
      const sockets = store.getState().socket;

      Object.entries(sockets).forEach(([key, value]) => {
        if (key === id) socket = value as Socket;
      });

      socket.send({
        content: newMessage,
        type: "message",
      });

      const chats = store.getState().chats;
      let chatIndex = chats
        .map((el: any) => el.id)
        .findIndex((i: any) => i == id);
      store.setState(`chats.${chatIndex}.last_message.content`, newMessage);

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

      const sockets = store.getState().socket;

      Object.entries(sockets).forEach(([key, value]) => {
        if (key === id) socket = value as Socket;
      });

      socket.send({
        content: "0",
        type: "get old",
      });

      store.setState("currentChats", { id, title, avatar });

      console.log(store.getState());
    }
  }

  public openAddChatPopup() {
    const popup = new PopupController();
    const addChatPopup = popup.createPopup({
      id: "addChatPopup",
      title: "Создать чат",
      button: {
        name: "Создать",
        events: {
          click: () => {
            const addChatPopup = document.getElementById(
              "addChatPopup"
            ) as HTMLFormElement;

            const formData: Record<string, any> = {};
            new FormData(addChatPopup).forEach((value, key) => {
              formData[key] = value;
            });

            chat.createChat(formData);

            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();
          },
        },
      },
      link: {
        dataset: "closePopup",
        name: "Закрыть",
        events: {
          click: () => {
            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();
          },
        },
      },
      inputs: [
        {
          class: "change__field__input",
          type: "text",
          name: "title",
          placeholder: "Имя чата",
        },
      ],
    });

    renderDOM("main", addChatPopup);
  }

  public openAddUserToChatPopup() {
    const popup = new PopupController();
    const addUserToChatPopup = popup.createPopup({
      id: "addUserToChatPopup",
      title: "Добавить пользователя",
      button: {
        name: "Добавить",
        events: {
          click: (event: Event) => {
            event.preventDefault();

            const addUserToChatPopup = document.getElementById(
              "addUserToChatPopup"
            ) as HTMLFormElement;

            const formData: Record<string, any> = {};
            new FormData(addUserToChatPopup).forEach((value, key) => {
              formData[key] = value;
            });

            chat.addUserToChat(formData);

            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();

            const mesArray = store.getState().messages;
            const nameUser = formData.login;
            const date = new Date();
            const dataAdding = `${date.getHours()}
                      ${date.getMinutes()} 
                      ${date.getDate()}
                      ${date.getMonth()}
                      ${date.getFullYear()}`;
            const textAlert = {
              content: `Вы добавили ${nameUser} в чат`,
              time: dataAdding,
            };
            mesArray.unshift(textAlert);
          },
        },
      },
      link: {
        dataset: "closePopup",
        name: "Закрыть",
        events: {
          click: () => {
            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();
          },
        },
      },
      inputs: [
        {
          class: "change__field__input",
          type: "text",
          name: "login",
          placeholder: "Введите логин",
        },
      ],
    });

    renderDOM("main", addUserToChatPopup);
  }

  public openDeleteUserFromChatPopup() {
    const popup = new PopupController();
    const deleteUserFromChatPopup = popup.createPopup({
      id: "deleteUserFromChatForm",
      title: "Удалить пользователя",
      button: {
        name: "Удалить",
        events: {
          click: () => {
            const deleteUserFromChatForm = document.getElementById(
              "deleteUserFromChatForm"
            ) as HTMLFormElement;

            const formData: Record<string, any> = {};
            new FormData(deleteUserFromChatForm).forEach((value, key) => {
              formData[key] = value;
            });

            chat.deleteUserFromChat(formData);

            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();

            const mesArray = store.getState().messages;
            const nameUser = formData.login;
            const date = new Date();
            const dataRemoving = `${date.getHours()}
                      ${date.getMinutes()} 
                      ${date.getDate()}
                      ${date.getMonth()}
                      ${date.getFullYear()}`;
            const textAlert = {
              content: `Вы удалили ${nameUser} из чата`,
              time: dataRemoving,
            };
            mesArray.unshift(textAlert);
          },
        },
      },
      link: {
        dataset: "closePopup",
        name: "Закрыть",
        events: {
          click: () => {
            const avatarPopupClose = document.querySelector(
              ".account__avatar__download"
            ) as HTMLDivElement;
            avatarPopupClose.remove();
          },
        },
      },
      inputs: [
        {
          class: "change__field__input",
          type: "text",
          name: "login",
          placeholder: "Введите логин",
        },
      ],
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
        .then((xhr: any) => {
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
      .then((xhr: any) => {
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
