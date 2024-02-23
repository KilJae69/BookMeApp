import { Link } from "react-router-dom";

function Logo() {
    return (
      <Link to="/" className="-m-1.5 p-1.5 inline-block">
        <span className="sr-only">BookMeApp</span>
        <img
          className="h-8 w-auto"
          src="/default-monochrome.svg"
          alt=""
        />
      </Link>
    );
}

export default Logo
