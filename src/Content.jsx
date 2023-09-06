import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";

export function Content() {
  return (
    <div>
      <Signup />
      <p>&nbsp;</p>
      <Login />
      <p>&nbsp;</p>
      <Logout />
      <p>&nbsp;</p>
      <h1>Welcome to React!</h1>
    </div>
  );
}
