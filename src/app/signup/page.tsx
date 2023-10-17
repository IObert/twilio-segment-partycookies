import { signupAction } from "./signupAction";

const Page: React.FC = () => {
  return (
    <div className="text-center max-w-screen-xl h-screen">
      <h1 className="text-3xl mb-4 mt-10 text-gray-700">
        Dough-lightful news awaits!
      </h1>
      <h2 className="text-xl mb-4 text-gray-700">
        Don't miss a crumb-worthy update, join our cookie newsletter today!
      </h2>

      <form className="mb-10 flex justify-center" action={signupAction}>
        <label htmlFor="phone" className="hidden">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-64 py-2 px-4 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="+49 151 12341234"
          // pattern="^(\+49|0)(1\d{2}|(15|16|17|18|19)\d)(\s?\d{3,4}){2}$"
          required
        ></input>
        <div className="inline-flex ml-4  shadow-sm" role="group">
          <button
            type="submit"
            name="sms-button"
            className="py-2 px-4 bg-indigo-500 border border-gray-600  text-white rounded-l-lg  hover:bg-indigo-600"
          >
            Subscribe
          </button>{" "}
          <button
            type="submit"
            name="whatsapp-button"
            className="py-2 px-4 bg-indigo-500  border border-gray-600  text-white rounded-r-lg hover:bg-indigo-600"
          >
            via WhatsApp
          </button>
        </div>
      </form>
      <div className="flex justify-between">
        <div className="w-1/3 min-w text-left mb-4 p-8 rounded-lg">
          <img
            src="./icon-taste.svg"
            alt="Fast delivery"
            className="p-4 max-w-[200px]"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700">
            Taste the Buzz
          </h2>
          <p className="text-base text-gray-500">
            Discover the sensational, new cookie flavors and stay up-to-date on
            the latest. Enter your number for instant updates on your device. Be
            in the loop, never miss a crucial flavor update.
          </p>
        </div>
        <div className="w-1/3 text-left mb-4 p-8 rounded-lg">
          <img
            src="./icon-insider.svg"
            alt="Order tracking"
            className="p-4 max-w-[200px]"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700">
            Sweet Insider
          </h2>
          <p className="text-base text-gray-500">
            Stay connected with our cookie newsletter and be the first to know
            about limited edition releases and exclusive discounts. Join our
            community of cookie enthusiasts and indulge your taste buds with
            unique flavor combinations that will delight your senses.
          </p>
        </div>
        <div className="w-1/3 text-left mb-4 p-8 rounded-lg">
          <img
            src="./icon-unleashed.svg"
            alt="Customer support"
            className="p-4 max-w-[200px]"
          />
          <h2 className="text-xl font-medium mb-1 text-gray-700">
            Cookies Unleashed
          </h2>
          <p className="text-base text-gray-500">
            Don't miss out on the opportunity to be a part of the cookie
            revolution - sign up now and elevate your cookie experience to a
            whole new level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
