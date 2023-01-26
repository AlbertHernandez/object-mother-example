import { faker } from "@faker-js/faker";

import { User } from "../src/user";

export class UserMother {
  static create({
    id = faker.datatype.uuid(),
    name = faker.name.fullName(),
    totalItemsPurchased = faker.datatype.number(),
  }): User {
    return new User(id, name, totalItemsPurchased);
  }

  static withGoldLevel() {
    return this.create({
      totalItemsPurchased: faker.datatype.number({ min: 100 }),
    });
  }

  static withSilverLevel() {
    return this.create({
      totalItemsPurchased: faker.datatype.number({ min: 50, max: 99 }),
    });
  }

  static withBasicLevel() {
    return this.create({
      totalItemsPurchased: faker.datatype.number({ max: 49 }),
    });
  }
}
