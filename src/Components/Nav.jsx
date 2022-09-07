import { Link } from "react-router-dom";
import {FiSearch, FiChevronRight} from "react-icons/fi"

const Nav = (props) => {
  return (
    <div className="px-32 flex flex-row w-full justify-between sm:px-5 lg:pl-12 xl:pl-32 2xl:pl-40">

      {/* Nav Links */}
      <nav className="flex flex-rowtext-base items-center 2xl:text-lg">
        <ul className="flex items-center">
          <li className="underline underline-offset-4 text-blue-0 ">
            <Link to="/learn">Learn</Link>
          </li>
          <div className="mx-5">
            <FiChevronRight  className="w-5 h-5 stroke-black"/>
          </div>
          <li className="underline underline-offset-4 text-blue-0 ">
            <Link className="text-black" to={`${props.path.link}`}>{props.path.name}</Link>
          </li>
        </ul>
      </nav>

      {/* Search */}
      <div className=" flex relative items-center w-fit">
        <div className="absolute  ml-2">
          <FiSearch className="w-6 h-6" />
        </div>
        <input
          className=" py-1 px-10 items-center w-96 lg:w-96 sm:w-72 md:w-80"
          type="search"
          placeholder="Search articles and help"
        />
      </div>
    </div>
  );
};

export default Nav;
