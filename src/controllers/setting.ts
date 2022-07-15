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

      // case "openChangeProfilePopup":
      //   const profilePopup = popup.createPopup({
      //     popipId: "profilePopup",
      //     title: "Изменить данные",
      //     button: {
      //       name: "Сохранить",
      //       event: {
      //         click: () => {
      //           const profilePopup = document.getElementById(
      //             "profilePopup"
      //           ) as HTMLFormElement;
      //           const form = new FormData(profilePopup);

      //           user.changeUserAvatar(form);
      //         },
      //       },
      //     },
      //     inputs: [
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "email",
      //       },
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "login",
      //       },
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "first_name",
      //       },
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "second_name",
      //       },
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "display_name",
      //       },
      //       {
      //         class: "change__field__input",
      //         type: "text",
      //         name: "phone",
      //       },
      //     ],
      //   });

      //   renderDOM("main", profilePopup);
      //   break;

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
