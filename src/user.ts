export class User {
  private MIN_ITEMS_PURCHASED_BY_LEVEL = {
    GOLD: 100,
    SILVER: 50,
  };

  constructor(
    readonly id: string,
    readonly name: string,
    readonly totalItemsPurchased: number
  ) {}

  isGoldLevel() {
    return this.totalItemsPurchased >= this.MIN_ITEMS_PURCHASED_BY_LEVEL.GOLD;
  }

  isSilverLevel() {
    return (
      this.totalItemsPurchased >= this.MIN_ITEMS_PURCHASED_BY_LEVEL.SILVER &&
      !this.isGoldLevel()
    );
  }
}
