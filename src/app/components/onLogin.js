import { analytics } from "../../utils/analytics";
import { faker } from "@faker-js/faker";
//Only runs on successful login

export default function onLogin({ email, phone }) {

  const name = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };

  const traits = {
    email,
    phone,
    username: faker.internet.userName(name),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    email,
    phone,
    signedUpForRewards: true,
  };

  analytics.identify(email, traits);

  return;
}
