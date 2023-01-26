import { User } from "../src/user";

export class UserMother {
  static create({ id = "1", name = "juan", totalItemsPurchased = 5 }): User {
    return new User(id, name, totalItemsPurchased);
  }

  static withGoldLevel() {
    return this.create({ totalItemsPurchased: 100 });
  }

  static withSilverLevel() {
    return this.create({ totalItemsPurchased: 55 });
  }

  static withBasicLevel() {
    return this.create({ totalItemsPurchased: 3 });
  }
}
