import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>


            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box">
                        <figure className="logo-box"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        <div className="close-search" onClick={handlePopup}><span className="fa-solid fa-xmark"></span></div>
                    </div>
                    <div className="overlay-layer"></div>
                    <div className="container">
                        <div className="search-form">
                            <form method="post" action="/">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" placeholder="Type your keyword and hit" required />
                                        <button type="submit"><i className="icon-50"></i></button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
