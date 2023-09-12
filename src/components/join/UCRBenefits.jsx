const UCRBenefits = () => {
  return (
    <div className="flex flex-col">
      <div className="text-pad-purple font-bold font-playfair text-2xl border-b-4 border-pad-lightpurple w-fit">
        UCR CHAPTER
      </div>
      <ul className="mt-3">
        <li className="indent-0 text-black font-playfair text-sm md:text-lg list-disc">
          PartnerShips
          <ol>
            <li className="list-disc text-black font-playfair text-sm md:text-lg whitespace-pre-line">
              ScoreitUp. Mark Sacks, Apollo
            </li>
          </ol>
        </li>
      </ul>
      <ul className="-mt-4">
        <li className="text-black font-playfair text-sm md:text-lg list-disc">
          Workshops
          <ol>
            <li className=" list-disc text-black font-playfair text-sm md:text-lg">
              How to get into Law School
            </li>
            <li className=" list-disc text-black font-playfair text-sm md:text-lg">
              Personal Statments
            </li>
            <li className=" list-disc text-black font-playfair text-sm md:text-lg">
              Resume Building
            </li>
            <li className="list-disc text-black font-playfair text-sm md:text-lg">
              Access to helpful Alumni
            </li>
          </ol>
        </li>
      </ul>
      <ul className="-mt-4 list-disc">
        <li className="text-black font-playfair text-sm md:text-lg">
          LSAT Study Groups
        </li>
        <li className="text-black font-playfair text-sm md:text-lg">
          Mentor/Mentee Program
        </li>
        <li className="text-black font-playfair text-sm md:text-lg">
          Lawyer Banquet
        </li>
      </ul>
    </div>
  );
};

export default UCRBenefits;
