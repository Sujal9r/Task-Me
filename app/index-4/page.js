import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import Faq from "@/components/sections/home4/Faq"
import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Chooseus from "@/components/sections/home4/Chooseus"
import Clients from "@/components/sections/home4/Clients"
import Feature from "@/components/sections/home4/Feature"
import Funfact from "@/components/sections/home4/Funfact"
import Testimonial from "@/components/sections/home4/Testimonial"
import Blog from "@/components/sections/home2/Blog"
export default function Home_Four() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={1}>
                <Banner/>
                <Clients/>
                <About/>
                <Chooseus/>
                <Feature/>
                <Funfact/>
                <Testimonial/>
                <Cta/>
                <Faq/>
                <Blog/>
            </Layout>
        </div>
    )
}