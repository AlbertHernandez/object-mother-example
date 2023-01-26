import { User } from "../src/user";

describe("User", () => {
  it("when the user has purchased at least 100 items is gold level", () => {
    const user = new User("1", "albert", 100);
    expect(user.isGoldLevel()).toBeTruthy();
  });

  it("when the user has purchased between 50 and 99 items is silver level", () => {
    const user = new User("1", "albert", 55);
    expect(user.isSilverLevel()).toBeTruthy();
  });

  it("gold users should not be silver users", () => {
    const user = new User("1", "albert", 100);
    expect(user.isGoldLevel()).toBeTruthy();
    expect(user.isSilverLevel()).toBeFalsy();
  });
});
