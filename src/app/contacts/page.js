import contacts from "../../../public/headers/contacts.png";
import Header from "@/components/Header";
import ContactLinkTree from "@/components/contact/ContactLinkTree";
import ContactSendEmail from "@/components/contact/ContactSendEmail";

const ContactsPage = () => {
  return (
    <>
      <Header title="Contacts" src={contacts} />
      <div className="flex flex-col md:flex-row -translate-y-32 h-[70vh] w-11/12 md:w-2/3 items-center justify-center z-10">
        <ContactLinkTree />
        <ContactSendEmail />
      </div>
    </>
  );
};

export default ContactsPage;
