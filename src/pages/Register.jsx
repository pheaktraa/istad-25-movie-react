import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { login } from "../features/auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Register() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {isAuthenticated} = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            // route to '/' home
            navigate('/')
        }
    }, [navigate, isAuthenticated])

    // create formik for handle from data 
    // change , submit , blur
    const formik = useFormik({
        initialValues: {
            // these name have to be same as id and name down below in code section
            email: '',
            password: '',
        },

        //yup
        validationSchema: Yup.object({
            // firstName: Yup.string()
            //   .max(15, 'Must be 15 characters or less')
            //   .required('Required'),
            password: Yup.string()
                .max(15, 'Must be 20 characters or less')
                .min(8, 'Must be 8 character up')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        // onSubmit: values => {
        //     alert(JSON.stringify(values, null, 2));
        // },

        onSubmit: (value) => {
            console.log('value from formik', value);
            dispatch(login(value))
        },

        // doesn't work for onChange
        // onChange: (value: String) => {
        //     console.log('value from formik', value);
        // }
    });





    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
                        {/* <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p> */}
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        // onsubmit default
                        // onSubmit={(e) => e.preventDefault()} 
                        // our onsubmit 
                        onSubmit={formik.handleSubmit}
                        className="space-y-5"

                    >
                        {/* <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div> */}
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                id="email"
                                name="email"
                                type="email"
                                // required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                id="password"
                                name="password"
                                type="password"
                                // required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <button
                            // have to add type submit so data from form go
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-5">
                        <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}