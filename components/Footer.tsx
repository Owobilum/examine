import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer
      className="hidden bg-primary px-4 py-6 text-white font-primary md:px-10 lg:px-24
    md:py-12 md:flex
   "
    >
      <div className="mb-4 md:mb-0 md:w-2/5 md:mr-2 lg:mr-12">
        <Image src="/icons/logo.svg" width="148px" height="33px" alt="logo" />
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-lg font-medium md:text-3xl font-secondary">
            Never miss an update!
          </div>
          <div>
            We are always updating our research and adding new stuff. Sign-up
            and always stay on top of our updates!
          </div>
          <div>
            {" "}
            <div className="relative h-8 md:h-16 rounded-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-primary w-full h-full  pl-2  rounded-full outline-1 outline outline-white
              text-white md:pl-3 "
              />
              <span
                className="absolute right-3 top-1 rounded-full z-20 text-primary w-6 h-6 
                cursor-pointer font-bold md:top-2 md:w-12 md:h-12 bg-white  md:p-3"
              >
                <Image
                  src="/icons/kite.svg"
                  width="100%"
                  height="100%"
                  alt="logo"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/5 md:flex md:flex-col md:gap-4">
        <h3 className="cursor-pointer font-secondary w-fit h-fit font-medium md:text-2xl">
          About Us
        </h3>
        <p className="cursor-pointer w-fit">Our Story</p>
        <p className="cursor-pointer">Our Team</p>
        <p className="cursor-pointer">Our Editorial Policy</p>
        <p className="cursor-pointer">Our Mistakes</p>
      </div>
      <div className="md:w-1/5 md:flex md:flex-col md:gap-4">
        <h3 className="cursor-pointer font-secondary w-fit h-fit font-medium md:text-2xl">
          Resources
        </h3>
        <p className="cursor-pointer w-fit">Continuing Education</p>
        <p className="cursor-pointer">For Journalists</p>
        <p className="cursor-pointer">Student Discount</p>
        <p className="cursor-pointer">Senior Discount</p>
      </div>
      <div className="md:w-1/5 md:flex md:flex-col md:gap-4">
        <h3 className="cursor-pointer font-secondary w-fit h-fit font-medium md:text-2xl">
          Social
        </h3>
        <p className="cursor-pointer w-fit">Facebook</p>
        <p className="cursor-pointer">Twitter</p>
        <p className="cursor-pointer">Linkedin</p>
        <p className="cursor-pointer">Email Us</p>
      </div>
    </footer>
  );
};

export default Footer;
