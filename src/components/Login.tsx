import React from "react";

export default function Login() {
  return (
    <div className="flex w-[100%] h-[100vh] justify-center items-center">
      <div className="w-[480px] h-[533ppx]">
        <img
          className="w-[500px] h-[533px]"
          src="https://i.pinimg.com/736x/37/55/94/37559418528e9422c5b9af0b1037a176.jpg"
          alt=""
        />
      </div>
      <div>
        <form
          className="p-8 border-t-4 border-r-4 border-b-4 border-slate-500 w-[400px]"
          action=""
        >
          <h3 className="text-4xl">Login</h3> <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            className="mt-1 px-3 py-2 focus:border-sky-500 focus:ring-sky-500  focus:ring-1 block  border border-green-600 rounded-md w-[100%]"
            placeholder="Nhập email"
          />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input
            type="password"
            className="mt-1 px-3 py-2 focus:border-sky-500 focus:ring-sky-500  focus:ring-1 block  border border-green-600 rounded-md w-[100%]"
            placeholder="Nhập mật khẩu"
          />
          <div className="px-4 py-4">
            <a className="text-end w-[100%] inline-block font-mono" href="">
              Forgot password ?
            </a>
          </div>
          <div className="mb-[50px]">
            <a href="Admin.tsx">
              <button className="w-[100%] bg-blue-500 text-white rounded-md h-[40px]">
                Login
              </button>
            </a>
          </div>
          <div className="flex items-center justify-between">
            <hr className="w-[45%] border-green-600" />
            <p>Or</p>
            <hr className="w-[45%]  border-red-600" />
          </div>
          <br />
          <div>
            <button className="w-[100%] border border-slate-800 rounded-md h-[40px]">
              Register now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
