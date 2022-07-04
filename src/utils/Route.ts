import Block from "./Block";
import renderDOM from "./renderDOM";

class Route {
  private pathname: string;
  private blockClass: any;
  private block: Block;
  private props: Record<string, any>;

  constructor(pathname: string, view: any, props: Record<string, any>) {
    this.pathname = pathname;
    this.blockClass = view;
    this.props = props;
  }

  public match(pathname: string): boolean {
    return pathname === this.pathname;
  }

  public leave(): void {
    if (this.block) {
      this.block.deleteElement();
    }
  }

  public render(): void {
    this.block = new this.blockClass(this.props);
    renderDOM("#root", this.block);
    return;
  }
}

export default Route;
