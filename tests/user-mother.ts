import { User } from "../src/user";

export class UserMother {
  static create({ id = "1", name = "juan", totalItemsPurchased = 5 }): User {
    return new User(id, name, totalItemsPurchased);
  }
}
