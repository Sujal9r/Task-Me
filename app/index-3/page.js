import Layout from "@/components/layout/Layout"
import App from "@/components/sections/home2/App"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Chooseus from "@/components/sections/home3/Chooseus"
import Clients from "@/components/sections/home3/Clients"
import Faq from "@/components/sections/home3/Faq"
import Service from "@/components/sections/home3/Service"
import Testimonial from "@/components/sections/home3/Testimonial"
import Video from "@/components/sections/home3/Video"
export default function Home_Three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Clients/>
                <About/>
                <Video/>
                <Chooseus/>
                <Service/>
                <App/>
                <Testimonial/>
                <Faq/>
            </Layout>
        </div>
    )
}