import renderDOM from "./utils/renderDOM";

import Input from "./components/input/input";
import Auth from "./pages/auth/auth";
import Account from "./pages/account/account";

import "./sass/style.scss";

renderDOM("#root", new Auth());
