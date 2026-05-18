
import { useForm } from "react-hook-form";
import Container from '../../components/layout/Container'; 
import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Image from '../../components/ui/img'; 
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/button';
import { FcGoogle } from "react-icons/fc"; 
import { FaFacebook } from "react-icons/fa"; 

const LoginSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log("Login Data:", data);
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
        <div className="absolute top-6 right-8">
            <button className="bg-black text-white px-5 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-800 transition-all">
                sign up
            </button>
        </div>

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CustomInput 
              label="Your Email"
              name="email"
              type="email"
              placeholder="info.madhu786@gmail.com"
              register={register}
              errors={errors}
              validation={{ required: "Email is required" }}
            />

            <CustomInput 
              label="Password"
              name="password"
              type="password"
              placeholder="*********"
              register={register}
              errors={errors}
              validation={{ required: "Password is required" }}
            />
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tight">
                <label className="flex items-center gap-1.5 cursor-pointer text-gray-500">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 accent-black" />
                    Remember Me
                </label>
                <a href="#" className="text-gray-400 hover:text-black">Forgot Password?</a>
            </div>

            <CustomButton 
              type="submit"
              text="login"
              className="w-full bg-black text-white p-3.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 hover:bg-gray-900 active:scale-[0.98] transition-all"
            />
          </form>
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative px-3 bg-white text-gray-400 text-[10px] font-bold uppercase tracking-widest">Instant Login</span>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-[11px] font-bold">
                <FcGoogle className="w-4 h-4" /> 
                Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-[11px] font-bold">
                <FaFacebook className="w-4 h-4 text-[#1877F2]" /> 
                Facebook
            </button>
          </div>

          <p className="text-center mt-8 text-[11px] text-gray-400">
            Don't have any account? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Register</span>
          </p>

        </Container>
      </Container>

    </Container>
  );
};

export default LoginSection;