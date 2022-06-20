import Block from "../../utils/Block";

import Link from "../../components/link/link";

import "../../sass/style.scss";
import template from "./template";

class Error500 extends Block {
  constructor(props: Record<string, any> = {}) {
    const number = "500";
    const info = "Уже фиксим";
    const linkError = new Link({
      href: "/chat",
      name: "Назад к чатам",
    });

    super("div", {
      linkError,
      number,
      info,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Error500;
