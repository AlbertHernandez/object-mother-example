import { User } from "./user";

export class DiscountCalculator {
  private DISCOUNT_FOR_USER_LEVELS = {
    GOLD: 10,
    SILVER: 5,
  };

  getDiscount(user: User): number {
    if (user.isGoldLevel()) {
      return this.DISCOUNT_FOR_USER_LEVELS.GOLD;
    }
    if (user.isSilverLevel()) {
      return this.DISCOUNT_FOR_USER_LEVELS.SILVER;
    }
    return 0;
  }
}
