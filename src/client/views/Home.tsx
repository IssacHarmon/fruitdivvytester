import React, { Fragment } from "react";
import "../scss/home";
const Home: React.FC<{}> = () => {
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
            <main className="container-fluid homepage">
                
            </main>

            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                            labore facilis libero aspernatur consequatur iure. Ex, repellendus
                            voluptate? Aspernatur accusamus laboriosam ab est velit natus,
                            minus aliquid temporibus facere amet.
                        </p>
                    </div>
                    <div className="carousel-item">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                            labore facilis libero aspernatur consequatur iure. Ex, repellendus
                            voluptate? Aspernatur accusamus laboriosam ab est velit natus,
                            minus aliquid temporibus facere amet.
                        </p>
                    </div>
                    <div className="carousel-item">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                            labore facilis libero aspernatur consequatur iure. Ex, repellendus
                            voluptate? Aspernatur accusamus laboriosam ab est velit natus,
                            minus aliquid temporibus facere amet.
                        </p>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default Home;
