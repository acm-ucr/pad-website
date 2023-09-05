const UCRBenefits = () => {
  return (
    <div className="flex justify-end">
      <div className="">
        <div className="text-pad-purple font-bold font-playfair text-2xl">
          <span className="bg-gradient-to-r from-pad-lightpurple to-pad-lightpurple bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">
            UCR CHAPTER
          </span>
        </div>

        <div className="flex justify-center items-center left-4 bottom-[3.5px] relative ">
          <div className="w-3 h-3 bg-pad-lightpurple transform rotate-45"></div>
        </div>

        <ul className="mt-0">
          <li className="indent-0 text-black font-playfair text-xl list-disc">
            PartnerShips
            <ol>
              <li className="list-disc text-black font-playfair text-xl whitespace-pre-line">
                ScoreitUp. Mark Sacks,
                <p>Apollo</p>
              </li>
            </ol>
          </li>
        </ul>
        <ul className="-mt-4">
          <li className="text-black font-playfair text-xl list-disc">
            Workshops
            <ol>
              <li className=" list-disc text-black font-playfair text-xl">
                How to get into Law School
              </li>
              <li className=" list-disc text-black font-playfair text-xl">
                Personal Statments
              </li>
              <li className=" list-disc text-black font-playfair text-xl">
                Resume Building
              </li>
              <li className="list-disc text-black font-playfair text-xl">
                Access to helpful Alumni
              </li>
            </ol>
          </li>
        </ul>
        <ul className="-mt-4 list-disc">
          <li className="text-black font-playfair text-xl">
            LSAT Study Groups
          </li>
          <li className="text-black font-playfair text-xl">
            Mentor/Mentee Program
          </li>
          <li className="text-black font-playfair text-xl">Lawyer Banquet</li>
        </ul>
      </div>
    </div>
  );
};

export default UCRBenefits;
