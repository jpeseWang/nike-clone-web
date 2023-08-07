import "./Footer.scss";
import "../Assets/Responsive.scss"
export const Footer = (): JSX.Element => {
  return (
    <div>
    {
      <footer className="bg-[#111]">
          <div className="gridd wide text-white">
              <div className="info-1 flex py-10 ">
                  <div className="pr-36">

                      <p className="pb-3">Find A Store</p>
                      <p className="pb-3">Become A Member</p>
                      <p className="">Send Us Feedback</p>

                  </div>
                  <div className="pr-36">
                      <p className="pb-2">Get Help</p>
                      <p className="font-thin pb-3 text-sm">Order Status</p>
                      <p className="font-thin pb-3 text-sm">Delivery</p>
                      <p className="font-thin pb-3 text-sm">Returns</p>
                      <p className="font-thin pb-3 text-sm">Payment Options</p>
                      <p className="font-thin pb-3 text-sm">Contact Us</p>
                  </div>
                  <div className="pr-36">
                      <p className="pb-2">About Nike</p>
                      <p className="font-thin text-sm pb-3">News</p>
                      <p className="font-thin text-sm pb-3">Careers</p>
                      <p className="font-thin text-sm pb-3">Investors</p>
                      <p className="font-thin text-sm pb-3">Sustainability</p>
                  </div>
              </div>
              <div className="flex justify-between font-thin text-xs pb-5">

                  <div className="flex">

                      <p className="pr-3 font-normal">VietNam</p>
                      <p className="">2023 Nike, Inc. All Rights Reserved</p>

                  </div>


                  <div className="flex">

                      <p className="pr-6">Guides</p>
                      <p className="pr-6">Terms of Sale</p>
                      <p className="pr-6">Terms of Use</p>
                      <p className="pr-6">Nike Privacy Policy</p>

                  </div>

              </div>
          </div>
      </footer>
    }
    </div>
  );
};
