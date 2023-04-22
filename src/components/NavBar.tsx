import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-24 flex items-center px-8 shadow-lg">
      <div>
        <Link to="/">
          <h2 className="text-slate-500 font-bold text-lg">Everlance inc.</h2>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
