import Boxessvg from "../svg/Boxessvg";

const ContactSendEmail = () => {
  return (
    <div className="bg-pad-purple h-full w-1/2 flex flex-col p-3 justify-between">
      <Boxessvg color="#C3ACD0" className="w-1/4 self-end" />
      <p className="font-playfair font-bold text-pad-lightpurple text-3xl">
        Anonymous Forum
      </p>
      <textarea className="w-full h-full p-3 outline-none ring-0 resize-none" />
      <button className="px-4 py-1 border-2 border-pad-lightpurple text-pad-lightpurple font-playfair text-2xl self-end mt-3 bg-transparent hover:!bg-pad-lightpurple hover:text-pad-purple duration-300">
        Submit
      </button>
    </div>
  );
};

export default ContactSendEmail;
