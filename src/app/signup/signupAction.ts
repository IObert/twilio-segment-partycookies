"use server";
import { Analytics } from "@segment/analytics-node";
import { cookies } from "next/headers";
import { faker } from "@faker-js/faker";
import { redirect } from 'next/navigation'

const analytics = new Analytics({
  writeKey: process.env.SEGMENT_SERVER_WRITE_KEY || "",
});

export async function signupAction(formData: FormData) {
  const cookieStore = cookies();

  const phone =
    formData.get("sms-button") === ""
      ? `${formData.get("phone")}`
      : `whatsapp:${formData.get("phone")}`;

  const name = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };

  const flavors = [
    "chocolate",
    "vanilla",
    "strawberry",
    "mint",
    "caramel",
    "coffee",
    "peanut butter",
  ];

  const traits = {
    ...name,
    username: faker.internet.userName(name),
    email: faker.internet.email(name),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    favoriteFlavor: flavors[Math.floor(Math.random() * flavors.length)],
    phone,
  };

  analytics.identify({
    userId: phone,
    anonymousId: cookieStore.get("ajs_anonymous_id")?.value,
    traits,
  });

  console.log(
    `Generated new user: ${JSON.stringify(traits)} \n\nWith cookie: ${
      cookieStore.get("ajs_anonymous_id")?.value
    }`
  );
  redirect(`.`) // Navigate to home page
}
