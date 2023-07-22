import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gradient-to-r from-red-400 via-purple-300 to-blue-200
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="64"
          width="64"
          className="mx-auto w-auto"
          src="/images/new/logo2.png"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-yellow-200
          "
          >
            Welcome to the Connect !<br/>
            <p className="mt-4 
            text-center 
            text-2xl 
            font-bold 
            tracking-tight 
            text-gray-900
          ">Sign in to your account</p>
            
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;