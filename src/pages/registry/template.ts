import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<main>
  <form class="auth-form registry-form">

    <div class="input-wrapper">
      <h1 class="auth-form__title registry-form__title">Регистрация</h1>
      <label class="auth-form__input_label">Почта</label>
      {{{ inputEmail }}}
      <label class="auth-form__input_label">Логин</label>
      {{{ inputLogin }}}
      <label class="auth-form__input_label">Имя</label>
      {{{ inputFirstName }}}
      <label class="auth-form__input_label">Фамилия</label>
      {{{ inputSecondName }}}
      <label class="auth-form__input_label">Телефон</label>
      {{{ inputPhone }}}
      <label class="auth-form__input_label">Пароль</label>
      {{{ inputPass }}}
      <label class="auth-form__input_label">Пароль (ещё раз)</label>
      {{{ inputPassRepeat }}}
    </div>

    <div class="button-wrapper">
      {{{ buttonRegistry }}}
      {{{ linkOpen }}}
    </div>

  </form>
</main>`
);

export default template;
