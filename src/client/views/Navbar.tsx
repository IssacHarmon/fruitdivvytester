import React from 'react'
import '../scss/navbar'



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
        <nav id="main-nav" className="navbar navbar-expand-lg bg-light">
        <a id="logo" className="navbar-brand" href="/">FRUITDIVVY</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle hamburger-menu" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-align-justified hamburger" width="44" height="38"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                        
                    </a>

                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item drop-nav" href="#">PROFILE</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item drop-nav" href="#">LOGIN</a>
                        <a className="dropdown-item drop-nav" href="#">PROVIDER SIGN UP </a>
                        <a className="dropdown-item drop-nav" href="#">COLLECTOR SIGN UP</a>
                        <a className="dropdown-item drop-nav" href="#">NEWS</a>
                        <a className="dropdown-item drop-nav" href="#">EVENTS</a>
                        <a className="dropdown-item drop-nav" href="#">CONTACT</a>
                        <a className="dropdown-item drop-nav" href="#">SIGN OUT</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
      ); 
  };









export default Navbar;