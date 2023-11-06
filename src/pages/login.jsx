import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="nab-bread" aria-label="breadcrumb ">
        <ol className="breadcrumb arr-right">
          <li className="breadcrumb-item">
            <a onClick={() => router.push("/")} className="cursor-pointer">
              مزاادي{" "}
            </a>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            تسجيل الدخول{" "}
          </li>
        </ol>
      </nav>
      <section
        className="page-section mb-0 pt-5"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="offset-md-2 col-md-8 login-section p-4"
          style={{ width: "70%" }}
        >
          <div className="text-center mb-4">
            <img
              src="https://www.mazaady.com/images/icons/sign-in.svg"
              alt="sign-in"
              className="max-sm:h-[50px] max-sm:w-[70px] w-[90px] h-[78px] rounded-[5px] my-2 mx-auto"
            />
            <h1 className="mb-5 mt-2">تسجيل الدخول</h1>
          </div>
          <form method="POST" className="form-horizontal">
            <div className="form-group">
              <div className="col-md-12 text-center">
                {" "}
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  autoFocus
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 text-center">
                {" "}
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="كلمة المرور"
                  minLength="6"
                  autoFocus
                  className="form-control"
                />
              </div>
            </div>
            <div className="text-center pt-4">
              <div>
                <Link href={"/"}>
                  <button
                    type="submit"
                    className="btn btn-primary w-75 about-section hover:bg-red-500"
                  >
                    {" "}
                    تسجيل الدخول
                  </button>
                </Link>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.mazaady.com/password/reset"
                  className="btn text-white mr-2"
                >
                  نسيت كلمة المرور ؟
                </a>
                <a href="#" className="btn text-white mr-2">
                  نسيت بريدك الإلكتروني ؟
                </a>
              </div>
              <div className="mt-3">
                <span className="mr-2 text-white">لست عضوًا في مزاادي ؟</span>
                <a href="#" className="btn" style={{ color: "#f5b613" }}>
                  سجل الآن
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
