import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<a data-value="{{ dataset }}" class="auth-form__link {{class}}">{{{ name }}}</a>`
);

export default template;
