import { DiscountCalculator } from "../src";
import { UserMother } from "./user-mother";

describe("DiscountCalculator", () => {
  let discountCalculator: DiscountCalculator;

  beforeEach(() => {
    discountCalculator = new DiscountCalculator();
  });

  it("when the user is gold level should return 10", () => {
    const user = UserMother.create({ totalItemsPurchased: 100 });
    expect(discountCalculator.getDiscount(user)).toBe(10);
  });

  it("when the user is silver level should return 5", () => {
    const user = UserMother.create({ totalItemsPurchased: 85 });
    expect(discountCalculator.getDiscount(user)).toBe(5);
  });

  it("when the user is not silver or gold should return 0", () => {
    const user = UserMother.create({ totalItemsPurchased: 0 });
    expect(discountCalculator.getDiscount(user)).toBe(0);
  });
});
