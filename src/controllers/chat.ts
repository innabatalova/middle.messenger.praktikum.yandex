import ChatsAPI from "../api/chatAPI";
import store from "../utils/Store";
import user from "./user";
import messenger from "./messenger";
import Socket from "../utils/Soket";

class ChatsController {
  private chatsAPIInstance: ChatsAPI;

  public constructor() {
    this.chatsAPIInstance = new ChatsAPI();
  }

  public getChats(data: Record<string, any> = {}) {
    this.chatsAPIInstance
      .getChats(data)
      .then((xhr: any) => store.setState("chats", xhr.response))
      .then(() => {
        store.getState().chats.forEach((chat: Record<string, any>) => {
          this.getChatToken(chat.id).then((token: any) => {
            const socket = new Socket(store.getState().user.id, chat.id, token);

            socket.message(() => {
              messenger.messageListener();
            });

            store.setState(`socket.${chat.id}`, socket);
          });
        });
      })
      .catch((err: Error) => console.log(err.message));
  }

  public createChat(data: Record<string, any>) {
    this.chatsAPIInstance
      .createChat(data)
      .then(() => this.getChats())
      .catch((err: Error) => console.log(err.message));
  }

  public getChatToken(id: string) {
    return this.chatsAPIInstance
      .getChatToken(id)
      .then((xhr: any) => xhr.response.token)
      .catch((err: Error) => console.log(err.message));
  }

  public addUserToChat(data: Record<string, any>) {
    user
      .findUsersByLogin(data)
      .then((xhr: any) => xhr.response[0])
      .then((response: any) => {
        const data = {
          users: [response.id],
          chatId: store.getState().currentChats.id,
        };
        this.chatsAPIInstance.addUserToChat(data).then(() => {
          store.setState(`currentChats.user`, response.first_name);
        });
      })
      .catch((err: Error) => console.log(err.message));
  }

  public deleteUserFromChat(data: Record<string, any>) {
    user
      .findUsersByLogin(data)
      .then((xhr: any) => xhr.response[0])
      .then((response: any) => {
        const data = {
          users: [response.id],
          chatId: store.getState().currentChats.id,
        };
        this.chatsAPIInstance
          .deleteUserFromChat(data)
          .then(() =>
            store.setState(`currentChats.users.${response.login}`, response.id)
          );
      })
      .catch((err: Error) => console.log(err.message));
  }
}

export default new ChatsController();
