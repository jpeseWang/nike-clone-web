import logo_nike from "../../layouts/Assets/img/Logo_NIKE.svg.png"
export const Signup = (): JSX.Element => {
  return (
    <div>
        <div className="flex justify-center pt-12 pb-5 box-border">
            <div className="inline-block mx-auto text-center max-w-[320px]">
              <img src={logo_nike} alt="" className="w-12 mx-auto"/>
              <h1 className="text-lg py-8 font-bold">BECOME A NIKE MEMBER</h1>
              <p className="text-sm font-extralight pb-5">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
              <input type="email" placeholder="Email address" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <input type="password" placeholder="Password" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <input type="text" placeholder="First Name" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <input type="text" placeholder="Last Name" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <input type="date" placeholder="Date of time" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <p className="text-xs font-extralight pb-4">Get a Nike Member Reward every year on your Birthday.</p>
              <input type="text" placeholder="Country" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none border-[#ccc]" />
              <div className="flex justify-between">
                  <input type="button" placeholder="Country" className="w-[48%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none focus:border-black border-[#ccc]" />
                    <input type="button" placeholder="Country" className="w-[48%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none focus:border-black border-[#ccc]" />
              </div>
              <div className="flex">
                  <input type="checkbox" name="" id="" className="w-8"/>
                  <p className="text-xs font-extralight text-left pl-3">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
              </div>
              <p className="text-xs font-extralight py-6">By creating an account, you agree to Nike's <a href="" className="underline">Privacy Policy and Terms of Use.</a></p>
              <button className="bg-[#111] w-[100%] text-white p-2 hover:opacity-80">Join us</button>
              <p className="text-xs font-extralight pt-5">Already a Member? <a href="./login" className="font-normal underline">Sign in</a></p>
            </div>
        </div>
    </div>
  )
};
