import renderDOM from "../utils/renderDOM";

//import user from "./user";
import PopupController from "./popup";

class SettingsController {
  public pageClick(event: Event): void {
    const popup = new PopupController();

    const avatarPopup = popup.createPopup({
      title: "Загрузите файл",
      button: { name: "Поменять" },
      inputs: [
        {
          class: "account__avatar__input",
          type: "file",
          name: "avatar",
        },
      ],
    });

    renderDOM("main", avatarPopup);

    switch ((event.target as HTMLElement).dataset.value) {
      case "openAvatarPopup":
        const avatarPopup = popup.createPopup({
          popupTitle: "Загрузите файл",
          popupButton: {
            name: "Поменять",
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
      //     formId: "profileForm",
      //     formTitle: "Изменить данные",
      //     events: {
      //       submit: (event: Event) => {
      //         event.preventDefault();

      //         const profileForm = document.getElementById(
      //           "profileForm"
      //         ) as HTMLFormElement;

      //         const formData: Record<string, any> = {};
      //         new FormData(profileForm).forEach((value, key) => {
      //           formData[key] = value;
      //         });

      //         user.changeUserProfile(formData);
      //       },
      //     },
      //     inputs: [
      //       {
      //         className: "input form__input",
      //         type: "text",
      //         name: "first_name",
      //         placeholder: "Имя",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "text",
      //         name: "second_name",
      //         placeholder: "Фамилия",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "text",
      //         name: "display_name",
      //         placeholder: "Имя в чате",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "text",
      //         name: "login",
      //         placeholder: "Логин",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "tel",
      //         name: "phone",
      //         placeholder: "Телефон",
      //       },
      //       {
      //         className: "input form__input",
      //         type: "email",
      //         name: "email",
      //         placeholder: "Почта",
      //       },
      //     ],
      //     button: {
      //       content: "Изменить",
      //     },
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

      // case "closePopup":
      //   (event.target as HTMLElement).remove();
      //   break;

      default:
        break;
    }
  }
}

export default new SettingsController();
