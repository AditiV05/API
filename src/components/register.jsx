import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const password = watch("password", "");

  return (
    <div className="wrapper">
      <div className="containerr">
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitSuccessful && (
            <p className="successful">Successfully submitted the form!</p>
          )}

          <h1>Sign Up!</h1>

          <div className="input-box">
            <input
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "Name should be atleast 2 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Name should not be more than 30 characters",
                },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <label>First Name</label>
          </div>

          <div className="input-box">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <label>Email</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 10,
                  message: "Password must be at least 10 characters",
                },
                validate: (value) => {
                  return (
                    /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/.test(
                      value
                    ) ||
                    "Password must contain at least one special character, one lowercase letter, one uppercase letter, one number, and be at least 10 characters long"
                  );
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <label>Password</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              {...register("repeatPassword", {
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
            <label>Repeat Password</label>
          </div>

          <button
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              !password ||
              !watch("repeatPassword")
            }
          >
            Submit
          </button>
        </form>
        <img src="drawkit.png" alt="" className="drawkit" />

        <Link to="/" className="circle">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Register;
