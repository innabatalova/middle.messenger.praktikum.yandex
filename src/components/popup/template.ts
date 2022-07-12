import Handlebars from "handlebars";
const template = Handlebars.compile(`
<div class="account__avatar__download">
  <form class="account__avatar__form">
    <span class="account__avatar__title">{{ popupTitle }}</span>
    {{#each popupInputs}}
        {{{ input }}}
    {{/each}}
    {{{ popupButton }}}
  </form>
</div>
`);

export default template;
