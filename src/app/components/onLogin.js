import { identify } from "./analytics";
import { faker } from "@faker-js/faker";
//Only runs on successful login

export default function onLogin({ email }) {
  const name = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };

  const traits = {
    username: faker.internet.userName(name),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    email,
    signedUpForRewards: true,
  };

  identify(email, traits);

  return;
}
