import { Link } from "react-router-dom";

export const Header = () => {
  const user = "Robert";
  return (
    <header>
      <Link to={`/`}>
        <img src="logo.png" alt="Home" />
      </Link>
      <div>
        <div>
          <img src="user.png" alt="user" />
          <p>Hi, {user}!</p>
        </div>
      </div>
    </header>
  );
};
