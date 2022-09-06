import BaseAPI from "./baseAPI";
import { Options } from "./baseAPI";

class UserAPI extends BaseAPI {
  private changeProfileUrl: string;
  private changeAvatarUrl: string;
  private changePasswordUrl: string;
  private userUrl: string;
  private findUsersUrl: string;

  public constructor() {
    super();

    this.changeProfileUrl = `${this.baseUrl}/user/profile`;
    this.changeAvatarUrl = `${this.baseUrl}/user/profile/avatar`;
    this.changePasswordUrl = `${this.baseUrl}/user/password`;
    this.userUrl = `${this.baseUrl}/user`;
    this.findUsersUrl = `${this.baseUrl}/user/search`;
  }

  public changeUserProfile(data: Record<string, any>) {
    const options: Options = {
      method: "PUT",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.put(this.changeProfileUrl, options);
  }

  public changeUserAvatar(data: FormData) {
    const options: Options = {
      method: "PUT",
      credentials: true,
      data: data,
    };

    return this.http.put(this.changeAvatarUrl, options);
  }

  public changeUserPassword(data: Record<string, any>) {
    const options: Options = {
      method: "PUT",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.put(this.changePasswordUrl, options);
  }

  public getUserById(id: string) {
    const options: Options = {
      method: "GET",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      data: { id },
    };

    return this.http.get(`${this.userUrl}/${id}`, options);
  }

  public findUsers(data: Record<string, any>) {
    const options: Options = {
      method: "POST",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.post(this.findUsersUrl, options);
  }
}

export default UserAPI;
