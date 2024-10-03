import ButtonLink from "@/components/button/ButtonLink"
import Image from "next/image"

const About = () => {
    return (
        <div className="p-2 h-scren">
            <div className="relative w-full h-80">
                <Image
                    className="object-cover grayscale"
                    src="https://images.pexels.com/photos/28448837/pexels-photo-28448837/free-photo-of-vista-do-crepusculo-da-torre-de-tv-e-da-ponte-de-berlim.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="" />
                <div className="absolute bottom-5 left-5">
                    <h1 className="text-4xl font-bold text-green-400">Digital Storytellers</h1>
                    <h2 className="text-lg text-green-600">Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className="flex justify-between w-full mt-6">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl">Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum unde aliquid ad hic blanditiis nihil autem, similique necessitatibus eos soluta voluptatum tempora quod error ea, dolorem non, expedita et? Consectetur.
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta earum quae officiis possimus, obcaecati quo iste, tenetur veniam nesciunt eum autem facere commodi voluptates nihil laborum beatae dolorum veritatis amet.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl">What We Do?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum unde aliquid ad hic blanditiis nihil autem, similique necessitatibus eos soluta voluptatum tempora quod error ea, dolorem non, expedita et? Consectetur.
                        <br />
                        <br /> - Creative Illustrations
                        <br /> - Dynamic Websites
                        <br /> - Fast and Handy Mobile Apps
                        {/* <ul>
                            <li>Creative Illustrations</li>
                            <li>Dynamic Websites</li>
                            <li>Fast and Handy Mobile Apps</li>
                        </ul> */}
                    </p>
                    <ButtonLink url="/contact">Contact</ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default About