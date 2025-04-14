import { redirect } from 'next/navigation'
import LoginForm from "@/features/auth/components/login";
import {auth} from "@/auth";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Authentication | Neo Digital", description: "Authentication page",
};
export default async function SignInPage() {
    const session = await auth()

    if (session?.user) {
        redirect('/admin/dashboard')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 p-4">
            <div className="mx-auto max-w-4xl w-full overflow-hidden rounded-2xl shadow-xl bg-white">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 md:w-1/2 hidden md:flex flex-col justify-between">

                    </div>

                    <div className="p-8 md:p-10 md:w-1/2">
                        <div className="px-0 pt-0 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        <LoginForm />

                        <div className="mt-6 text-center text-sm text-gray-500">
                            This is an admin-controlled system. Contact your administrator if you need an account.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}