import Input from "@/components/Input"; // This is the import statement and you can also use ../ />
import { useState, useCallback } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const auth = () => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [variant, setvariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setvariant((currentVariant) => currentVariant === "login" ? "register" : "login")
    }, []);

    //logic for register
    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                name,
                email,
                password
            });

        } catch (error) {
            console.log(error);
        }

    }, [email, name, password]);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false, // the user will not be redirected to a different page after successful authentication
                callbackUrl: '/'
            });


        } catch (error) {
            console.log(error);
        }

    }, [email, password]);
    return (

        <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center">
            <div className="bg-black w-full h-full lg:bg-opacity-50" /*lg means large screen deafult is full black but on large screen its opacity is 50*/>
                <nav className="px-12 py-5 ">
                    <img src="/images/logo.png" alt="logo" className="h-12 " />

                </nav>
                <div className="flex justify-center " >
                    <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === "login" ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && (
                                <Input
                                    id="Name"
                                    label="Username"
                                    onChange={(ev: any) => { setname(ev.target.value) }}
                                    value={name} />
                            )}
                            <Input
                                id="email"
                                label="email"
                                onChange={(ev: any) => { setemail(ev.target.value) }}
                                type="email"
                                value={email} />
                            <Input
                                id="password"
                                label="password"
                                onChange={(ev: any) => { setpassword(ev.target.value) }}
                                type="password"
                                value={password} />

                        </div>

                        <button onClick={variant ==='login'? login : register} className="bg-red-600 text-white py-3 mt-4 rounded-md font-semibold w-full transition hover:bg-red-700">
                            {variant === "login" ? "login" : "Sign Up"}

                        </button>

                        <p className="text-neutral-500 mt-12">
                            {variant === "login" ? "New to Netflix?" : "Already have an account?"}
                            <span onClick={toggleVariant} className="text-white ml-1 font-semibold hover:underline-effect cursor-pointer">
                                {variant === "login" ? "Create an account" : "Sign In"}
                            </span>

                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default auth;