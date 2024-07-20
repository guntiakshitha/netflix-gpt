import { useState } from "react";
import Header from "./Header";
function Login()
{
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignIn=() =>
    {
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
             <Header />
                <div className="absolute">
             <img  src= "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bgImage"/>
             </div>
             <div className="flex-grow flex items-center justify-center">
             <form className=" w-3/12 relative p-10 bg-black bg-opacity-75 text-white mx-auto mt-32 rounded-lg">
             <h1 className="font bold text-3xl p-2 m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
             {!isSignInForm && <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-2 m-2 w-full bg-gray-800 border border-gray-600 rounded"
                />}
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-2 m-2 w-full bg-gray-800 border border-gray-600 rounded"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-2 m-2 w-full bg-gray-800 border border-gray-600 rounded"
                />
                <button 
                    type="submit" 
                    className="p-2 m-2 w-full bg-red-600 hover:bg-red-700 rounded"
                >
                    {isSignInForm? "Sign In": "Sign Up"}
                </button>
                <p className="p-1 m-2 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign up now" : "Already a member, Sign In now"}</p>
            </form>
            </div>
    </div>
    );
}
 export default Login;