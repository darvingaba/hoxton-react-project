import { Link } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};
type Props = {
  user: User;
};
export function Header({ user }: Props) {
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
            {user.name !== "" ? (
              <li>Hello {user.name}</li>
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </header>
    </>
  );
}
