import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Login Successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="divider text-white ">or</div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleGoogleLogin}
          className="flex gap-2 items-center bg-white w-full justify-center py-3 rounded-3xl hover:bg-slate-300 hover:shadow-lg font-medium"
        >
          Sign in with
          <img
            className="w-6"
            src="https://i.ibb.co/HX7Z8g9/google-logo-png-suite-everything-you-need-know-about-google-newest-0-removebg-preview.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
