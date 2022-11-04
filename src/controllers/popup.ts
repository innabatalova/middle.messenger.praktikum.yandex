import Block from "@core/Block";

import Input from "@components/input/input";
import Button from "@components/button/button";
import Link from "@components/link/link";
import Popup from "@components/popup/popup";

class PopupController {
  private innerInputs: Record<string, any>[] = [];
  private button: Button;
  private link: Link;

  public createPopup(props: Record<string, any>): Block {
    this.createInputs(props.inputs);
    this.createButton(props.button);
    this.createLink(props.link);

    return new Popup({
      popupId: props.id,
      popupClass: props.class,
      popupTitle: props.title,
      popupInputs: this.innerInputs,
      popupButton: this.button,
      popupLink: this.link,
    });
  }

  private createInputs(inputs: Record<string, any>[]) {
    inputs.forEach((input) => {
      this.innerInputs.push({
        input: new Input({
          class: input.class,
          type: input.type,
          name: input.name,
          placeholder: input.placeholder,
          value: input.value,
        }),
      });
    }, []);
  }

  private createButton(props: Record<string, any>) {
    this.button = new Button({
      name: props.name,
      events: props.events,
    });
  }

  private createLink(props: Record<string, any>) {
    this.link = new Link({
      dataset: props.dataset,
      name: props.name,
      events: props.events,
    });
  }
}

export default PopupController;
