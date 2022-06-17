import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<label class="auth-form__input_label">{{label}}
  <input class="auth-form__input {{class}}" type={{type}} name={{name}}>
</label>`
);

export default template;
