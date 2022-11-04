import Handlebars from "handlebars";
import { expect } from "chai";
import {JSDOM} from "jsdom";
import Block from "./Block";

const template = Handlebars.compile(
  `<div>
    <div>{{content}}</div>
   </div>`
);

class TestComponent extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

beforeEach(() => {
  const dom = new JSDOM(
    '<!DOCTYPE html><body><div id="root"></div></body>',
    { url: 'http://localhost:3000' }
  );

  (global as any).window = {
    ...dom.window,
    ...global.window,
  };
  (global as any).document = dom.window.document;
})

describe("Testing component", () => {

  it("Creation of the component in a boolean context", () => {

    const exComponent = new TestComponent({
      content: "test content",
      events: {
        click: console.log("test")
        ,
      }
    });
    
    expect(!!exComponent).to.be.true;  

  });

  it('Render props', () => {

    const exComponent = new TestComponent({
      content: 'testing block',
    });

    const content = exComponent.getElement();
    const child = content.querySelector('div');

    expect(child?.textContent).to.equal('testing block');
  });

}); 