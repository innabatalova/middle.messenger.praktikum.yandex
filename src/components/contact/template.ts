import Handlebars from "handlebars";
const template = Handlebars.compile(
  `<div class="contact">
  <div class="contact__avatar"></div>
  <div class="contact__name">{{name}}</div>
  <div class="contact__text">{{text}}</div>
  <div class="contact__time">{{time}}</div>
  <div class="contact__counter">{{counter}}</div>
</div>`
);

export default template;
