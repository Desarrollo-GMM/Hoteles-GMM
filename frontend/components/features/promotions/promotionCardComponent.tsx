'use client'
import Image from "next/image"

import AutoScrollComponent from "@/components/ui/autoScrollComponent"
import { PROMOTIONS } from "@/app/constants/routes"

interface ComponentProps {

}

const PromotionComponent: React.FC<ComponentProps> = () => {
    return (
        <div className="w-full h-full flex align-middle">
            <div className="w-1/3  h-[100vh] flex justify-center align-middle">
                <span className="my-auto mx-10 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis accusamus ea totam voluptate repellat ratione nihil cum provident delectus ex esse, reprehenderit quibusdam facilis, molestias quaerat libero, distinctio quam?
                </span>
            </div>
            <div className="w-2/3 grid grid-cols-1  h-[100vh]">
                <div className=" ">
                    <div className="relative h-[45vh] mb-12 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 z-10" />
                        <AutoScrollComponent
                            speed="slow"
                            direction="horizontal"
                            reverse={false}
                            pauseOnHover={true}
                            className="py-4 h-auto"
                            gap={0}
                        >
                            {PROMOTIONS.map((currentValue, index) => (
                                <div
                                    key={index}
                                    className="mx-4 relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                    <img
                                        src={currentValue.image}
                                        alt={`Tulum ${index}`}
                                        className="h-[50vh] w-auto object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            ))}
                        </AutoScrollComponent>
                    </div>


                </div>
                <div className="">
                    <div className="relative h-[35vh] overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-teal-900/20 to-transparent z-10" />
                        <AutoScrollComponent
                            speed="medium"
                            direction="horizontal"
                            reverse={true}
                            pauseOnHover={true}
                            className="py-4 h-auto"
                            gap={0}
                        >
                            {PROMOTIONS.map((currentValue, index) => (
                                <div
                                    key={index}
                                    className="mx-4 relative group cursor-pointer transform transition-transform duration-500 hover:scale-105"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                    <img
                                        src={currentValue.image}
                                        alt={`Tulum ${index}`}
                                        className="h-[30vh] w-auto object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            ))}
                        </AutoScrollComponent>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default PromotionComponent

