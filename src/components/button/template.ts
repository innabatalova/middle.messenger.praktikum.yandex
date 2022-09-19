import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<button type="submit" class="main-btn main-btn_auth {{class}}">
  {{name}}
   </button>`
);



export default template;
