
import Link from "next/link"
export default function Error() {

    return (
        <>


            <section className="error_section pt_150 pb_150">
            <div className="container">
                <div className="error_content centred">
                    <div className="error_image_box float-bob-x">
                        <img src="assets/images/resource/error_image.png" alt=""/>
                    </div>
                    <h2><span>Oops!</span> That Page Can Not be Found.</h2>
                    <div className="error_btn_box">
                        <Link href="/" className="btn_style_two"><span>Go Back</span></Link>
                        <Link href="/" className="btn_style_two"><span>Back to Homepage</span></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
