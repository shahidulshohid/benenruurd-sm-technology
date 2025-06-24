"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    password: string;
    resetPassword: string;
}

function ResetPasswordForm() {
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
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Enter your new <br/> password</h1>
                        <p className="text-sm text-gray-600">
                            Please enter your new password below to continue.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                            {/* reset password input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Reset password <span className='text-red-500'>*</span>
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
                            Change password
                        </button>
                    </form>
                </div>
            </div>

            {/* Right: Image */}
            <div className="flex flex-1 items-center justify-center bg-[#EEF8FF] px-8">
                <Image
                    src="/authenticationImg.png"
                    width={400}
                    height={400}
                    alt="Login Illustration"
                    className="object-contain w-full h-[900px]"
                />
            </div>
        </div>
    )
}

export default ResetPasswordForm
