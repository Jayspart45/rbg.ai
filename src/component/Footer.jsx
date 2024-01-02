import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
export default function Footer() {
  const linkedln = "https://in.linkedin.com/company/rbgai";
  const youtube = "https://www.youtube.com/c/RBGAI";
  const facebook = "https://m.facebook.com/p/RBGAI-100070859903620/?locale=en";
  const twitter = "https://twitter.com/rbg_ai";
  const github = "https://github.com/rbg-research";
  return (
    <div className="md:px-20 py-5 bg-gray-100 flex flex-col space-y-3 text-center font-Inter text-zinc-600">
      <h1 className="font-bold text-lg md:text-2xl uppercase text-zinc-700">
        Contact Us
      </h1>
      <span className="font-semibold text-md md:text-lg">
        RBG.AI, SREC Incubation Center, Sri Ramakrishna Engineering
        College,Coimbatore Tamil Nadu 641 022,India
      </span>
      <p>
        If you have queries about our work, contact us at
        <span className="text-zinc-800 mx-2 font-semibold">
          research@rbg.ai
        </span>
      </p>
      <span>© 2022 RBG.AI. All rights reserved.</span>

      <div className="flex space-x-5 mx-auto my-10  text-lg md:text-2xl">
        <a href={facebook} className="cursor-pointer">
          <FaFacebookF />
        </a>
        <a href={github} className="cursor-pointer">
          <FaGithub />
        </a>
        <a href={linkedln} className="cursor-pointer">
          <FaLinkedin />
        </a>
        <a href={twitter} className="cursor-pointer">
          <FaXTwitter />
        </a>
        <a href={youtube} className="cursor-pointer">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
