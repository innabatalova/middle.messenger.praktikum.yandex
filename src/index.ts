// import "./sass/style.scss";

// import router from "./core/Router";

// import Account from "./pages/account/account";
// import Auth from "./pages/auth/auth";
// import Chat from "./pages/chat/chat";
// import Error404 from "./pages/errors/error-404";
// import Error500 from "./pages/errors/error-500";
// import Registry from "./pages/registry/registry";

// router
//   .use("/", Auth)
//   .use("/sign-up", Registry)
//   .use("/messenger", Chat)
//   .use("/settings", Account)
//   .use("/500", Error500, { code: 500 })
//   .use("/404", Error404, { code: 404 })
//   .start();

import Handlebars from "handlebars";

const name = {name: "Авторизоваться"};

const template = Handlebars.compile(
  `<button type="submit" class="main-btn main-btn_auth {{class}}">
      {{name}}
   </button>`
);

let result = 
   `<button type="submit" class="main-btn main-btn_auth ">
      Авторизоваться
   </button>`;


console.log(template(name));
console.log(result);

