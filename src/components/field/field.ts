import template from "./template";
import Block from "../../utils/Block";
import "./_field.scss";

class Field extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Field;
