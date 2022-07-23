import Handlebars from "handlebars";
import store from "../../utils/Store";

Handlebars.registerHelper("if_user", function (a: HTMLElement) {
  const i = store.getState().user.display_name;

  if (a == i) {
    return `_out`;
  } else {
    return;
  }
});

Handlebars.registerHelper("if_time", function (a: string) {
  if (a) {
    const i = Number(a.slice(12, 13)) + 3;
    const newA = a.slice(11, 12) + i + a.slice(13, 16);
    return `<div class="contact__time">${newA}</div>`;
  }
});

Handlebars.registerHelper("if_count", function (a: number) {
  if (a == 0) {
    return;
  } else {
    return `<div class="contact__counter">${a}</div>`;
  }
});

const template = Handlebars.compile(
  `<main>
  <div class="chat">
    <div class="chat-list">

    {{{ linkToSetting }}}
    {{{ inputSearch }}}
      
    <div class="chat-list__wrapper">
    <div class="contact contact__add">
      {{#if user.avatar }}
            <img class="contact__avatar account__avatar__img" src="https://ya-praktikum.tech/api/v2/resources{{ user.avatar }}"
              alt="user avatar"/>
          {{else}}
            <img class="contact__avatar account__avatar__img" src="http://localhost:3000/avatar.cc23c0e3.svg?1657909389002"
              alt="user avatar"/>
          {{/if}}
      <div class="contact__name">Начните общение</div>
      <div class="contact__text">Создайте новый чат</div>
      {{{ addContact }}}
    </div>

    {{#each chats}}
      <div class="contact" data-id="{{ id }}" data-value="chats" data-title="{{ title }}" data-avatar="{{ avatar }}">
        <div class="contact__avatar">

          {{#if avatar }}
            <img class="contact__avatar account__avatar__img" src="https://ya-praktikum.tech/api/v2/resources{{ avatar}}"
              alt="user avatar"/>
          {{else}}
            <img class="contact__avatar account__avatar__img" src="http://localhost:3000/avatar.cc23c0e3.svg?1657909389002"
              alt="user avatar"/>
          {{/if}}
        </div>
      <div class="contact__name">{{ title }}</div>
      <div class="contact__text">{{ last_message.content }}</div>
      {{#if_time last_message.time}}{{/if_time}}
      {{#if_count unread_count}}{{/if_count}}
      
      </div>
    {{/each}}
      
      </div>
    </div>

    <div class="chat-text">
      <div class="chat-text__header">

        <div class="chat-text__header_wrap">
          <div class="chat-text__header__avatar">

          {{#if currentChats.avatar }}
            <img class="contact__avatar account__avatar__img" src="https://ya-praktikum.tech/api/v2/resources{{ currentChats.avatar }}"
              alt="user avatar"/>
          {{else}}
            <img class="contact__avatar account__avatar__img" src="http://localhost:3000/avatar.cc23c0e3.svg?1657909389002"
              alt="user avatar"/>
          {{/if}}

          </div>
          <span class="chat-text__header__name">{{ currentChats.title }}</span>
        </div>

        {{{openMenu}}}
        
        <div class="menu__open">
          <div class="menu__open__item"> {{{ addUser }}} Добавить пользователя</div>
          <div class="menu__open__item"> {{{ removeUser }}} Удалить пользователя</div>
        </div>

      </div>

      <div class="chat-text__ribbon">

      {{#each messages}}

        <div class="chat-text__ribbon__desk chat-text__ribbon__desk{{#if_user name}}{{/if_user}}">
          <div class="chat-text__ribbon__desk__author chat-text__ribbon__desk__author{{#if_user name}}{{/if_user}}">
          <div class="chat-text__ribbon__desk__avatar">
          {{#if avatar }}
            <img class="contact__avatar account__avatar__img" src="https://ya-praktikum.tech/api/v2/resources{{ avatar }}"
              alt="user avatar"/>
          {{else}}
            <img class="contact__avatar account__avatar__img" src="http://localhost:3000/avatar.cc23c0e3.svg?1657909389002"
              alt="user avatar"/>
          {{/if}}
          </div>
          <div class="chat-text__ribbon__desk__name chat-text__ribbon__desk__name{{#if_user name}}{{/if_user}}">{{ name }}</div>
          </div>
          {{ content }}
          <div class="chat-text__ribbon__desk__time chat-text__ribbon__desk__time{{#if_user name}}{{/if_user}}">{{ time }}</div>
        </div>

      {{/each}}

      <div class="chat-text__ribbon__date">{{ messages.[0].time }}</div>


      </div>
      <form class="chat-text__footer" data-value="messageForm">

        <label class="chat-text__footer_file_label" for="files">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#2400FF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#2400FF"/>
          </svg>
        </label>

        <input type="file" class="chat-text__footer_file_input" id="files">
        <input type="text" class="chat-text__footer_message_input" id="message" placeholder="Сообщение">

        <button class="chat-text__footer_back" type="submit">
          <div class="back__arrow back__arrow_footer"></div>
        </button>

      </form>
    </div>
  </div>
</main>`
);

export default template;
