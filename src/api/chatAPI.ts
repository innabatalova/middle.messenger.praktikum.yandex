import BaseAPI from "./baseAPI";
import { Options } from "./baseAPI";

class ChatsAPI extends BaseAPI {
  private chatsUrl: string;
  private usersChatUrl: string;
  private tokenUrl: string;

  public constructor() {
    super();

    this.chatsUrl = `${this.baseUrl}/chats`;
    this.usersChatUrl = `${this.baseUrl}/chats/users`;
    this.tokenUrl = `${this.baseUrl}/chats/token`;
  }

  public getChats(data: Record<string, any>) {
    const options: Options = {
      method: "GET",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      data: data,
    };
    
    return this.http.get(this.chatsUrl, options);
  }

  public createChat(data: Record<string, any>) {
    const options: Options = {
      method: "POST",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };
    return this.http.post(this.chatsUrl, options);
  }

  public addUserToChat(data: Record<string, any>) {
    const options: Options = {
      method: "PUT",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.put(this.usersChatUrl, options);
  }

  public deleteUserFromChat(data: Record<string, any>) {
    const options: Options = {
      method: "DELETE",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.delete(this.usersChatUrl, options);
  }

  public getChatToken(id: string) {
    const options: Options = {
      method: "POST",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: {},
    };

    return this.http.post(`${this.tokenUrl}/${id}`, options);
  }
}

export default ChatsAPI;
