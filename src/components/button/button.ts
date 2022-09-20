import Block from "../../core/Block";

//import "./_button.scss";
import template from "./template";

class Button extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Button;
