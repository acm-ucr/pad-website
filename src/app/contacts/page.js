import contacts from "../../../public/headers/contacts.webp";
import Header from "@/components/Header";
import ContactLinkTree from "@/components/contact/ContactLinkTree";

const ContactsPage = () => {
  return (
    <>
      <Header title="Contacts" src={contacts} />
      <div className="flex flex-col md:flex-row -translate-y-32 h-screen md:h-[70vh] w-11/12 md:w-2/3 items-center justify-center z-10">
        <ContactLinkTree />
      </div>
    </>
  );
};

export default ContactsPage;
