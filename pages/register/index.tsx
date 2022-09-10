import type { NextPage } from "next";
import Head from "next/head";

import Socials from "../../components/Socials";
import Footer from "../../components/Footer";

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Examine</title>
        <meta name="description" content="Examine auth UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center mt-8 font-primary pb-4 md:mt-16 md:pb-32">
        <div
          className="w-full flex flex-col items-center gap-4 px-4 pb-4 max-w-2xl md:shadow-lg md:pt-8
        md:px-10 md:pb-10"
        >
          <p className="font-bold text-xl text-dark font-secondary md:text-4xl">
            Create your account
          </p>
          <p className="text-sm text-gray-400 md:text-lg">
            It Includes a free 2 week trial!
          </p>
          <Socials />
          <div className="flex py-4 gap-4 justify-between items-end w-full">
            <div className="w-1/2 h-4 border-t-2 border-grey-400 "></div>{" "}
            <div className="text-grey-300">OR</div>
            <div className="w-1/2 h-4 border-t-2 border-grey-400"></div>{" "}
          </div>
          <form className="flex flex-col w-full gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="width-full h-9 border-2 border-gray-300 focus:outline-gray-400 pl-2 md:pl-3
              md:h-11"
            />
            <input
              type="email"
              placeholder="Email"
              className="width-full h-9 border-2 border-gray-300 focus:outline-gray-400 pl-2 md:pl-3
              md:h-11"
            />
            <div className="relative h-9">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-full border-2 border-gray-300 focus:outline-gray-400 pl-2 md:pl-3 md:h-11"
              />
              <span className="absolute right-3 top-1 w-fit z-20 text-primary cursor-pointer font-bold md:top-3">
                SHOW
              </span>
            </div>
            <button className="w-full bg-primary h-9 text-white rounded-sm md:h-14">
              Start your 2-week free trial!
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
