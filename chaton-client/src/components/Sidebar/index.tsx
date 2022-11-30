import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="lg:w-60 w-28">
      <div className="overflow-y-auto overflow-x-hidden py-4 px-3 bg-gray-200 dark:bg-gray-800  h-screen">
        <h2 className="lg:text-xl text-md font-semibold flex justify-center text-gray-100 cursor-pointer">
          Chat On
        </h2>
        <input
          type="text"
          placeholder="Search rooms"
          className="mt-6 flex justify-center items-center w-48 h-8 rounded-lg overflow-hidden outline-none mx-4 px-2 placeholder-gray-500 placeholder-opacity-50 "
        />
        <ul className="space-y-10 flex flex-col items-center mt-14 text-gray-200 font-sans">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 font-medium hover:bg-indigo-300/40 rounded-lg mt-10 transition-all delay-100 duration-200"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 hover:bg-indigo-300/40 rounded-lg font-medium delay-100 transition-all duration-200 "
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="flex items-center px-4 py-2 font-medium hover:bg-indigo-300/40 rounded-lg delay-100 transition-all duration-200 "
            >
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
