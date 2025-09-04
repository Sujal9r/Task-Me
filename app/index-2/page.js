import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import App from "@/components/sections/home2/App"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Chooseus from "@/components/sections/home2/Chooseus"
import Clients from "@/components/sections/home2/Clients"
import Feature from "@/components/sections/home2/Feature"
import Pricing from "@/components/sections/home2/Pricing"
import Process from "@/components/sections/home2/Process"
import Service from "@/components/sections/home2/Service"
import Team from "@/components/sections/home2/Team"
export default function Home_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Clients/>
                <Chooseus/>
                <Feature/>
                <Process/>
                <Service/>
                <App/>
                <Team/>
                <Pricing/>
                <Cta/>
                <Blog/>
            </Layout>
        </div>
    )
}