import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-gray-700 text-6xl text-center drop-shadow-md mb-6">Ahoy!</h1>
      <h1 className="text-gray-700 text-5xl text-center drop-shadow-lg mb-6">Welcome to Signal London</h1>
      <Link className="text-blue-600 dark:text-blue-500 text-center  hover:underline text-xl drop-shadow-lg" href="https://github.com/nokenwa/twilio-signal-london-23-build-projects/tree/main/messaging">Check out the source code</Link>
    </>
  );
}
