'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import FooterComponent from "../../components/layouts/dashboard/footerComponent"
import PackageComponent from "../../components/features/package/packageComponent"

const Page: React.FC = () => {
    return (
        <div className="relative">
            <NavbarComponent></NavbarComponent>

            <div className="min-h-screen">

                <div className="mt-16">
                    <div className="">
                        <PackageComponent></PackageComponent>
                    </div>


                    
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}

export default Page