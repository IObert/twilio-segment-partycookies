import { signupAction } from "./signupAction";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col text-center max-w-screen-xl h-screen">
      <h1 className="text-3xl mb-4 mx-2 mt-10 text-gray-700">
        Dough-lightful news awaits!
      </h1>
      <h2 className="text-xl mb-4 mx-2 text-gray-700">
        Don&#39;t miss a crumb-worthy update, join our cookie newsletter today!
      </h2>

      <form
        className="mb-10 flex flex-col justify-center max-w-lg mx-auto px-4"
        action={signupAction}
      >
        <label
          htmlFor="email"
          className="text-l text-gray-700  border-gray-900 mt-2"
        >
          Email
        </label>
        <input
          type="tel"
          id="email"
          name="email"
          className="w-full py-2 px-4 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
          placeholder="user@example.com"
          pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
          required
        ></input>
        <label htmlFor="phone" className="text-l text-gray-700 mt-2">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full py-2 px-4 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
          placeholder="+49 151 12341234"
          pattern="^(\+\d{1,3}\s?)?(\()?\d{1,4}(\))?\s?(-|\s)?\d{1,4}\s?(-|\s)?\d{1,9}$"
          required
        ></input>
        <div className="inline-flex mt-4 " role="group">
          <button
            type="submit"
            name="sms-button"
            className="w-1/2 py-2 px-4 bg-violet-700 border border-gray-900  text-white rounded-l-lg  hover:bg-violet-900"
          >
            Subscribe
          </button>{" "}
          <button
            type="submit"
            name="whatsapp-button"
            className="w-1/2 py-2 px-4 bg-violet-700  border border-gray-900  text-white rounded-r-lg hover:bg-violet-900"
          >
            via WhatsApp
          </button>
        </div>
      </form>
      <div className="flex-1 flex flex-wrap justify-between">
        <div className="flex-1 text-left my-auto p-8 ">
          <Image
            src="./icon-taste.svg"
            alt="Fast delivery"
            width={400}
            height={400}
            className="p-4 max-w-[200px] mx-auto"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700 text-center">
            Taste the Buzz
          </h2>
          <p className="text-base text-gray-500 text-center">
            Discover the sensational, new cookie flavors and stay up-to-date on
            the latest. Enter your number for instant updates on your device. Be
            in the loop, never miss a crucial flavor update.
          </p>
        </div>
        <div className="flex-1 text-left my-auto p-8 ">
          <Image
            src="./icon-insider.svg"
            alt="Order tracking"
            width={400}
            height={400}
            className="p-4 max-w-[200px] mx-auto"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700 text-center">
            Sweet Insider
          </h2>
          <p className="text-base text-gray-500 text-center">
            Stay connected with our cookie newsletter and be the first to know
            about limited edition releases and exclusive discounts. Join our
            community of cookie enthusiasts and indulge your taste buds with
            unique flavor combinations that will delight your senses.
          </p>
        </div>
        <div className="flex-1 text-left my-auto p-8 ">
          <Image
            src="./icon-unleashed.svg"
            alt="Customer support"
            width={400}
            height={400}
            className="p-4 max-w-[200px] mx-auto"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700 text-center">
            Cookies Unleashed
          </h2>
          <p className="text-base text-gray-500 text-center">
            Don&#39;t miss out on the opportunity to be a part of the cookie
            revolution - sign up now and elevate your cookie experience to a
            whole new level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
