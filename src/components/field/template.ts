import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<div class="account__field" name={{name}}>
  <span class="account__field__data">{{data}}</span>
  <span class="account__field__value">{{{value}}}</span>
</div>`
);

export default template;
