import React from "react";

import TitleSections from "../components/TitleSections";
import InfoContact from "../components/ContactInfo";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Footer } from "flowbite-react";
const Contact = (props) => {
  return (
    <div
      className="wrapperContact w-screen h-screen-auto  bg-neutral-800 flex flex-col items-center  pt-40 "
      id="contact"
    >
      <TitleSections titleS="Contact" />

      <div className="">
        <InfoContact icon={<RoomIcon />} title="Location: Romania" />
        <InfoContact
          icon={<EmailIcon />}
          title="Email: robert24stefan99@gmail.com "
        />
        <InfoContact
          icon={<PhoneIcon className="text-white" />}
          title="Phone:+40725450140 "
        />
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
