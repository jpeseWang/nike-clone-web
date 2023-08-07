import logo_nike from "../../layouts/Assets/img/Logo_NIKE.svg.png"
export const Login = (): JSX.Element => {
  //TODO: Hyzu lam Login Form
  return (
    <div className="flex justify-center pt-12 pb-5 box-border">
        <div className="inline-block mx-auto text-center max-w-[320px]">
           <img src={logo_nike} alt="" className="w-12 mx-auto"/>
           <h1 className="text-lg py-8 font-bold">YOUR ACCOUNT FOR <br></br> EVERYTHING NIKE</h1>
           <input type="email" placeholder="Email address" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none" />
           <input type="password" placeholder="Password" className="w-[100%] border border-solid border-[#000] px-4 py-2 mb-4 outline-none" />
           <div className="flex ">
              <div className="flex mr-auto">
                  <input type="checkbox" name="" id="" className="justify-start"/>
                  <p className="justify-start text-xs pl-2">Keep me signed in</p>
              </div>
              <a href="" className="text-xs justify-end !decoration-solid underline">Forgotten your password ?</a>
           </div>
           <p className="text-xs font-light py-6">By logging in, you agree to Nike's <a href="" className="decoration-solid underline">Privacy Policy and <br /> Terms of Use.</a></p>
           <button className="bg-[#111] w-[100%] text-white p-2 hover:opacity-80">Sign in</button>
           <p className="pt-5 text-xs font-light">Not a member ? <a href="/signup" className="underline font-normal">Sign up</a></p>
        </div>
    </div>
  )
};
