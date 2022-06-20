import template from "./template";
import Block from "../../utils/Block";
import "./_link.scss";

class Link extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Link;