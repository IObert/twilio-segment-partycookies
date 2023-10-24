"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SignUpButtons() {
  const { pending } = useFormStatus();

  return (
    <div className="inline-flex mt-4 " role="group">
      {pending ? (
        <button
          type="submit"
          aria-disabled={pending}
          name="sms-button"
          className="w-full h-16 py-2 px-4 bg-violet-500 border border-gray-900  text-white rounded-lg  hover:bg-violet-900"
        >
            <svg
              className="animate-spin  m-1 h-6 w-6 text-violet-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.8242.127 8l2-2.829zm4-1.419V20h4a8 8 0 01-7.858-5.291L10 15.872z"
              ></path>
            </svg>
        </button>
      ) : (
        <>
          <button
            type="submit"
            aria-disabled={pending}
            name="sms-button"
            className="w-1/2 py-2 px-4 bg-violet-700 border border-gray-900  text-white rounded-l-lg  hover:bg-violet-900"
          >
            Subscribe
          </button>
          <button
            type="submit"
            aria-disabled={pending}
            name="whatsapp-button"
            className="w-1/2 py-2 px-4 bg-violet-700  border border-gray-900  text-white rounded-r-lg hover:bg-violet-900"
          >
            via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
