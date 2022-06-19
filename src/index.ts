import renderDOM from "./utils/renderDOM";

//import Button from "./components/button/button";
import Auth from "./pages/auth/auth";
import Account from "./pages/account/account";

import "./sass/style.scss";

renderDOM("#root", new Auth());
