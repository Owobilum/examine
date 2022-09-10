import { FC } from "react";
import Image from "next/image";

type SocialType = { name: string; path: string };

const socials: SocialType[] = [
  { name: "google", path: "/icons/google.svg" },
  { name: "apple", path: "/icons/apple.svg" },
  { name: "facebook", path: "/icons/facebook.svg" },
];

const Social: FC<SocialType> = ({ name, path }) => (
  <a href="#" className="max-h-full max-w-full rounded shadow">
    <span
      className="h-10 w-8 p-2 grid place-items-center  cursor-pointer
  md:w-16 md:h-12 md:p-4"
    >
      <Image height="100%" width="100%" alt={name} src={path} />
    </span>
  </a>
);

const Socials: FC = () => {
  return (
    <div className="flex gap-4">
      {socials?.map(({ name, path }) => (
        <Social key={path} name={name} path={path} />
      ))}
    </div>
  );
};

export default Socials;
