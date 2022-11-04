import template from "./template";
import Block from "@core/Block";
import "./_input.scss";

class Input extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Input;
