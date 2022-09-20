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
import Block from "./core/Block";
const template = Handlebars.compile(
   `<button type="submit" class="main-btn main-btn_auth {{class}}">
   <div> {{name}} </div>
    </button>`
 );

class TestComponent extends Block {
   constructor(props: Record<string, any> = {}) {
     super("div", props);
   }
 
   render() {
     return this.setTemplate(template, this.props);
   }
 }

 const exComponent = new TestComponent({
   name: 'testing block',
 });

 const content = exComponent.getElement();
 const child = content.querySelector('div');
 //child.textContent = "test";


console.log(child?.textContent);

