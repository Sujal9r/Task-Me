import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home5/Banner"
import Clients from "@/components/sections/home5/Clients"
import Feature from "@/components/sections/home2/Feature"
import Funfact from "@/components/sections/home5/Funfact"
import Feature_Two from "@/components/sections/home5/Feature"
import Service from "@/components/sections/home5/Service"
import Testimonial from "@/components/sections/home3/Testimonial"
import App from "@/components/sections/home5/App"
import Faq from "@/components/sections/home5/Faq"
import Blog from "@/components/sections/home2/Blog"
export default function Home_Five() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1}>
                <Banner/>
                <Clients/>
                <Feature/>
                <Funfact/>
                <Feature_Two/>
                <Service/>
                <Testimonial/>
                <App/>
                <Faq/>
                <Blog/>
            </Layout>
        </div>
    )
}