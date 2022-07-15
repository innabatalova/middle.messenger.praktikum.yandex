import renderDOM from "../utils/renderDOM";

import user from "./user";
import PopupController from "./popup";

class SettingsController {
  public pageClick(event: Event): void {
    const popup = new PopupController();

    switch ((event.target as HTMLElement).dataset.value) {
      case "openAvatarPopup":
        const avatarPopup = popup.createPopup({
          id: "avatarPopup",
          title: "Загрузите файл",
          button: {
            name: "Поменять",
            events: {
              click: (event: Event) => {
                event.preventDefault();

                const avatarPopup = document.getElementById(
                  "avatarPopup"
                ) as HTMLFormElement;
                const form = new FormData(avatarPopup);

                user.changeUserAvatar(form);

                const avatarPopupClose = document.querySelector(
                  ".account__avatar__download"
                ) as HTMLDivElement;
                avatarPopupClose.remove();
              },
            },
          },
          inputs: [
            {
              class: "account__avatar__input",
              type: "file",
              name: "avatar",
            },
          ],
        });

        renderDOM("main", avatarPopup);
        break;

      case "openChangeProfilePopup":
        const oldProfileEmail = document.querySelector(
          '[name="email"]'
        ) as HTMLFormElement;
        const emailOldProps = oldProfileEmail.childNodes[3].textContent;

        const oldProfileLogin = document.querySelector(
          '[name="login"]'
        ) as HTMLFormElement;
        const loginOldProps = oldProfileLogin.childNodes[3].textContent;

        const oldProfileFirstName = document.querySelector(
          '[name="first_name"]'
        ) as HTMLFormElement;
        const firstNameOldProps = oldProfileFirstName.childNodes[3].textContent;

        const oldProfileSecondName = document.querySelector(
          '[name="second_name"]'
        ) as HTMLFormElement;
        const secondNameOldProps =
          oldProfileSecondName.childNodes[3].textContent;

        const oldProfileDisplayName = document.querySelector(
          '[name="display_name"]'
        ) as HTMLFormElement;
        const displayNameOldProps =
          oldProfileDisplayName.childNodes[3].textContent;

        const oldProfilePhone = document.querySelector(
          '[name="phone"]'
        ) as HTMLFormElement;
        const phoneOldProps = oldProfilePhone.childNodes[3].textContent;

        const profilePopup = popup.createPopup({
          id: "profilePopup",
          class: "change__form",
          title: "Изменить данные",
          button: {
            name: "Сохранить",
            events: {
              click: () => {
                const profileForm = document.getElementById(
                  "profilePopup"
                ) as HTMLFormElement;

                const formData: Record<string, any> = {};
                new FormData(profileForm).forEach((value, key) => {
                  formData[key] = value;
                });

                user.changeUserProfile(formData);

                const avatarPopupClose = document.querySelector(
                  ".account__avatar__download"
                ) as HTMLDivElement;
                avatarPopupClose.remove();
              },
            },
          },
          inputs: [
            {
              class: "change__field__input",
              type: "text",
              name: "email",
              placeholder: "Email",
              value: emailOldProps,
            },
            {
              class: "change__field__input",
              type: "text",
              name: "login",
              placeholder: "Логин",
              value: loginOldProps,
            },
            {
              class: "change__field__input",
              type: "text",
              name: "first_name",
              placeholder: "Имя",
              value: firstNameOldProps,
            },
            {
              class: "change__field__input",
              type: "text",
              name: "second_name",
              placeholder: "Фамилия",
              value: secondNameOldProps,
            },
            {
              class: "change__field__input",
              type: "text",
              name: "display_name",
              placeholder: "Ник",
              value: displayNameOldProps,
            },
            {
              class: "change__field__input",
              type: "text",
              name: "phone",
              placeholder: "Телефон",
              value: phoneOldProps,
            },
          ],
        });

        renderDOM("main", profilePopup);
        break;

      // case "openChangePasswordPopup":
      //   const passwordPopup = popup.createPopup({
      //     formId: "passwordForm",
      //     formTitle: "Изменить пароль",
      //     events: {
      //       submit: (event: Event) => {
      //         event.preventDefault();

      //         const passwordForm = document.getElementById(
      //           "passwordForm"
      //         ) as HTMLFormElement;

      //         const formData: Record<string, any> = {};
      //         new FormData(passwordForm).forEach((value, key) => {
      //           formData[key] = value;
      //         });

      //         user.changeUserPassword(formData);
      //       },
      //     },
      //     inputs: [
      //       {
      //         className: "input form__input",
      //         type: "password",
      //         name: "oldPassword",
      //         placeholder: "Старый пароль",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "password",
      //         name: "newPassword",
      //         placeholder: "Новый пароль",
      //       },
      //     ],
      //     button: {
      //       content: "Изменить",
      //     },
      //   });

      //   renderDOM("main", passwordPopup);
      //   break;

      case "closePopup":
        const avatarPopupClose = document.querySelector(
          ".account__avatar__download"
        ) as HTMLDivElement;
        avatarPopupClose.remove();
        break;

      default:
        break;
    }
  }
}

export default new SettingsController();
