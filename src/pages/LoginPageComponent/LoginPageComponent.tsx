import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import { useEffect } from "react";

const LoginPageComponent = () => {
  async function signIn() {
    signInWithEmailAndPassword(auth, "chaitanya.varshney@gmail.com", "123456")
      .then((userCredential) => {
        // Signed in
        userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, error);
      });
  }
  useEffect(() => {
    signIn();
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 text-black">
      <div className="min-w-[370px] bg-[#dbd7cf] shadow-buttonShadow rounded-lg p-8 text-center w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4">
        <h2 className="text-3xl font-bold mb-8">Sign In</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="flex text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="flex text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"

              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="text-sm  text-white px-4 py-2 rounded w-full hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPageComponent;
