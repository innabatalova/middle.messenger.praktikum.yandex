import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<a href={{href}} class="auth-form__link {{class}}">{{name}}</a>`
);

export default template;