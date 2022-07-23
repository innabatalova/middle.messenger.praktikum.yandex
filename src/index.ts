import "./sass/style.scss";

import router from "./utils/Router";

import Account from "./pages/account/account";
import Auth from "./pages/auth/auth";
import Chat from "./pages/chat/chat";
import Error404 from "./pages/errors/error-404";
import Error500 from "./pages/errors/error-500";
import Registry from "./pages/registry/registry";

router
  .use("/", Auth)
  .use("/sign-up", Registry)
  .use("/messenger", Chat)
  .use("/settings", Account)
  .use("/500", Error500, { code: 500 })
  .use("/404", Error404, { code: 404 })
  .start();

// var xhr = new XMLHttpRequest(); // new HttpRequest instance
// var url = "https://ya-praktikum.tech/api/v2/auth/signup";
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.responseType = "json";
// xhr.send(JSON.stringify(data));
//xhr.send(data);
