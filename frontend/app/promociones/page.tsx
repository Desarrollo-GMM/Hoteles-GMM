'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import PromotionComponent from "../../components/features/promotions/promotionCardComponent"

const Page: React.FC = () => {
    return (
        <div className="relative">
            <NavbarComponent></NavbarComponent>

            <div className="min-h-screen">

                <div className="mt-16">
                    <div className="">
                        <PromotionComponent></PromotionComponent>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}

export default Page