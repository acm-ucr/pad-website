import React from "react";
import contacts from "../../../public/contacts.png";
import Header from "@/components/Header";
import ContactLinkTree from "@/components/contact/ContactLinkTree";
import ContactSendEmail from "@/components/contact/ContactSendEmail";

const ContactsPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header title="Contacts" src={contacts} />
      <div className="flex flex-row -translate-y-32 h-[70vh] w-2/3 items-center justify-center">
        <ContactLinkTree />
        <ContactSendEmail />
      </div>
    </div>
  );
};

export default ContactsPage;
