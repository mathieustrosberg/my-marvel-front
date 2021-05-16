import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch }) => {
  return (
    <div className="layout">
      <div className="container-header">
        <div className="col-left">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="marvel" />
            </Link>
          </div>

          <div className="search-bar">
            <FontAwesomeIcon icon="search" className="search-input-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-right">
          <Link className="btn-style" to="/">
            Characters
          </Link>
          <Link className="btn-style" to="/comics">
            Comics
          </Link>
          <Link className="btn-style" to="/mylist">
            My List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
