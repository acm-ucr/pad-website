const NationalBenefits = () => {
  return (
    <div className="flex flex-col">
      <div className="text-pad-purple font-bold font-playfair text-2xl border-b-4 border-pad-lightpurple w-fit">
        NATIONALS
      </div>
      <ul className="mt-3">
        <li className="indent-0 text-black font-playfair text-sm md:text-lg list-disc">
          National Directory
          <ol>
            <li className="list-disc text-black font-playfair text-sm md:text-lg ">
              List of every Phi Alpha Delta
              <p>member</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="-mt-4">
        <li className="text-black font-playfair text-sm md:text-lg list-disc">
          Exclusive discounts through
          <div>partners</div>
          <ol>
            <li className=" list-disc text-black font-playfair text-sm md:text-lg">
              Office Depot, Test Prep
              <p>Courses, etc.</p>
            </li>
          </ol>
        </li>
      </ul>
      <ul className="-mt-4 list-disc">
        <li className="text-black font-playfair text-sm md:text-lg">
          Scholarships
        </li>
        <li className="text-black font-playfair text-sm md:text-lg">
          Internships
        </li>
        <li className="text-black font-playfair text-sm md:text-lg">
          Law School Transition
          <p>Resources</p>
        </li>
      </ul>
    </div>
  );
};

export default NationalBenefits;
