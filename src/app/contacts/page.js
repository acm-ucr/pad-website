import React from "react";
import contacts from "../../../public/contacts.png";
import Header from "@/components/Header";
import ContactLinkTree from "@/components/ContactLinkTree";

const page = () => {
  return (
    <div>
      <Header title="Contacts" src={contacts} />
      <ContactLinkTree />
    </div>
  );
};

export default page;
