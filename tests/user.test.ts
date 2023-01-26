import { faker } from "@faker-js/faker";

import { UserMother } from "./user-mother";

describe("User", () => {
  it("when the user has purchased at least 100 items is gold level", () => {
    const user = UserMother.create({
      totalItemsPurchased: faker.datatype.number({ min: 100 }),
    });
    expect(user.isGoldLevel()).toBeTruthy();
  });

  it("when the user has purchased between 50 and 99 items is silver level", () => {
    const user = UserMother.create({
      totalItemsPurchased: faker.datatype.number({ min: 50, max: 99 }),
    });
    expect(user.isSilverLevel()).toBeTruthy();
  });

  it("gold users should not be silver users", () => {
    const user = UserMother.create({
      totalItemsPurchased: faker.datatype.number({ min: 100 }),
    });
    expect(user.isGoldLevel()).toBeTruthy();
    expect(user.isSilverLevel()).toBeFalsy();
  });
});
