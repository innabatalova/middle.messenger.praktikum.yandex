import Block from "../utils/Block";

import Input from "../components/input/input";
//import Form from "../module/form/form";
//import Popup from "../module/popup/popup";

class PopupController {
  private innerInputs: Record<string, any>[] = [];
  private form: Block;

  public createPopup(props: Record<string, any>): Block {
    this.createInputs(props.inputs);
    this.createForm(props);

    return new Popup({ form: this.form });
  }

  private createInputs(inputs: Record<string, any>[]) {
    inputs.forEach((input) => {
      this.innerInputs.push({
        input: new Input({
          className: input.className,
          type: input.type,
          name: input.name,
          accept: input?.accept,
          placeholder: input?.placeholder,
        }),
      });
    }, []);
  }

  private createForm(props: Record<string, any>) {
    this.form = new Form(
      {
        button: {
          className: "form__button button",
          type: "submit",
          content: props.button.content,
        },
        formId: props.formId,
        formTitle: props.formTitle,
        events: props.events,
      },
      this.innerInputs
    );
  }
}

export default PopupController;
