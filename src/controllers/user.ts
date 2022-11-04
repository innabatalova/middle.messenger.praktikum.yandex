import UserAPI from "@api/userAPI";
import store from "@core/Store";

class UserController {
  private usersAPIInstance: UserAPI;

  public constructor() {
    this.usersAPIInstance = new UserAPI();
  }

  public changeUserAvatar(data: FormData) {
    this.usersAPIInstance
      .changeUserAvatar(data)
      .then((xhr: any) => store.setState("user", xhr.response))
      .catch((err: Error) => alert(err.message));
  }

  public changeUserProfile(data: Record<string, any>) {
    this.usersAPIInstance
      .changeUserProfile(data)
      .then((xhr: any) => store.setState("user", xhr.response))
      .catch((err: Error) => alert(err.message));
  }

  public changeUserPassword(data: Record<string, any>) {
    this.usersAPIInstance
      .changeUserPassword(data)
      .then(() => store.setState("user.changePassword", new Date()))
      .catch((err: Error) => alert(err.message));
  }

  public getUserById(id: string) {
    return this.usersAPIInstance.getUserById(id);
  }

  public findUsersByLogin(data: Record<string, any>) {
    return this.usersAPIInstance.findUsers(data);
  }
}

export default new UserController();
