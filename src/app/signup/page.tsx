// import React, { useState } from "react";

const Page: React.FC = () => {
    //   const [phoneNumber, setPhoneNumber] = useState("");
  
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    };
  
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Call API or perform necessary action with phone number
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-white">
        <div className="text-center max-w-screen-xl">
          <h1 className="text-3xl mb-4 text-gray-700">
            Get Delivery Status Updates
          </h1>
  
          <form className="mb-8 flex  justify-center ">
            <input
              type="text"
              id="phoneNumber"
              className="w-64 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              //   value={phoneNumber}
              //   onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              required
            />
            <button
              type="submit"
              className="ml-4 py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            >
              Subscribe
            </button>
          </form>
  
          <p className="text-base text-gray-600 mb-4">
            Discover what's happening with your shipment in real time. Type in
            your phone number to receive instantaneous updates directly to your
            device. Stay in the loop and never miss a crucial update regarding
            your delivery.
          </p>
  
          <p className="text-base text-gray-600 mb-4">
            From the moment your order is placed, we're committed to ensuring a
            smooth delivery process. Our state-of-the-art tracking system allows
            you to monitor your package's journey right from the comfort of your
            home.
          </p>
  
          <p className="text-base text-gray-600 mb-4">
            Expect a seamless tracking experience, as our reliable delivery system
            works tirelessly to get your order to your doorstep. We believe in
            transparency, which is why we aim to give you every detail about your
            delivery's progress. Don't miss a single update. Promptness and
            accuracy are crucial to us, as they are to you. Rest easy knowing
            we're on top of it, every step of the way.
          </p>
  
          <div className="flex justify-between">
            <div className="w-1/3 text-left mb-4 p-8 rounded-lg">
              <img
                src="./icon-fast-delivery.svg"
                alt="Fast delivery"
                className="p-4"
              />
              <h2 className="text-xl font-medium mb-1 text-gray-700">
                {" "}
                Fast Delivery
              </h2>
              <p className="text-base text-gray-500">
                Get real-time updates on the status of your package. Know exactly
                when it will arrive at your doorstep.
              </p>
            </div>
            <div className="w-1/3 text-left mb-4 p-8 rounded-lg">
              <img
                src="./icon-tracking.svg"
                alt="Order tracking"
                className="p-4"
              />
              <h2 className="text-xl font-medium mb-1 text-gray-700">
                Order Tracking
              </h2>
              <p className="text-base text-gray-500">
                Easily track your order from the moment it is shipped until it
                reaches your hands. Stay updated with the latest information on
                its location and estimated delivery time.
              </p>
            </div>
            <div className="w-1/3 text-left mb-4 p-8 rounded-lg">
              <img
                src="./icon-support.svg"
                alt="Customer support"
                className="p-4"
              />
              <h2 className="text-xl font-medium mb-1 text-gray-700">
                24/7 Customer Support
              </h2>
              <p className="text-base text-gray-500">
                Our dedicated customer support team is available around the clock
                to assist you with any questions or concerns. We are here to
                provide you with prompt and reliable support, ensuring your
                satisfaction every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Page;
  