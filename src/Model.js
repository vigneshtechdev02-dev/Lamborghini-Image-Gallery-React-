import p1 from "./assest/images/p-1.jpeg";
import p2 from "./assest/images/p-2.jpeg";
import p3 from "./assest/images/p-3.jpeg";
import p4 from "./assest/images/p-4.jpeg";
import p5 from "./assest/images/p-5.jpeg";
import p6 from "./assest/images/p-6.jpeg";

function Model() {
    return (
        <main>
            <section className="models-section" id="models">
                <div className="model-grid" id="modelGrid">


                    <article className="model-card" data-category="huracan" data-index="1" data-speed="325" data-power="640">

                        <div className="card-image">

                            <img src={p1}></img>

                                <span className="model-number">01</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">
                                <div>
                                    <h2>HURACÁN TECNICA</h2>

                                    <p>
                                        Pure driving pleasure.
                                        <br></br>
                                            Naturally aspirated V10.
                                    </p>
                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>640 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>3.2 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>325 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>


                    
                    <article className="model-card" data-category="revuelto" data-index="2" data-speed="350" data-power="1015">

                        <div className="card-image">

                            <img src={p2}></img>

                                <span className="model-number">02</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                                <span className="new-badge">NEW</span>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">

                                <div>

                                    <h2>REVUELTO</h2>

                                    <p>
                                        The future is our legacy.
                                        <br></br>
                                            Hybrid V12. Unmatched innovation.
                                    </p>

                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>1015 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>2.5 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>350 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>


                    
                    <article className="model-card" data-category="aventador" data-index="3" data-speed="355" data-power="780">

                        <div className="card-image">

                            <img src={p3}></img>

                                <span className="model-number">03</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">

                                <div>

                                    <h2>AVENTADOR ULTIMAE</h2>

                                    <p>
                                        A legend. The final roar of
                                        <br></br>
                                            the iconic V12.
                                    </p>

                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>780 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>2.8 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>355 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>



                    <article className="model-card" data-category="urus" data-index="4" data-speed="306" data-power="666">

                        <div className="card-image">

                            <img src={p4}></img>

                                <span className="model-number">04</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">

                                <div>

                                    <h2>URUS PERFORMANTE</h2>

                                    <p>
                                        Super SUV. Superlative performance.
                                        <br></br>
                                            Born to be more.
                                    </p>

                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>666 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>3.3 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>306 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>


                    
                    <article className="model-card" data-category="huracan" data-index="5" data-speed="310" data-power="640">

                        <div className="card-image">

                            <img src={p5}></img>

                                <span className="model-number">05</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">

                                <div>

                                    <h2>HURACÁN STO</h2>

                                    <p>
                                        Race inspired. Road legal.
                                        <br></br>
                                            Built for purists.
                                    </p>

                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>640 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>3.0 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>310 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>


                    
                    <article className="model-card" data-category="legacy" data-index="6" data-speed="355" data-power="814">

                        <div className="card-image">

                            <img src={p6}></img>

                                <span className="model-number">06</span>

                                <button className="heart-btn">
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        </div>

                        <div className="card-content">

                            <div className="card-heading">

                                <div>

                                    <h2>COUNTACH LPI 800-4</h2>

                                    <p>
                                        An icon reimagined.
                                        <br></br>
                                            Timeless design. Modern soul.
                                    </p>

                                </div>

                                <button className="arrow-btn">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>

                            <div className="specs">

                                <div>
                                    <i className="fa-solid fa-bolt"></i>
                                    <strong>814 HP</strong>
                                    <small>POWER</small>
                                </div>

                                <div>
                                    <strong>2.8 s</strong>
                                    <small>0–100 KM/H</small>
                                </div>

                                <div>
                                    <strong>355 KM/H</strong>
                                    <small>TOP SPEED</small>
                                </div>

                            </div>

                        </div>

                    </article>

                </div>

            </section>


            <section className="feature-section" id="about">

                <div className="feature-content">

                    <span className="eyebrow">
                        BEYOND PERFORMANCE
                    </span>

                    <h2>
                        DESIGNED TO INSPIRE.
                        <br></br>
                            BUILT TO DOMINATE.
                    </h2>

                    <p>
                        Every curve, every detail, every roar —
                        <br></br>
                            crafted with passion.
                    </p>

                    <a href="#models" className="collection-btn">
                        <span>EXPLORE ALL MODELS</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>
           </section>
        </main>
    )
}

export default Model