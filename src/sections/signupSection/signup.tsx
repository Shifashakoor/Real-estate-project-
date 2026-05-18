import React from 'react';
import { useForm } from "react-hook-form";
import Container from '../../components/layout/Container'; 
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img'; 
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/button';

const SignupSection = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  const onSubmit = (data: any) => {
    console.log("Final Sign Up Data:", data);
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
      <Container className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-white relative overflow-y-auto no-scrollbar">
        
        <div className="absolute top-8 right-10">
            <span className="text-xs text-gray-400 font-semibold cursor-pointer hover:text-black transition-all">
                Login
            </span>
        </div>

        <Container className="w-full max-w-[360px] mx-auto">
          <Heading 
            text="Create Account"
            level="h3" 
            className="text-2xl font-bold text-gray-900 mb-1" 
          />
          <Paragraph 
            text="Enter your details to register your account"
            className="text-gray-400 text-xs mb-8" 
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="flex gap-3">
              <CustomInput 
                label="First Name"
                name="firstName"
                type="text"
                placeholder="John"
                register={register}
                errors={errors}
                validation={{ required: "Required" }}
              />
              <CustomInput 
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
                register={register}
                errors={errors}
                validation={{ required: "Required" }}
              />
            </div>

            <CustomInput 
              label="Your Email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              register={register}
              errors={errors}
              validation={{ required: "Email is required" }}
            />

            <div className="flex gap-3">
              <CustomInput 
                label="Country"
                name="country"
                type="text"
                placeholder="Pakistan"
                register={register}
                errors={errors}
                validation={{ required: "Required" }}
              />
              <CustomInput 
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+92 300..."
                register={register}
                errors={errors}
                validation={{ required: "Required" }}
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
                required: "Required",
                minLength: { value: 8, message: "Min 8 characters" }
              }}
            />

            <CustomButton 
              type="submit"
              text="Create Account"
              className="w-full bg-black text-white p-3.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-gray-900 active:scale-[0.95] transition-all mt-4"
            />
          </form>

          <p className="text-center mt-8 text-[11px] text-gray-400">
            Already have an account? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Log in here</span>
          </p>

        </Container>
      </Container>

    </Container>
  );
};

export default SignupSection;