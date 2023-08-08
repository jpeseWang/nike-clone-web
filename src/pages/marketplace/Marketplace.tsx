import "../../layouts/Assets/Responsive.scss"
import Sitting_background from "../../layouts/Assets/img/sitting_in_the-ground.webp"
import Skirts_shoes from "../../layouts/Assets/img/Skirt_shoes.webp"
import Hips from "../../layouts/Assets/img/Hips.webp"
import Men_Tshirt from"../../layouts/Assets/img/Men_shirt.webp"
import Men_shorts from"../../layouts/Assets/img/Men_shorts.webp"
import Asuna from "../../layouts/Assets/img/Asuna.webp"
import Orange_nike from "../../layouts/Assets/img/Orange-shoes.webp"
import red_skirt from "../../layouts/Assets/img/Red_skirt.jpeg"
import men from "../../layouts/Assets/img/Men.webp"
import girl from "../../layouts/Assets/img/Girl.webp"
import boy from "../../layouts/Assets/img/Boy.webp"
export const Marketplace = (): JSX.Element => {
  return(
    <div>
        <div className="gridd wide">

          <div className="py-20">
              <h1 className="text-2xl py-6 font-semibold">Trending</h1>
              <a href="./MenShoes relative" className="text-center">
                <img src={Sitting_background} alt="" className="" />
                <p className="pt-7">Air Max 1</p>
                <h1 className="py-4 uppercase font-extrabold text-6xl">No Genres. All Soul</h1>
                <a href="" className="my-4 py-2 px-6 absolute left-[50%] translate-x-[-50%] bg-black text-white rounded-3xl hover:opacity-80">Shop</a>
              </a>
          </div>

          <div className="py-20">
              <h1 className="font-semibold text-2xl">Featured</h1>
              <div className="grid grid-cols-2 gap-3 py-6">
                  <a href="" className="relative text-white">
                      <img src={Hips} alt="" className=""/>
                      <div className="absolute bottom-12 left-12">
                          <p className="font-bold">The best of Nike Leggings</p>
                          <h3 className="pt-2 pb-8 font-bold">Meet the Zenvy, Universa and go</h3>
                          <a href="./MenShoes" className="my-4 py-2 px-6 bg-white text-black rounded-3xl hover:opacity-80">Shop</a>
                      </div>
                  </a>
                  <a href="" className="relative text-black">
                      <img src={Skirts_shoes} alt="" className=""/>
                      <div className="absolute bottom-12 left-12">
                          <p className="font-semibold">Nike cortez</p>
                          <h3 className="pt-2 pb-8 font-bold uppercase text-lg">Do It First</h3>
                          <a href="./MenShoes" className="my-4 py-2 px-6 bg-black text-white rounded-3xl hover:bg-gray-600">Shop</a>
                      </div>
                  </a>
              </div>
          </div>

          <div className="">
              <div className="flex justify-between py-4">
                  <h3 className="text-2xl font-medium">Everyday Essentials</h3>

                  <div className="flex items-center">
                      <span className="">Shop</span> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 p-3 mx-4 rounded-[50%] bg-gray-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 p-3 rounded-[50%] bg-gray-200">
                        <path  strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </div>

              </div>

              <div className="whitespace-nowrap overflow-x-scroll pb-20">

                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_Tshirt} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike SB</p>
                              <p className="font-semibold">659,000đ</p>
                          </div>
                          <p className="font-light">Logo Skate T-shirt</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_shorts} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">NikeCourt Dri-FiT Victory</p>
                              <p className="font-semibold">1,019,000đ</p>
                          </div>
                          <p className="font-light">Men's9" (23cm approx.) Tennis Shorts</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Asuna} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike Ashuna 2</p>
                              <p className="font-semibold">1,329,000đ</p>
                          </div>
                          <p className="font-light">Men's Slides</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_Tshirt} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike SB</p>
                              <p className="font-semibold">659,000đ</p>
                          </div>
                          <p className="font-light">Logo Skate T-shirt</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_shorts} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">NikeCourt Dri-FiT Victory</p>
                              <p className="font-semibold">1,019,000đ</p>
                          </div>
                          <p className="font-light">Men's9" (23cm approx.) Tennis Shorts</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Asuna} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike Ashuna 2</p>
                              <p className="font-semibold">1,329,000đ</p>
                          </div>
                          <p className="font-light">Men's Slides</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_Tshirt} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike SB</p>
                              <p className="font-semibold">659,000đ</p>
                          </div>
                          <p className="font-light">Logo Skate T-shirt</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Men_shorts} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">NikeCourt Dri-FiT Victory</p>
                              <p className="font-semibold">1,019,000đ</p>
                          </div>
                          <p className="font-light">Men's9" (23cm approx.) Tennis Shorts</p>
                      </div>
                  </div>
                  <div className="w-[33.3333%] pr-3 inline-block">
                      <img src={Asuna} alt="" className=""/>
                      <div className="">
                          <div className="flex justify-between pt-2">
                              <p className="font-semibold">Nike Ashuna 2</p>
                              <p className="font-semibold">1,329,000đ</p>
                          </div>
                          <p className="font-light">Men's Slides</p>
                      </div>
                  </div>
              </div>
              
              <div className="py-20">
                <h1 className="text-2xl py-6 font-semibold">Gear up</h1>
                <a href="./MenShoes relative" className="text-center">
                  <img src={Orange_nike} alt="" className="" />
                  <h1 className="pt-6 uppercase font-extrabold text-6xl uppercase">Nike Metcon 9</h1>
                  <p className="py-6">Stay grounded. From deadlifts to squats, box jumps to rows</p>
                  <a href="" className="py-2 px-6 absolute left-[50%] translate-x-[-50%] bg-black text-white rounded-3xl hover:opacity-80">Shop</a>
                </a>
              </div>

              <div className="py-20">
                <h1 className="text-2xl py-6 font-semibold">Don't miss</h1>
                <a href="./MenShoes relative" className="text-center">
                  <img src={red_skirt} alt="" className="" />
                  <h3 className="pt-12">Jordan Men</h3>
                  <h1 className="uppercase font-extrabold text-6xl uppercase">Jordan Max Ashura</h1>
                  <p className="py-6">Next-gen comfort meets ever-iconics heritage details</p>
                  <a href="" className="py-2 px-6 absolute left-[50%] translate-x-[-50%] bg-black text-white rounded-3xl hover:opacity-80">Shop</a>
                </a>
              </div>

              <div className="py-20">

                <h1 className="text-2xl font-medium py-8">The Essentials</h1>

                <div className="grid grid-cols-3 gap-3">

                    <div className="">
                        <div className="">
                            <div className="relative">
                                <img src={men} alt="" className=""/>
                                <span className="absolute bottom-10 left-10 py-2 px-6 font-medium rounded-full bg-white">Men's</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <div className="relative">
                                <img src={girl} alt="" className=""/>
                                <span className="absolute bottom-10 left-10 py-2 px-6 font-medium rounded-full bg-white">Women's</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <div className="relative">
                                <img src={boy} alt="" className=""/>
                                <span className="absolute bottom-10 left-10 py-2 px-6 font-medium rounded-full bg-white">Kid's</span>
                            </div>
                        </div>
                    </div>

                </div>

              </div>

              <div className="flex justify-evenly pb-20">
                  <div className="">
                      <h3 className="text-base font-medium">Icons</h3>
                      <a href="" className="mt-6 block">Air Force 1</a>
                      <a href="" className="mt-2 block">Huarache</a>
                      <a href="" className="mt-2 block">Air Max 90</a>
                      <a href="" className="mt-2 block">Air Max 95</a>
                  </div>
                  <div className="">
                      <h3 className="text-base font-medium">Shoes</h3>
                      <a href="" className="mt-6 block">All Shoes</a>
                      <a href="" className="mt-2 block">Custom Shoes</a>
                      <a href="" className="mt-2 block">Jordan Shoes</a>
                      <a href="" className="mt-2 block">Running Shoes</a>
                  </div>
                  <div className="">
                      <h3 className="text-base font-medium">Clothing</h3>
                      <a href="" className="mt-6 block">All Clothing</a>
                      <a href="" className="mt-2 block">Modest Wear</a>
                      <a href="" className="mt-2 block">Hoodies & Pullovers</a>
                      <a href="" className="mt-2 block">Shirts & Tops</a>
                  </div>
                  <div className="">
                      <h3 className="text-base font-medium">Kids</h3>
                      <a href="" className="mt-6 block">Infant & Toddler Shoes</a>
                      <a href="" className="mt-2 block">Kids' Shoes</a>
                      <a href="" className="mt-2 block">Kids' Jordan Shoes</a>
                      <a href="" className="mt-2 block">Kids' Basketball Shoes</a>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
};
