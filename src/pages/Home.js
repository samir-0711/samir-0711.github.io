import { FaLinkedinIn, FaGithub, FaTwitter, FaTerminal } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      type(ref, 0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = ["Software Engineer", "Full Stack Developer"];

  const type = async (ref, index, charAt) => {
    const currentTitle = title[index];
    let updatedText = "\xa0";

    if (charAt >= currentTitle.length) {
      charAt = 0;
      index += 1;
      index %= title.length;
      await new Promise((r) => setTimeout(r, 1000));
    } else {
      charAt += 1;
      updatedText = title[index].substring(0, charAt);
    }

    ref.current.innerText = updatedText;

    setTimeout(() => type(ref, index, charAt), 300);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-700">
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute bg-white sm:p-10 p-5 rounded-lg shadow-xl m-1 hover:shadow-2xl">
          <div className="sm:text-4xl text-2xl font-bold whitespace-nowrap">
            Samir Prajapati
          </div>
          <div className="sm:text-2xl text-lg mt-3 mb-5 whitespace-nowrap w-min mx-auto pr-1 transition-all">
            <span ref={ref}></span>
            <span className="border-r-2 border-black ml-1 animate-ping"></span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.github.com/samir-0711"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/samir0711"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://www.twitter.com/samir_711"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaTwitter size={15} />
            </a>
            <a
              href="https://terminal.samirprajapati.me/"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaTerminal size={15} />
            </a>
          </div>
          <a
            href="mailto:samir.rajesh.prajapati@gmail.com"
            className="group flex items-center text-center bg-black text-white w-min whitespace-nowrap m-auto mt-7 px-3 py-1.5 rounded cursor-pointer hover:bg-white hover:text-black border-2 border-black"
          >
            <RiSendPlaneFill size={15} className="group-hover:animate-ping" />
            <span className="ml-3 font-bold">Contact me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
