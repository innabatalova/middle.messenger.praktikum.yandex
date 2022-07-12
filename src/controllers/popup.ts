import Block from "../utils/Block";

import Input from "../components/input/input";
import Button from "../components/button/button";
import Popup from "../components/popup/popup";

class PopupController {
  private innerInputs: Record<string, any>[] = [];
  private button: Button;

  public createPopup(props: Record<string, any>): Block {
    this.createInputs(props.inputs);
    this.createButton(props.button);

    return new Popup({
      popupTitle: props.title,
      popupInputs: this.innerInputs,
      popupButton: this.button,
    });
  }

  private createInputs(inputs: Record<string, any>[]) {
    inputs.forEach((input) => {
      this.innerInputs.push({
        input: new Input({
          class: input.class,
          type: input.type,
          name: input.name,
        }),
      });
    }, []);
  }

  private createButton(props: Record<string, any>) {
    this.button = new Button({
      name: props.name,
    });
  }
}

export default PopupController;
