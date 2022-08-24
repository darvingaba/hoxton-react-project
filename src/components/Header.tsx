import { Link } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};
type Props = {
  serverUser: User;
};
export function Header({ serverUser }: Props) {
  return (
    <>
      <header className="App-header">
        <div className="title">Planner</div>
        <ul className="menu">
          <Link to={"landingpage"}>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
          <Link to={"/login"}>
            {serverUser.name !== "" ? (
              <li>Hello {serverUser.name}</li>
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </header>
    </>
  );
}
