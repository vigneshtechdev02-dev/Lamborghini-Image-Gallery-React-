function Hero() {
    return (
        <header className="hero" id="home">

            
            <div className="hero-image"></div>

            
            <div className="hero-overlay"></div>

            
            <nav className="navbar">

                <a href="#home" class="brand">
                    <div class="brand-name">
                    </div>
                </a>

                <div className="nav-actions">

                    <a href="#models" className="explore-btn">
                        <span>EXPLORE MODELS</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <button class="icon-btn" id="searchBtn" aria-label="Search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <button class="icon-btn" id="menuBtn" aria-label="Menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>

                </div>
            </nav>

            
            <div className="mobile-menu" id="mobileMenu">

                <a href="#home">HOME</a>
                <a href="#models">MODELS</a>
                <a href="#collection">COLLECTION</a>
                <a href="#about">ABOUT</a>

            </div>

            
            <div className="search-panel" id="searchPanel">

                <div className="search-box">

                    <input type="text" id="searchInput" placeholder="Search models..."></input>

                        <button id="closeSearch">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                </div>

            </div>

            
            <div className="hero-content">

                <div className="hero-line">
                    <span></span>
                    <small>LAMBORGHINI</small>
                </div>

                <h1>
                    <span>IMAGE</span>
                    <strong>GALLERY</strong>
                </h1>

                <p className="hero-tagline">
                    Iconic. Unstoppable. Lamborghini.
                </p>

                <p className="hero-description">
                    A curated gallery of legendary machines
                    <br></br>
                        that define power, design and performance.
                </p>

                <a href="#models" className="collection-btn">
                    <span>DISCOVER COLLECTION</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>

            </div>

            
            <button className="video-trigger" id="videoBtn">

                <span className="play-circle">
                    <i className="fa-solid fa-play"></i>
                </span>

                <span className="video-text">
                    <strong>FEEL THE ROAR</strong>
                    <small>Watch Video</small>
                </span>

            </button>

        </header>
    )
}

export default Hero