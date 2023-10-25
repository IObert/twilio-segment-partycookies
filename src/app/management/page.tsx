import React from "react";
import { getProfiles } from "@/utils/segment";
import { getContentTemplates } from "@/utils/twilio";
import { sendAction } from "./sendAction";
import { maskPhone } from "maskdata";
import { SubmitButton } from "./submit-button";

import Image from "next/image";

export const revalidate = 10;

// Define the table column types
type TableColumn = {
  id: string;
  label: string;
  field: string;
};

// Table component
const ProfileTable: React.FC<{}> = async () => {
  const profiles = await getProfiles();

  const contentTemplates = await getContentTemplates();

  return (
    <div className="flex flex-col h-screen w-10/12 mt-4">
      <h1 className="text-xl my-4 text-gray-700">Message</h1>

      <form className="flex mb-4" action={sendAction}>
        <select
          id="contentSid"
          name="contentSid"
          className="flex-1 py-2 px-4 border-x  text-gray-900 border-gray-300 rounded-l-lg  focus:outline-none focus:ring-2 focus:ring-violet-700"
        >
          {contentTemplates?.map((contentTemplate: any) => (
            <option key={contentTemplate.sid} value={contentTemplate.sid}>
              {contentTemplate.friendlyName}
            </option>
          ))}
        </select>
        <SubmitButton />
      </form>
      <h1 className="text-xl my-4 mt-10 text-gray-700">Contacts</h1>
      <table className="flex-1 table-auto divide-y divide-gray-300">
        <thead className="divide-x divide-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              avatar
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              flavor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              sms pumping risk
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              clicked links
            </th>
          </tr>
        </thead>
        <tbody>
          {profiles?.map((profile: any) => (
            <tr
              key={`${profile.username}`}
              className="text-gray-500 divide-x divide-gray-300"
            >
              <td>
                <Image
                  src={profile.avatar}
                  width={50}
                  height={50}
                  alt="Avatar of the user"
                />
              </td>
              <td className="">{`${profile.firstName} ${profile.lastName}`}</td>
              <td className="">{maskPhone(profile.phone)}</td>
              <td className="">{profile.randomFlavor}</td>
              <td className="text-center">{profile.smsPumpingRisk}</td>
              <td className="text-center">{profile.clicked_links}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
