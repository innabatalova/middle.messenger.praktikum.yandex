import Handlebars from "handlebars";

Handlebars.registerHelper("if_eq", function (a: HTMLElement) {
  if (a == null) {
    return `http://localhost:3000/avatar.cc23c0e3.svg?1657909389002`;
  } else {
    return `https://ya-praktikum.tech/api/v2/resources`;
  }
});

const template = Handlebars.compile(
  `<main>
  <div class="container">
    <div class="back">
      {{{ backArrow }}}
    </div>
    <div class="account">

      <div class="account__avatar" name="avatar">
        <img src="{{#if_eq user.avatar}}{{/if_eq}}{{ user.avatar }}"
        alt="user avatar" 
        class="account__avatar__img">
        <span class="account__avatar__name">{{{ user.first_name }}}</span>
        {{{ linkChangeAvatar }}}
      </div>

      <div class="account__input">
            <div class="account__field" name="email">
              <span class="account__field__data">Почта</span>
              <span class="account__field__value">{{{ user.email }}}</span>
            </div>

            <div class="account__field" name="login">
              <span class="account__field__data">Логин</span>
              <span class="account__field__value">{{{ user.login }}}</span>
            </div>

            <div class="account__field" name="first_name">
              <span class="account__field__data">Имя</span>
              <span class="account__field__value">{{{ user.first_name }}}</span>
            </div>

            <div class="account__field" name="second_name">
              <span class="account__field__data">Фамилия</span>
              <span class="account__field__value">{{{ user.second_name }}}</span>
            </div>

            <div class="account__field" name="display_name">
              <span class="account__field__data">Имя в чате</span>
              <span class="account__field__value">{{{ user.display_name }}}</span>
            </div>

            <div class="account__field" name="phone">
              <span class="account__field__data">Телефон</span>
              <span class="account__field__value">{{{ user.phone }}}</span>
            </div>
      </div>
      {{{ linkChangeData }}}
      {{{ linkChangePass }}}
      {{{ linkOut }}}
      </div>
  </div>
</main>`
);

export default template;
