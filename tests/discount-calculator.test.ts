import { DiscountCalculator } from "../src";
import { User } from "../src/user";

describe("DiscountCalculator", () => {
  let discountCalculator: DiscountCalculator;

  beforeEach(() => {
    discountCalculator = new DiscountCalculator();
  });

  it("when the user is gold level should return 10", () => {
    const user = new User("1", "albert", 100);
    expect(discountCalculator.getDiscount(user)).toBe(10);
  });

  it("when the user is silver level should return 5", () => {
    const user = new User("1", "albert", 85);
    expect(discountCalculator.getDiscount(user)).toBe(5);
  });

  it("when the user is not silver or gold should return 0", () => {
    const user = new User("1", "albert", 2);
    expect(discountCalculator.getDiscount(user)).toBe(0);
  });
});
