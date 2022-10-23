import Handlebars from "handlebars";
import { expect } from "chai";
import Block from "./Block";

import { JSDOM } from 'jsdom'


const { window } = new JSDOM('<div id="app"></div>', { url: 'http://localhost' })
const { document } = window;
(global as any).window = window;
(global as any).document = document;



import router from "./Router";



const template = Handlebars.compile(
  `<div>
    <div>{{content}}</div>
   </div>`
);

class TestAuth extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

class TestError404 extends Block {
    constructor(props: Record<string, any> = {}) {
      super("div", props);
    }
  
    render() {
      return this.setTemplate(template, this.props);
    }
  }


  router
  .use('/', TestAuth)
  .use('/404', TestError404)

  .start();

describe('Check router', () => {
  it('Switch page', () => {
    router.go('/404');
    expect(router?.currentRoute?.pathname).to.equal('/404');
  });
});

