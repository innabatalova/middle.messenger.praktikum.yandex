import Handlebars from "handlebars";
const template = Handlebars.compile(
  `
<input class="auth-form__input {{class}}" type={{type}} name={{name}} id={{id}} placeholder={{placeholder}} value={{value}}>
`
);

export default template;
