import { PersonalShopperAssigner } from "../src";
import { UserMother } from "./user-mother";

describe("PersonalShopperAssigner", () => {
  let personalShopperAssigner: PersonalShopperAssigner;

  beforeEach(() => {
    personalShopperAssigner = new PersonalShopperAssigner();
  });

  it("when the user is gold level should assign a personal shopper", () => {
    const user = UserMother.create({ totalItemsPurchased: 100 });
    expect(personalShopperAssigner.assign(user)).toBeDefined();
  });

  it("when the user is not gold should throw an error", () => {
    const user = UserMother.create({ totalItemsPurchased: 5 });
    expect(() => personalShopperAssigner.assign(user)).toThrowError();
  });
});
