import AuthAPI from "../api/authAPI";
import router from "../utils/Router";
import store from "../utils/Store";
import chats from "../controllers/chat";

class AuthController {
  private authAPIInstance: AuthAPI;

  public constructor() {
    this.authAPIInstance = new AuthAPI();
  }

  xhr = new XMLHttpRequest();

  public signUp(data: Record<string, any>) {
    this.authAPIInstance
      .signUp(data)
      .then(() => {
        router.go("/messenger");
      })
      .catch((err: Error) => alert(err.message));
  }

  public signIn(data: Record<string, any>) {
    this.authAPIInstance
      .signIn(data)
      .then(() => {
        this.getUserInfo();
        chats.getChats();

        router.go("/messenger");
      })
      .catch((err: Error) => alert(err.message));
  }

  public getUserInfo() {
    this.authAPIInstance
      .getUserInfo()
      .then((xhr: any) => {
        if (xhr.status != 200) {
          router.go("/");
        } else {
          store.setState("user", xhr.response);
        }
      })
      .catch((err: Error) => alert(err.message));
  }

  public logout() {
    this.authAPIInstance
      .logout()
      .then(() => {
        router.go("/");
      })
      .catch((err: Error) => alert(err.message));
  }
}

export default new AuthController();
