import React from "react";
import "../scss/navbar";

const Navbar: React.FC<{}> = () => {
  // const [chirps, setChirps] = useState<TChirps[]>([]);

  // useEffect(() => {
  //     (async () => {
  //         let res = await fetch ('/api/chirps')
  //         let chirps = await res.json()
  //         setChirps(chirps)
  //     })()
  // }, [])

  return (
    <>
      <nav id="main-nav" className="navbar">
        <a id="logo" className="navbar-brand" href="/">
          FRUITDIVVY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/assets/img.svg" alt="" />
        </button>
      </nav>
      <div className="collapse" id="navbarSupportedContent">
        <a className="dropdown-item drop-nav" href="#profile">
          PROFILE
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item drop-nav" href="#login">
          LOGIN
        </a>
        <a className="dropdown-item drop-nav" href="#psu">
          PROVIDER SIGN UP{" "}
        </a>
        <a className="dropdown-item drop-nav" href="#csu">
          COLLECTOR SIGN UP
        </a>
        <a className="dropdown-item drop-nav" href="#news">
          NEWS
        </a>
        <a className="dropdown-item drop-nav" href="#events">
          EVENTS
        </a>
        <a className="dropdown-item drop-nav" href="#contact">
          CONTACT
        </a>
        <a className="dropdown-item drop-nav" href="#signout">
          SIGN OUT
        </a>
      </div>
    </>
  );
};

export default Navbar;