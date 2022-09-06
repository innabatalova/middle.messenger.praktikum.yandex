import Block from "../../core/Block";

import Link from "../../components/link/link";

import "../../sass/style.scss";
import template from "./template";

class Error404 extends Block {
  constructor(props: Record<string, any> = {}) {
    const number = "404";
    const info = "Не туда попали";
    const linkError = new Link({
      href: "/chat",
      name: "Назад к чатам",
    });

    super("div", {
      linkError,
      number,
      info,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Error404;
