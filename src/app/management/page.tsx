import React from "react";
import { getProfiles } from "@/utils/segment";
import { getContentTemplates } from "@/utils/twilio";
import { sendAction } from "./sendAction";
import { maskPhone } from "maskdata";
import Image from "next/image";

// Define the table column types
type TableColumn = {
  id: string;
  label: string;
  field: string;
};

// Table component
const ProfileTable: React.FC<{ }> = async () => {
  const profiles = await getProfiles();

  const contentTemplates = await getContentTemplates();

  const columns: TableColumn[] = [
    { id: "avatar", label: "avatar", field: "avatar" },
    // { id: "username", label: "username", field: "username" },
    { id: "name", label: "name", field: "name" },
    // { id: "email", label: "email", field: "email" },
    { id: "phone", label: "phone number", field: "phone" },
    {
      id: "smsPumpingRisk",
      label: "sms pumping risk",
      field: "smsPumpingRisk",
    },

    { id: "clickedLink", label: "clicked link", field: "clickedLink" },
  ];

  return (
    <div className="h-screen w-10/12 mt-4">
      <h1 className="text-xl mb-4  text-gray-700">Message</h1>

      <form className="flex mb-4" action={sendAction}>
        <select
          id="contentSid"
          name="contentSid"
          className="flex-1 py-2 px-4 border-x  text-gray-700 border-gray-300 rounded-l-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500 "
        >
          {contentTemplates?.map((contentTemplate: any) => (
            <option key={contentTemplate.sid} value={contentTemplate.sid}>
              {contentTemplate.friendlyName}
            </option>
          ))}
        </select>

        <button
          type="submit"
          name="send-messages"
          className="flex-initial w-32  px-4 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600  hover:outline-none hover:ring-2 hover:ring-indigo-600 "
        >
          Send
        </button>
      </form>

      <h1 className="text-xl mb-4 mt-10 text-gray-700">Profiles</h1>
      <table className="divide-y divide-gray-300 ">
        <thead>
          <tr key="header" className="divide-x  divide-gray-300">
            {columns?.map((column) => (
              <th
                key={column.id}
                scope="col"
                className="px-6 py-3 text-left text-xs  font-medium text-gray-500 uppercase "
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profiles?.map((profile: any) => (
            <tr
              key={`${profile.username}`}
              className="text-gray-500 divide-x divide-gray-300"
            >
              {columns?.map((column) => (
                <td key={column.id} className="px-6 py-4 ">
                  {column.id === "avatar" ? (
                    <Image
                      src={profile[column.field]}
                      width={50}
                      height={50}
                      alt="Avatar of the user"
                    />
                  ) : column.id === "name" ? (
                    `${profile.firstName} ${profile.lastName}`
                  ) : column.id === "phone" ? (
                    maskPhone(profile[column.field])
                  ) : column.id === "clickedLink" ? (
                    profile[column.field] ? (
                      "Yes"
                    ) : (
                      "No"
                    )
                  ) : (
                    profile[column.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
