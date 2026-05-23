import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Heading from "../../components/ui/heading";
import Paragraph from "../../components/ui/paragraph";
import Image from "../../components/ui/img";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/button";

type LoginFormData = {
  email: string;
  password: string;
};

const getErrorMessage = (errorData: any) => {
  if (!errorData) return "Login failed. Please try again.";

  if (typeof errorData === "string") return errorData;

  if (typeof errorData.message === "string") return errorData.message;

  if (typeof errorData.error === "string") return errorData.error;

  if (typeof errorData.error?.message === "string") {
    return errorData.error.message;
  }

  if (typeof errorData.error?.error === "string") {
    return errorData.error.error;
  }

  if (typeof errorData.response?.message === "string") {
    return errorData.response.message;
  }

  return "Invalid email or password.";
};

const LoginSection = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const saveAuthData = (token: string, user?: any) => {
    localStorage.setItem("authToken", token);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      const payload = {
        email: data.email.trim().toLowerCase(),
        password: data.password,
      };

      console.log("Login Payload:", payload);

      const response = await fetch(
        "https://budgetpulse-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      console.log("Login Status:", response.status);
      console.log("Login API Response:", result);

      if (!response.ok) {
        const errorMessage = getErrorMessage(result);
        alert(errorMessage);
        return;
      }

      const token = result?.response?.token;
      const user = result?.response?.user;

      if (!token) {
        alert("Backend se token receive nahi hua.");
        return;
      }

      saveAuthData(token, user);

      alert("Login successful!");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login API Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="flex flex-col md:flex-row w-[80%] max-w-[1000px] h-auto md:h-[600px] mx-auto my-10 bg-white shadow-2xl overflow-hidden border border-gray-100 p-0">
      <Container className="relative hidden md:block md:w-1/2 h-full p-0">
        <Image
          src="/home/heroSection/Gemini_Generated_Image_2v44me2v44me2v44.png"
          alt="Luxury Mansion"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Container>

      <Container className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white relative">
        <Container className="w-full max-w-[360px] mx-auto p-0">
          <Heading
            text="Welcome Back!"
            level="h3"
            className="text-2xl font-bold text-gray-900 mb-1"
          />

          <Paragraph
            text="Login to your account to continue"
            className="text-gray-400 text-xs mb-8"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <CustomInput
              label="Your Email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              register={register}
              errors={errors}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              }}
            />

            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              register={register}
              errors={errors}
              validation={{
                required: "Password is required",
              }}
            />

            <CustomButton
              type="submit"
              text="Login"
              className="w-full bg-black text-white p-3.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-gray-900 active:scale-[0.98] transition-all mt-4"
            />
          </form>

          <p className="text-xs text-center text-gray-500 mt-5">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-bold text-blue-600">
              Signup
            </Link>
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default LoginSection;