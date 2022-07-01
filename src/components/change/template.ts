import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<div class="change__field" name={{name}}>
  <span class="change__field__data">{{data}}</span>
  <input class="change__field__input" type={{type}}>
  </div>`
);

export default template;
