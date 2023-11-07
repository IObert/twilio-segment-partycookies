"use server";
import { Analytics } from "@segment/analytics-node";
import { cookies } from "next/headers";
import { faker } from "@faker-js/faker";
import { redirect } from "next/navigation";
import { lookupSmsPumpingRisk, sendMessage } from "@/utils/twilio";

const analytics = new Analytics({
  writeKey: process.env.SEGMENT_SERVER_WRITE_KEY || "",
});

export async function signupAction(formData: FormData) {
  const cookieStore = cookies();

  const phone =
      formData.get("sms-button") === ""
        ? `${formData.get("phone")}`
        : `whatsapp:${formData.get("phone")}`,
    email = `${formData.get("email")}`,
    name = {
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
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    randomFlavor: flavors[Math.floor(Math.random() * flavors.length)],
    email,
    phone,
    smsPumpingRisk: await lookupSmsPumpingRisk(phone),
  };

  analytics.identify({
    userId: email,
    anonymousId: cookieStore.get("ajs_anonymous_id")?.value,
    // @ts-ignore
    traits,
  });
  await analytics.closeAndFlush(); // flush because it'll run serverless when deployed

  await sendMessage({
    to: phone,
    shortenUrls: true,
    from: process.env.TWILIO_SENDER || "",
    body: `Thanks for signing up for our dough-lightful news. For the sake of this demo, we assigned you a random name (${name.firstName}). 
Don't forget to use these promo codes ${process.env.PROMO} when you create a new account ${process.env.UTM_LINK}`,
  });

  redirect(`.`); // Navigate to home page
}
