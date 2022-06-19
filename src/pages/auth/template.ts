import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<main>
  <form class="auth-form">

    <div class="input-wrapper">
      <h1 class="auth-form__title">Вход</h1>
      {{{ inputLogin }}}
      {{{ inputPass }}}
    </div>

    <div class="button-wrapper">
      {{{ buttonAuth }}}
      {{{ linkToReg }}}
    </div>

  </form>
</main>`
);

export default template;
