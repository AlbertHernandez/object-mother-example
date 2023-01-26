import { PersonalShopperAssigner } from "../src";
import { User } from "../src/user";

describe("PersonalShopperAssigner", () => {
  let personalShopperAssigner: PersonalShopperAssigner;

  beforeEach(() => {
    personalShopperAssigner = new PersonalShopperAssigner();
  });

  it("when the user is gold level should assign a personal shopper", () => {
    const user = new User("1", "albert", 100);
    expect(personalShopperAssigner.assign(user)).toBeDefined();
  });

  it("when the user is not gold should throw an error", () => {
    const user = new User("1", "albert", 5);
    expect(() => personalShopperAssigner.assign(user)).toThrowError();
  });
});
