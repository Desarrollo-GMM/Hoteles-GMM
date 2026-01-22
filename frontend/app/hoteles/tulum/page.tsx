'use client'

import ReservationComponent from "@/components/features/dashboard/reservationComponent"
import NavbarComponent from "@/components/layouts/hoteles/navbarComponent"
import InformationComponent from "@/components/features/hotels/tulum/informationComponent"
import AutoScrollComponent from "@/components/ui/autoScrollComponent"

import { IMAGES_ROUTES } from "@/app/constants/routes";

ReservationComponent

const Page: React.FC = () => {
    return (
        <div className="m-4">
            <NavbarComponent />
            <ReservationComponent
                imageUrl="/images/hoteles/tulum/tulum-giblin.png"
                option={3}
                description="Disfruta de la naturaleza y la tranquilidad en nuestro hotel de Tulum"
                title="Hotel Tulum"
                extraStyles="rounded-xl h-[96vh]" />

            <div className="h-[40vh]  w-full">
                <AutoScrollComponent
                    speed="medium"
                    direction="horizontal"
                    reverse={false}
                    pauseOnHover={true}
                    className="py-4 h-auto"
                    gap={0}>

                    {IMAGES_ROUTES.VERTICAL_IMAGES.TULUM.map((image, index) => (
                        <div key={index} className="mx-4">
                            <img key={index} src={image} alt={`Tulum ${index}`} className="h-[40vh] object-cover rounded-lg" />
                        </div>
                    ))}
                </AutoScrollComponent>
            </div>

            <div className="h-[80vh] w-full">
                <AutoScrollComponent
                    speed="slow"
                    direction="horizontal"
                    reverse={true}
                    pauseOnHover={true}
                    className="py-4 h-auto"
                    gap={0}>

                    {IMAGES_ROUTES.HORIZONTAL_IMAGES.TULUM.map((image, index) => (
                        <div key={index} className="mx-4">
                            <img key={index} src={image} alt={`Tulum ${index}`} className="h-[30vh] object-cover rounded-lg" />
                        </div>
                    ))}
                </AutoScrollComponent>
            </div>


            <InformationComponent />

        </div>
    )
}

export default Page

