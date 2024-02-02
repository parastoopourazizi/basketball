import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bushehrbasketball.pythonanywhere.com/auth/register/", {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      const data = await res.json()
      data.success && navigate('/Login')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
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
            <form className="max-w-[400px] w-full mx-auto bg-white p-4">
              <h2 className="text-4xl font-bold text-center py-6">brand</h2>
              <div className="flex flex-col py2">
                <label>نام</label>
                <input
                  className="border p-2"
                  type="text"
                  name="first_name"
                  value={registerData.first_name}
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="flex flex-col py2">
                <label>نام خانوادگی</label>
                <input
                  className="border p-2"
                  type="text"
                  name="last_name"
                  value={registerData.last_name}
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="flex flex-col py2">
                <label>ایمیل</label>
                <input
                  className="border p-2"
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="flex flex-col py2">
                <label>رمز عبور </label>
                <input
                  className="border p-2"
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="flex flex-col py2">
                <label>تکرار رمز عبور</label>
                <input
                  className="border p-2"
                  type="password"
                  name="confirm_password"
                  value={registerData.confirm_password}
                  onChange={changeHandler}
                ></input>
              </div>
              <button
                className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={submitHandler}
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
