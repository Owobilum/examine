import Image from "next/image";

const Header: React.FC = () => {
  return (
    <nav className="bg-primary  h-14 w-full px-2 md:px-8 flex justify-between items-center md:bg-white md:h-24 md:shadow">
      <div className="flex gap-1 md:hidden">
        <Image
          src="/icons/hamburger.svg"
          height="30px"
          width="33px"
          alt="menu"
          className="hidden"
        />
        <Image src="/icons/logo.svg" height="16px" width="72px" alt="logo" />
      </div>
      <div className="md:hidden">
        <Image src="/icons/search.svg" height="30px" width="30px" alt="logo" />
      </div>
      {/* Desktop */}
      <div className="hidden md:block w-1/4 h-8">
        <Image
          src="/icons/logo_lg.svg"
          width="140px"
          height="32px"
          alt="logo"
        />
      </div>
      <div className="hidden md:flex items-center px-8 gap-2 h-full w-full md:flex-3 bg-my_grey">
        <Image
          src="/icons/search_lg.svg"
          height="20px"
          width="20px"
          alt="logo"
        />
        <input
          type="text"
          className="w-1/2  border-b-2 border-gray-300  outline-none bg-my_grey"
          placeholder="What do you want to learn about?"
        />
      </div>
      <div className="hidden md:flex w-1/2 justify-end">
        <div className="flex justify-evenly gap-4">
          <button className="w-10">Login</button>
          <button className="bg-my_yellow px-2 w-24 h-11 rounded-full">
            Sign up
          </button>
          <Image
            src="/icons/hamburger_lg.svg"
            height="18px"
            width="12px"
            alt="menu"
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
