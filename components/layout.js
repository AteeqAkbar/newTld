import Navbar from "./nav/navbar.js";
import Spinner from "./spinner.js";
//import Footer from './footer'
import { AuthContext } from "../contexts/auth_context";
import { useContext } from "react";

export default function Layout({ children }) {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user.authIsValide ? (
        <div>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
