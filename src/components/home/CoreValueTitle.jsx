const CoreValueTitle = ({ className, inView }) => {
  return (
    <div className="w-3/4 flex flex-col md:w-1/2 z-50 absolute -top-32 left-6 md:left-16 ">
      <div className="w-full relative">
        <div className="h-full w-full border-4 border-pad-lightpurple absolute -left-5 -top-5 z-0" />
        <div className="flex flex-col h-full justify-between bg-pad-darkpurple w-full items-start relative z-10">
          <div className="flex h-14 md:h-32 w-full justify-end relative">
            <div className="h-6 w-1.5 mr-1.5 bg-pad-lightpurple" />
            <div className="h-10 w-1.5 mr-1.5 bg-pad-lightpurple" />
            <div className="h-full md:h-20 w-1.5 mr-1.5 bg-pad-lightpurple" />
            <div className="h-8 w-1.5 mr-1.5 bg-pad-lightpurple" />
          </div>
          <div
            className={`${
              inView && "animate-fade-up animate-once"
            } my-1 md:my-4 mx-4 relative`}
          >
            <p className="animate-fade-left animate-once text-xl md:text-3xl text-pad-beige font-playfair font-bold pr-2">
              Core Values
            </p>
            <p className="animate-fade-left animate-once animate-delay-[200ms] whitespace-normal text-xs md:text-xl text-pad-beige font-playfair w-full md:w-10/12">
              Bound together by tradition and our common interest in the law, we
              share these core values
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValueTitle;
