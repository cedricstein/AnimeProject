import styled from "styled-components";
import { Link } from "react-router-dom";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

const Nav = () => {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/genrepage" style={linkStyle}>
        GenrePage
      </Link>
      <Link to="/profile" style={linkStyle}>
        Profile
      </Link>
      {/* <Link to="/animegenre" style={linkStyle}>
        AnimeGenre
      </Link> */}
      <Link>
        <Route path="/anime/:id" style={linkStyle} />
        AnimeName
      </Link>
    </NavUnlisted>
  );
};

export default Nav;
