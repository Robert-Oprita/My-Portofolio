import TitleSections from '../components/TitleSections';
import InfoContact from '../components/ContactInfo';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Footer } from 'flowbite-react';

const Contact = () => {
  return (
    <div
      className="wrapperContact bg-neutral-800 h-screen-auto flex flex-col items-center pt-36"
      id="contact"
    >
      <TitleSections titleS="Contact" />

      <div className="mt-8 mb-14">
        <InfoContact icon={<RoomIcon />} title="Location: Romania" />
        <InfoContact
          icon={<EmailIcon />}
          title="Email: robert24stefan99@gmail.com "
        />
        <InfoContact
          icon={<PhoneIcon className="text-white" />}
          title="Phone:+40725450140"
        />
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
