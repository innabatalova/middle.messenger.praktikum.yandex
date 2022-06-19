import "./sass/style.scss";

import renderDOM from "./utils/renderDOM";

import Account from "./pages/account/account";
import Auth from "./pages/auth/auth";
import Chat from "./pages/chat/chat";
import Error404 from "./pages/errors/error-404";
import Error500 from "./pages/errors/error-500";
import Registry from "./pages/registry/registry";

const path: string = window.location.pathname;

switch (path) {
  case "/":
    renderDOM("#root", new Auth());
    break;
  case "/auth":
    renderDOM("#root", new Auth());
    break;
  case "/registry":
    renderDOM("#root", new Registry());
    break;
  case "/chat":
    renderDOM("#root", new Chat());
    break;
  case "/account":
    renderDOM("#root", new Account());
    break;
  case "/500":
    renderDOM("#root", new Error500({ code: 500 }));
    break;
  default:
    renderDOM("#root", new Error404({ code: 404 }));
}
