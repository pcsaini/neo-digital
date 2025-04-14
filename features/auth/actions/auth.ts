'use server'

import {signIn, signOut} from '@/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import {LoginSchema} from "@/features/auth/schema/login";


type LoginFormState = {
    errors?: {
        email?: string[]
        password?: string[]
        _form?: string[]
    }
    success?: boolean
}

export async function authenticate(
    formData: FormData,
): Promise<LoginFormState> {
    const validatedFields = LoginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        }
    }

    const { email, password } = validatedFields.data

    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        errors: {
                            _form: ['Invalid email or password.'],
                        },
                        success: false,
                    }
                default:
                    return {
                        errors: {
                            _form: ['An error occurred during login. Please try again.'],
                        },
                        success: false,
                    }
            }
        }
        return {
            errors: {
                _form: ['An unexpected error occurred. Please try again.'],
            },
            success: false,
        }
    }

    redirect('/admin/dashboard')
}

export const logout = async () => {
    await signOut();
    redirect('/admin/auth/signin');
};