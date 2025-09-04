'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import Process from "@/components/sections/home1/Process"

export default function PricingPage() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Process />
            </Layout>
        </div>
    )
}