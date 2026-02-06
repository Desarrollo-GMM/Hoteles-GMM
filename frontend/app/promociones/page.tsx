'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import PromotionComponent from "../../components/features/promotions/promotionCardComponent"
import FooterComponent from "../../components/layouts/dashboard/footerComponent"

const Page: React.FC = () => {
    return (
        <div className="relative">
            <NavbarComponent design={1}></NavbarComponent>

            <div className="min-h-screen">

                <div className="h-full">
                    <div className="">
                        <PromotionComponent></PromotionComponent>
                    </div>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}

export default Page