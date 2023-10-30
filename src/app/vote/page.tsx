import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col text-center max-w-screen-xl h-screen">
      <h1 className="text-3xl mb-4 mx-2 mt-10 text-gray-700">Tea vs Coffee</h1>
      <h2 className="text-xl mb-4 mx-2 text-gray-700">
        Please message TEA or COFFEE to the following number
      </h2>
      <h1 className="text-3xl mx-2 mb-10 text-gray-700">+447361591811</h1>

      <div className="mb-10 flex flex-wrap justify-center px-4">
        <div className="m-4 " role="group">
          <Link
            href="sms:+447361591811?&body=TEA"
            className="p-2 mb-4 flex items-center w-60 text-center mx-auto bg-violet-700  border border-gray-900  text-white rounded-lg hover:bg-violet-900"
          >
            <p className="text-center w-full">Send SMS vote for Tea</p>
          </Link>

          <Link
            href="https://wa.me/+447361591811?text=TEA"
            className="p-2 flex items-center w-60 text-center mx-auto pl-4 bg-green-700  border border-gray-900  text-white rounded-lg hover:bg-green-900"
          >
            <p className="text-center w-full">Send Whatsapp vote for Tea</p>
          </Link>
        </div>
        <div className="m-4" role="group">
          <Link
            href="sms:+447361591811?&body=COFFEE"
            className="p-2 mb-4 flex items-center w-60 text-center mx-auto pl-4 bg-violet-700  border border-gray-900  text-white rounded-lg hover:bg-violet-900"
          >
            <p className="text-center w-full">Send SMS vote for Coffee</p>
          </Link>

          <Link
            href="https://wa.me/+447361591811?text=COFFEE"
            className="p-2 flex items-center w-60 text-center mx-auto pl-4 bg-green-700  border border-gray-900  text-white rounded-lg hover:bg-green-900"
          >
            <p className="text-center w-full">Send Whatsapp vote for Coffee</p>
          </Link>
        </div>
      </div>
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
