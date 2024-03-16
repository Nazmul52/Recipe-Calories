import UserIcon from "../assets/Frame.png";
import SearchIcon from "../assets/Search.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipe</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <a className="text-3xl font-bold">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-[16px]">
            <a>Home</a>
          </li>
          <li className="text-[16px]">
            <a>Recipe</a>
          </li>
          <li className="text-[16px]">
            <a>About</a>
          </li>
          <li className="text-[16px]">
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="form-control hidden lg:flex items-center relative">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto rounded-full bg-[#F8F8FF] pl-12"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar w-[48px] h-[48px] rounded-full bg-green-500"
          >
            <div className="w-8 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={UserIcon} />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
