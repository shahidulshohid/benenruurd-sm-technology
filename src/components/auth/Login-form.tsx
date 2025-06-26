"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"
import { Separator } from "@/components/ui/separator"
import AuthImage from './AuthImage'

type Inputs = {
    email: string;
    password: string;
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* message icon  */}
            <div>
                <Image src="/messageImg.png" width={40} height={40} alt='Message image' className='m-6'/>
            </div>
            {/* Left: Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-left">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
                        <p className="text-sm text-gray-600">
                            Welcome back! Log in with your email and <br/> password to continue.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* email input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                            {/* password input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                        {/* forgot password  */}
                        <div className='text-center'>
                            <Link href="#" className='text-blue-500'>Forgot your password?</Link>
                        </div>
                        {/* separator  */}
                        <div>
                            <Separator />
                        </div>
                        {/* redirect signup page  */}
                        <div className='text-center'>
                            <span>Don’t have an account?</span> <Link href="#" className='text-blue-500'>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
            {/* Right: Image */}
                <AuthImage/>
        </div>
    )
}

export default LoginForm
