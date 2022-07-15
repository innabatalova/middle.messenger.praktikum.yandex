import Handlebars from "handlebars";

const template = Handlebars.compile(`
<div class="account__avatar__download" data-value="closePopup">
  <form class="account__avatar__form {{ popupClass }}" id={{ popupId }}>
    <span class="account__avatar__title">{{ popupTitle }}</span>
    {{#each popupInputs}}
        {{{ input }}}
    {{/each}}
    {{{ popupButton }}}
  </form>
</div>
`);

export default template;
