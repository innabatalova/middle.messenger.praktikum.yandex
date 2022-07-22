import Handlebars from "handlebars";

const template = Handlebars.compile(`
<div class="account__avatar__download">
  <form class="account__avatar__form {{ popupClass }}" id={{ popupId }}>
    <span class="account__avatar__title" name={{ name }}>{{ popupTitle }}</span>
    {{#each popupInputs}}
        {{{ input }}}
    {{/each}}
    {{{ popupButton }}}
    {{{ popupLink }}}
  </form>
</div>
`);

export default template;
