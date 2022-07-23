import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<main>
  <form class="auth-form">

    <div class="input-wrapper">
      <h1 class="auth-form__title">Вход</h1>
      <label class="auth-form__input_label">Логин</label>
      {{{ inputLogin }}}
      <label class="auth-form__input_label">Пароль</label>
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
