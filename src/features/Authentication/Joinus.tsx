import logo_nike_white from "../../layouts/Assets/img/Logo_nike_white.png"
import nike_headquarte from "../../layouts/Assets/img/Nike_Headquarters_Oregon.jpg"
import nike_misson from "../../layouts/Assets/img/misson_nike.png"
import bg_nike from "../../layouts/Assets/img/Bg_nike.jpeg"
import group from "../../layouts/Assets/img/group.webp"
import nigga_nike from '../../layouts/Assets/img/Nigga_nike.webp'
import fashion_guy from "../../layouts/Assets/img/Fashion_nike.jpeg"
import JDF from "../../layouts/Assets/img/JDF.jpeg"
import layer from "../../layouts/Assets/img/layer_nike.png"
export const Joinus = (): JSX.Element => {
    return(
        <div>
            <div className="relative">
                <img src={bg_nike} alt="" />
                <h1 className="absolute text-white top-40 left-[50%] translate-x-[-50%] uppercase text-3xl font-serif font-semibold">Multiple choice for you to decide !!</h1>
                <h1 className="uppercase absolute text-white top-[40%] left-[10%] text-3xl leading-10 font-extrabold">"Twice <br className="pd-10" /> the guts <br />double <br />the glory"</h1>
                <h1 className="uppercase absolute text-white top-[45%] right-[10%] text-3xl leading-10 font-extrabold">
                    Find Your limit
                    <img src={logo_nike_white} alt="" className="w-24 ml-16"/>
                </h1>
                <h4 className="absolute text-white bottom-[15%] left-[50%] translate-x-[-50%]">You are welcomed to be a part of us</h4>
                <a href="./login" className="absolute bottom-[9%] left-[50%] translate-x-[-50%] px-6 py-1 bg-white rounded-3xl hover:bg-gray-300">Join us</a>
            </div>

            <div className="py-16 max-w-[1200px] mx-auto">
                <div className="">

                    <h3 className="text-center text-4xl pb-5">OUR STORY</h3>
                    <div className="max-w-[1200px] mx-auto flex items-center justify-between leading-8">

                        <img src={nike_headquarte} alt="" className="max-w-[50%] bg-cover bg-no-repeat h-auto"/>
                        <div className="px-10 py-10 my-20">
                            <div className="mx-auto bg-gray-50 py-4 px-16">
                                <p className="py-2">Nike, originally known as Blue Ribbon Sports, was founded in 1964 by Bill Bowerman and Phil Knight</p>
                                <p className="py-2">In 1985, Nike revolutionized the athletic footwear industry with the launch of the Air Jordan line of basketball shoes, endorsed by NBA superstar Michael Jordan.</p>
                                <p className="py-2">Throughout the years, Nike continued to innovate with various technologies, including Air cushioning and later, the Flyknit and Lunarlon technologies.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="mt-48">

                    <h3 className="text-center text-4xl pb-5">OUR MISSON</h3>
                    <div className="max-w-[1200px] mx-auto flex items-center justify-between mt-10 leading-8">
                        
                        <div className="px-10 py-10 my-20">
                            <div className="mx-auto bg-gray-50 py-4 px-16">
                                <p className="py-2">This mission statement emphasizes Nike's dedication to providing not only innovative and high-quality athletic products but also to inspiring and empowering people from all walks of life to tap into their athletic potential.</p>
                            </div>
                        </div>
                        <img src={nike_misson} alt="" className="max-w-[50%] bg-cover bg-no-repeat h-auto"/>

                    </div>

                </div>

                <div className="mt-72">
                    <div className="flex justify-between">
                        <h1 className="m-auto text-6xl pr-10 text-orange-400 font-extrabold">Perfect <br />your outfit</h1>
                        <img src={JDF} alt="" className="max-w-[80%]"/>
                    </div>
                    <div className="grid grid-cols-3 gap-x-3 pt-5">
                        <img src={group} alt="" className="" />
                        <img src={nigga_nike} alt="" className="" />
                        <img src={fashion_guy} alt="" className="" />
                    </div>

                </div>
                <div className="mt-72 relative">
                    <img src={layer} alt="" className="mx-auto w-[100%]"/>
                    <h3 className="absolute top-[65%] right-[15%] text-6xl font-extrabold text-yellow-400">Challenge <br />every sports</h3>
                </div>

            </div>
            <div className="flex justify-between bg-yellow-300 py-8 px-20 mb-8">
                <h3 className="uppercase text-xl text-brown-30 font-extrabold">Give it a try and become a dynamic member !!</h3>
                <div className="flex">
                    <svg className="mt-3 px-2 w-10" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/></svg>
                    <a href="./login" className="px-6 py-1 bg-black rounded-3xl hover:bg-gray-700 text-white">Join us</a>
                </div>
            </div>
        </div>
    )
}