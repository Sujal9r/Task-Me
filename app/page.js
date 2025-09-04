import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Chooseus from "@/components/sections/home1/Chooseus"
import Cta from "@/components/sections/home1/Cta"
import Faq from "@/components/sections/home1/Faq"
import Feature from "@/components/sections/home1/Feature"
import Funfact from "@/components/sections/home1/Funfact"
import Process from "@/components/sections/home1/Process"
import Service from "@/components/sections/home2/Service"
import Team from "@/components/sections/home1/Team"
import Testimonial from "@/components/sections/home1/Testimonial"
import Clients from "@/components/sections/home3/Clients"
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} >
                <Banner/>
                <Cta/>
                <Service/>
                <Clients/>
                <Team/>
                <Testimonial/>
                <Process/>
                <Faq/>
            </Layout>
        </div>
    )
}