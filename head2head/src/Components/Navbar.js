import {Link} from "react-router-dom";
import './Navbar.css'
import Login from "./login";
import Register from "./Register";
import Home from "./Home";
import { InvalidTokenError } from "jwt-decode";
import { Container } from "react-bootstrap";



function Navbar() {
    return (
      <nav>
        <Container>
          <div className="topnav">
            <ul>
              <Link to="/Home">
                <>Home</>
              </Link>
              <Link to="/Register">
                <>Register</>
              </Link>
              <Link to="/Login">
                <>Log In</>
              </Link>
              <Link to="/Spotify">
                <>Spotify Login</>
              </Link>
            </ul>
          </div>
        </Container>
      </nav>
    );
}

export default Navbar
