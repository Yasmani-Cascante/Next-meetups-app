import Link from "next/link";
import Image from "next/image";
import LogoSvg from "../../public/vercel.svg";

const Nav = () => {
  function navToggle() {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }
  return (
    <div className="px-5 sm:px-10 border-b-2 border-primary">
      <div className="container mx-auto">
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full items-center sm:py-5 py-3 bg-white"
        >
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center cursor-pointer">
            <Link href="/">
              <Image className="h-8 w-auto sm:h-10" src={LogoSvg} alt="logo" />
            </Link>
            <button
              id="menuBtn"
              className="hamburger block sm:hidden focus:outline-none"
              type="button"
              onClick={navToggle}
            >
              <span className="hamburger__top-bun text-black"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <ul
            id="menu"
            className="duration-1000 divide-y divide-gray-200 mt-10 sm:mt-0 sm:divide-y-0 w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row sm:items-center h-full py-1 sm:py-0 sm:pb-0 hidden ml-auto"
          >
            <li className="font-semibold px-3 py-2 text-black hover:text-gray-900 uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold px-3 py-2 text-black hover:text-gray-900 uppercase">
              <Link href="/new-meetup">New Meetup</Link>
            </li>
            <li className="md:ml-5">
              <button
                id="signBtn"
                disabled
                className="transition-all mt-5 sm:mt-0 flex font-bold items-center justify-center px-4 py-2 border-black border-2 text-md font-medium text-black uppercase bg-secondary hover:bg-secondary-light text-white"
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
