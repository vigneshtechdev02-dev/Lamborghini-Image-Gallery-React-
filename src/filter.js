function Filter() {
    return (
        <main>
            <section className="models-section" id="models">

                <div className="filter-wrapper">

                    <div className="filters" id="filters">

                        <button className="filter-btn active" data-filter="all">
                            ALL MODELS
                        </button>

                        <button className="filter-btn" data-filter="huracan">
                            HURACÁN
                        </button>

                        <button className="filter-btn" data-filter="aventador">
                            AVENTADOR
                        </button>

                        <button className="filter-btn" data-filter="revuelto">
                            REVUELTO
                        </button>

                        <button className="filter-btn" data-filter="urus">
                            URUS
                        </button>

                        <button className="filter-btn" data-filter="legacy">
                            LEGACY
                        </button>

                    </div>

                    <div className="sort-box">

                        <span>SORT BY</span>

                        <select id="sortSelect">
                            <option value="latest">LATEST</option>
                            <option value="oldest">OLDEST</option>
                            <option value="speed">TOP SPEED</option>
                            <option value="power">POWER</option>
                        </select>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default Filter