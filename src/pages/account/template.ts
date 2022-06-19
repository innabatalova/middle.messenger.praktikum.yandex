import Handlebars from "handlebars";

const template = Handlebars.compile(
  `<main>
  <div class="container">
    <div class="back">
      <div class="back__arrow"></div>
    </div>
    <div class="account">
      <div class="account__avatar" name="avatar">
        <img src="{{ avatarUser }}" alt="user avatar" class="account__avatar__img">
        <span class="account__avatar__name">Иван</span>
        <span class="account__avatar__change">Поменять аватар</span>
      </div>
      <div class="account__input">
            {{{ fieldEmail }}}
            {{{ fieldLogin }}}
            {{{ fieldFisrtName }}}
            {{{ fieldSecondName }}}
            {{{ fieldDisplayName }}}
            {{{ fieldPhone }}}
      </div>
      {{{ linkChangeData }}}
      {{{ linkChangePass }}}
      {{{ linkOut }}}
    </div>
  </div>
</main>`
);

export default template;
