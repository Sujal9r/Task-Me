
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">x</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="T" className="letters-loading">
                                T
                            </span>
                            <span data-text-preloader="A" className="letters-loading">
                                A
                            </span>
                             <span data-text-preloader="S" className="letters-loading">
                                S
                            </span>
                             <span data-text-preloader="K" className="letters-loading">
                                K
                            </span>
                             <span data-text-preloader="" className="letters-loading">
                                
                            </span>
                             <span data-text-preloader="M" className="letters-loading">
                                M
                            </span>
                             <span data-text-preloader="E" className="letters-loading">
                                E
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
