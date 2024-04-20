import ProfileCard from "../cards/ProfileCard";

const AboutMeBody = () => {
  return (
    <>
      <div className="relative lg:flex lg:justify-between max-lg:h-[1010px]">
        <div className="lg:w-2/5 h-72 lg:bg-amber-900 lg:bg-opacity-20 lg:h-screen"></div>
        <div className="lg:w-3/5 h-[720px] max-lg:bg-amber-900 max-lg:bg-opacity-20 lg:h-screen"></div>
        <div className="absolute max-lg:-top-2 h-full w-full grid justify-items-center flex items-center">
          <div className="w-full">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeBody;
