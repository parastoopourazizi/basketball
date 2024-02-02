import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/cooki";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const changeHndlerLog = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };
  const submitLoginHandler = (e) => {
    e.preventDefault();
    fetch("https://bushehrbasketball.pythonanywhere.com/auth/login/", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((res) => res.json())
    .then((response) => {setCookie(response.message.data)
    navigate('/')})
    .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div>
          <div className="bg-gray-100 flex flex-col justify-center">
            <form onSubmit={submitLoginHandler} className="max-w-[400px] w-full mx-auto bg-white p-4">
              <h2 className="text-4xl font-bold text-center py-6">brand</h2>
              <div className="flex flex-col py2">
                <label>ایمیل </label>
                <input
                  className="border p-2"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={changeHndlerLog}
                ></input>
              </div>
              <div className="flex flex-col py2">
                <label>رمز عبور </label>
                <input
                  className="border p-2"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={changeHndlerLog}
                ></input>
              </div>
              <button type="submit" className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
                ورود
              </button>
              <div className="flex justify-between">
                <p className="flex items-center">
                  <input className="mr-2" type="checkbox" />
                  مرا بخاطر بسپار
                </p>
                <Link to={"/Register"}>
                  <p>ایجاد حساب کاربری</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
