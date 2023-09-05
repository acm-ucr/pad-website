const NationalBenefits = () => {
  return (
    <div className="flex justify-end">
      <div className="">
        <div className="text-pad-purple font-bold font-playfair text-2xl">
          <span className="bg-gradient-to-r from-pad-lightpurple to-pad-lightpurple bg-[length:100%_3px] bg-no-repeat bg-bottom pb-1">
            NATIONALS
          </span>
        </div>

        <div className="flex justify-center items-center right-4 bottom-[3.5px] relative ">
          <div className="w-3 h-3 bg-pad-lightpurple transform rotate-45"></div>
        </div>

        <ul className="mt-0">
          <li className="indent-0 text-black font-playfair text-xl list-disc">
            National Directory
            <ol>
              <li className="list-disc text-black font-playfair text-xl whitespace-pre-line">
                List of every Phi Alpha Delta
                <p>member</p>
              </li>
            </ol>
          </li>
        </ul>
        <ul className="-mt-4">
          <li className="text-black font-playfair text-xl list-disc">
            Exclusive discounts through
            <div>partners</div>
            <ol>
              <li className=" list-disc text-black font-playfair text-xl">
                Office Depot, Test Prep
                <p>Courses, etc.</p>
              </li>
            </ol>
          </li>
        </ul>
        <ul className="-mt-4 list-disc">
          <li className="text-black font-playfair text-xl">Scholarships</li>
          <li className="text-black font-playfair text-xl">Internships</li>
          <li className="text-black font-playfair text-xl">
            Law School Transition
            <p>Resources</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NationalBenefits;
