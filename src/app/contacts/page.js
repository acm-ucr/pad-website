import React from "react";
import contacts from "../../../public/contacts.png";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Header title="Contacts" src={contacts} />
      contacts
    </div>
  );
};

export default page;
