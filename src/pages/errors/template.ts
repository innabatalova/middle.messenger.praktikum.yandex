import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<main>
  <div class="error">
    <h1 class="error__number"> {{number}} </h1>
    <span class="error__info"> {{info}} </span>
    {{{ linkError }}}
  </div>
</main>`
);

export default template;
