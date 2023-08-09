import { useState, useEffect } from "react";
import "../../layouts/Assets/Responsive.scss";
import White_shoes from "../../layouts/Assets/img/White_shoes.webp";
import { fetchAllShoes } from "../../services/api";
export const MenShoes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllShoes();
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchData();
  }, []);

  return (
    <div className="py-20">
      <div className="grid wide my-4">
        <div className="flex justify-between">
          <div className="side-bar w-52 px-10">
            <h1 className="text-3xl font-semibold font-sans">Men's shoes</h1>
            <ul className="relative pt-10 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-0 after:right-0 after:bottom-0">
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Life Style
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Jordan
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Running
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Basketball
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Football
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Training & Gym
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Skateboarding
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Baseball
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Golf
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Tennis
                </a>
              </li>
              <li className="pb-2 font-semibold pl-2">
                <a href="" className="">
                  Athletics
                </a>
              </li>
              <li className="pb-12 font-semibold pl-2">
                <a href="" className="">
                  Walking
                </a>
              </li>
            </ul>

            <div className="">
              <input type="checkbox" id="slide-1" />
              <label htmlFor="slide-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </label>
              <ul className="relative pt-6 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-2 after:right-0 after:top-12">
                <li className="pb-2 font-semibold pl-2">
                  <p className="">Gender</p>
                </li>
                <div className=""></div>
              </ul>
            </div>
            <div className="">
              <input type="checkbox" id="slide-2" />
              <label htmlFor="slide-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </label>
              <ul className="relative pt-6 after:content-[''] after:border after:border-solid after:border-[#ccc] after:absolute after:left-0 after:right-0 after:bottom-0">
                <li className="pb-2 font-semibold pl-2">
                  <a href="" className="">
                    Life Style
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product grid grid-cols-3 gap-4 max-w-[80%]">
            {data.map((item, index) => {
              return (
                <div className="" key={item.id}>
                  <img src={item.imgSrc} alt="" />
                  <div className="pt-4">
                    <p className="text-red-800 font-semibold">Best Seller</p>
                    <p className="font-semibold">{item.name}</p>
                    <p className="font-light">{item.type}</p>
                    <p className="font-light">2 Colours</p>
                    <p className="font-semibold pt-4">${item.price}</p>
                  </div>
                </div>
              );
            })}
            {/* <div className="">
              <img src={White_shoes} alt="" />
              <div className="pt-4">
                <p className="text-red-800 font-semibold">Best Seller</p>
                <p className="font-semibold">Nike Air Force 1 '07</p>
                <p className="font-light">Men's Shoes</p>
                <p className="font-light">2 Colours</p>
                <p className="font-semibold pt-4">2.920.000đ</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
