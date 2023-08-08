import "../../layouts/Assets/Responsive.scss";
import White_shoes from "../../layouts/Assets/img/White_shoes.webp"

export const MenShoes = (): JSX.Element => {
    return (
        <div className="py-20">
            <div className="gridd wide my-40">
                <div className="flex justify-between">

                    <div className="side-bar w-52 ">
                        <h1 className="text-3xl font-serif font-semibold">Men's shoes</h1>
                        <ul className="relative pt-10 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-0 after:right-0 after:bottom-0">
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Life Style</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Jordan</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Running</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Basketball</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Football</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Training & Gym</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Skateboarding</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Baseball</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Golf</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Tennis</a>
                            </li>
                            <li className="pb-2 font-semibold pl-2">
                                <a href="" className="">Athletics</a>
                            </li>
                            <li className="pb-12 font-semibold pl-2">
                                <a href="" className="">Walking</a>
                            </li>
                        </ul>

                        <div className="">
                            <input type="checkbox" id="slide-1"/>
                            <label htmlFor="slide-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </label>
                            <ul className="relative pt-6 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-2 after:right-0 after:top-12">
                                <li className="pb-2 font-semibold pl-2">
                                    <p className="">gender</p>
                                </li>
                                <div className=""></div>
                            </ul>
                        </div>
                        <div className="">
                            <input type="checkbox" id="slide-2"/>
                            <label htmlFor="slide-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </label>
                            <ul className="relative pt-6 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-0 after:right-0 after:bottom-0">
                                <li className="pb-2 font-semibold pl-2">
                                    <a href="" className="">Life Style</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product grid grid-cols-3 gap-4 max-w-[80%]">
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="font-semibold">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="font-semibold">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="font-semibold">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={White_shoes} alt="" />
                            <div className="pt-4">
                                <p className="text-red-800 font-semibold">Best Seller</p>
                                <p className="">Nike Air Force 1 '07</p>
                                <p className="font-light">Men's Shoes</p>
                                <p className="font-light">2 Colours</p>
                                <p className="font-semibold pt-4">2.920.000đ</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}