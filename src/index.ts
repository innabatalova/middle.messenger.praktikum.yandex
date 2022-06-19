import renderDOM from "./utils/renderDOM";

import Input from "./components/input/input";
import Registry from "./pages/registry/registry";
import Account from "./pages/account/account";

import "./sass/style.scss";

renderDOM("#root", new Registry());
