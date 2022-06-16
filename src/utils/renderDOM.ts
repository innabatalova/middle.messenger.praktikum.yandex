import Block from './Block'

export function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;
  root.appendChild(block.getContent());

    block.dispatchComponentDidMount();
} 


export default renderDOM;