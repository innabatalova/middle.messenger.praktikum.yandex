import Block from "../Block";

function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;
  root.appendChild(block.getElement());

  block.dispatchMountComponent();
}

export default renderDOM;
