import { assert } from "chai";
import template from "./template";

describe("Testing tempalate", () => {

  it("should return result  ", () => {
    const name = {
        name: "Авторизоваться"
      };

    let result = 
    `<button type="submit" class="main-btn main-btn_auth ">
  Авторизоваться
   </button>`;

    assert.equal(template(name), result);

  });
}); 