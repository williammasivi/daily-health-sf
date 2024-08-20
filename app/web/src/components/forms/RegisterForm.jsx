import { Link, useNavigate } from 'react-router-dom';
import registerImage from '/signin-image.webp';
import { FaUserTag, FaMailBulk, FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import mainConfig from '../../config/main.config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    localStorage.clear();
    sessionStorage.clear();
    try {
      const { email, name, password } = data;
      if (!email || !name || !password) {
        toast.error("All fields are required!");
      }
      const resp = await axios.post(`${mainConfig.BACKEND_URL}/api/users`, { userEmail: email, userPassword: password, userName: name });
      if (resp.status == '201') {
        localStorage.setItem('token', await resp.data.data.accessToken);
        localStorage.setItem('id', await resp.data.data.userId);
        sessionStorage.setItem('token', await resp.data.data.accessToken);
        sessionStorage.setItem('id', await resp.data.data.userId);
        toast.success("Account created sucessfully!");
        setTimeout(() => {
          navigate('/');
        }, 3000)
      } else {
        toast.info("Unable to create an account!");
        return;
      }
    } catch (error) {
      toast.error("Failed to create a user!");
    }
  }
  return (
    <div className="bg-white md:h-screen">
      <div class="grid md:grid-cols-2 items-center gap-8 h-full">
        <div class="max-md:order-1 p-4 bg-gray-50 h-full">
          <img src={registerImage} class="lg:max-w-[90%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div class="flex items-center p-6 h-full w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="max-w-lg w-full mx-auto">
            <div class="mb-12">
              <h3 class="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
            </div>

            <div>
              <label class="text-gray-800 text-xs block mb-2">Full Name</label>
              <div class="relative flex items-center">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name" />
                <FaUserTag size={24} fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" />
              </div>
            </div>
            <div class="mt-6">
              <label class="text-gray-800 text-xs block mb-2">Email</label>
              <div class="relative flex items-center">
                <input
                  {...register('email', { required: true })}
                  type="text"
                  class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <FaMailBulk
                  size={24}
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                />
              </div>
            </div>
            <div class="mt-6">
              <label class="text-gray-800 text-xs block mb-2">Password</label>
              <div class="relative flex items-center">
                <input
                  {...register('password', { required: true })}
                  type="password"
                  class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <FaEye
                  size={24}
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                />
              </div>
            </div>
            <div class="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
              <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                I accept the <a href="javascript:void(0);" class="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div class="mt-12">
              <button type="submit" class="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Create an account
              </button>
              <p class="text-sm mt-6 text-gray-800">Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}