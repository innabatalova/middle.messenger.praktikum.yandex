import BaseAPI from "./baseAPI";

export type Options = {
  method: string;
  timeout?: number;
  credentials?: boolean;
  mode?: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
  data?: Record<string, any>;
};

class AuthAPI extends BaseAPI {
  private signUpUrl: string;
  private signInUrl: string;
  private getUserInfoUrl: string;
  private logoutUrl: string;

  constructor() {
    super();

    this.signUpUrl = `${this.baseUrl}/auth/signup`;
    this.signInUrl = `${this.baseUrl}/auth/signin`;
    this.getUserInfoUrl = `${this.baseUrl}/auth/user`;
    this.logoutUrl = `${this.baseUrl}/auth/logout`;
  }

  public signUp(data: Record<string, any>) {
    const options: Options = {
      method: "POST",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.post(this.signUpUrl, options);
  }

  public signIn(data: Record<string, any>) {
    const options: Options = {
      method: "POST",
      credentials: true,
      headers: {
        "content-type": "application/json",
      },
      body: data,
    };

    return this.http.post(this.signInUrl, options);
  }

  public getUserInfo() {
    const options: Options = {
      method: "GET",
      credentials: true,
    };

    return this.http.get(this.getUserInfoUrl, options);
  }

  public logout() {
    const options: Options = {
      method: "POST",
      credentials: true,
      body: {},
    };

    return this.http.post(this.logoutUrl, options);
  }
}

export default AuthAPI;
