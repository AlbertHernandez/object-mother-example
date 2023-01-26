import { User } from "./user";

export class PersonalShopperAssigner {
  assign(user: User) {
    if (!user.isGoldLevel()) {
      throw new Error(`User must be a gold level to have a personal shopper`);
    }

    return {
      name: "Pepe",
    };
  }
}
