import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import Heading from "../../components/ui/heading";
import Paragraph from "../../components/ui/paragraph";
import Image from "../../components/ui/img";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/button";

type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const getErrorMessage = (errorData: any) => {
  if (!errorData) return "Signup failed. Please try again.";

  if (typeof errorData === "string") return errorData;

  if (typeof errorData.message === "string") return errorData.message;

  if (typeof errorData.error === "string") return errorData.error;

  if (typeof errorData.error?.message === "string") {
    return errorData.error.message;
  }

  if (typeof errorData.error?.error === "string") {
    return errorData.error.error;
  }

  if (typeof errorData.error?.details === "string") {
    return errorData.error.details;
  }

  if (typeof errorData.response?.message === "string") {
    return errorData.response.message;
  }

  if (Array.isArray(errorData.errors)) {
    return errorData.errors
      .map((err: any) => err?.message || err)
      .join(", ");
  }

  if (Array.isArray(errorData.details)) {
    return errorData.details.join(", ");
  }

  return "Signup failed. Please check your details.";
};

const SignupSection = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const password = watch("password");

  const onSubmit = async (data: SignupFormData) => {
    try {
      setLoading(true);
      setApiError("");

      const payload = {
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email.trim().toLowerCase(),
        password: data.password,
        confirmPassword: data.confirmPassword,
      };

      console.log("Signup Payload:", payload);

      const response = await fetch(
        "https://budgetpulse-backend.onrender.com/api/auth/register",
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

      console.log("Signup Status:", response.status);
      console.log("Signup API Response:", result);
      console.log("Signup Full Response:", JSON.stringify(result, null, 2));

      if (!response.ok) {
        const errorMessage = getErrorMessage(result);

        setApiError(errorMessage);
        alert(errorMessage);
        return;
      }

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Signup API Error:", error);
      setApiError("Something went wrong. Please try again.");
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="flex flex-col md:flex-row w-[90%] max-w-[1000px] h-auto md:h-[700px] mx-auto my-10 bg-white shadow-2xl overflow-hidden border border-gray-100 p-0">
      <Container className="relative hidden md:block md:w-1/2 h-full p-0">
        <Image
          src="/home/heroSection/Gemini_Generated_Image_2da9ch2da9ch2da9.png"
          alt="Luxury Mansion"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Container>

      <Container className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white relative overflow-y-auto">
        <Container className="w-full max-w-[360px] mx-auto p-0">
          <Heading
            text="Create Account"
            level="h3"
            className="text-2xl font-bold text-gray-900 mb-1"
          />

          <Paragraph
            text="Enter your details to register your account"
            className="text-gray-400 text-xs mb-5"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex gap-2">
              <CustomInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
                register={register}
                errors={errors}
                validation={{
                  required: "First name is required",
                }}
              />

              <CustomInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
                register={register}
                errors={errors}
                validation={{
                  required: "Last name is required",
                }}
              />
            </div>

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

            <div className="flex gap-2">
              <CustomInput
                label="Country"
                name="country"
                type="text"
                placeholder="Pakistan"
                register={register}
                errors={errors}
                validation={{
                  required: "Country is required",
                }}
              />

              <CustomInput
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+92 300..."
                register={register}
                errors={errors}
                validation={{
                  required: "Phone is required",
                }}
              />
            </div>

            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              register={register}
              errors={errors}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
            />

            <CustomInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="********"
              register={register}
              errors={errors}
              validation={{
                required: "Confirm password is required",
                validate: (value: string) =>
                  value === password || "Passwords do not match",
              }}
            />

            {apiError && (
              <p className="text-xs text-red-600 font-medium text-center">
                {apiError}
              </p>
            )}

            <CustomButton
              type="submit"
              text={loading ? "Creating Account..." : "Create Account"}
              disabled={loading}
              className="w-full bg-black text-white p-3.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-gray-900 active:scale-[0.95] transition-all mt-3 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </form>

          <p className="text-xs text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default SignupSection;