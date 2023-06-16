import "../src/sass/style.scss";

import router from "../src/core/Router";

import Account from "../src/pages/account/account";
import Auth from "../src/pages/auth/auth";
import Chat from "../src/pages/chat/chat";
import Error404 from "../src/pages/errors/error-404";
import Error500 from "../src/pages/errors/error-500";
import Registry from "../src/pages/registry/registry";

router
  .use("/", Auth)
  .use("/sign-up", Registry)
  .use("/messenger", Chat)
  .use("/settings", Account)
  .use("/500", Error500, { code: 500 })
  .use("/404", Error404, { code: 404 })
  .start();

