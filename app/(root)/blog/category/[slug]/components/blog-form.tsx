"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function BlogForm() {
    const [Loading, setLoading] = useState<boolean>(false)
    const [services, setServices] = useState<any>()
    const [submit, setSubmit] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        try {
            setLoading(true)
            const response = await axios.post('/api/blogsubscription', values)
            toast({
                title: response.data,
            })
            setLoading(false);
            form.reset()
            toast({
                title: 'Subscribed Successfully 👍👍'
            })
            setSubmit(true)
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'destructive',
            })
            setLoading(false);
        }
        form.reset()
    }
    if (submit) {
        return (
            <div className="w-full h-full border-2 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">You have subscribed to our blog 🎉🎉</p>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} className="bg-transparent focus-visible:border-green-700 border-b-2 text-white text-lg" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Contact no" {...field} className="bg-transparent focus-visible:border-green-700 border-b-2 text-white text-lg" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email Id" {...field} className="bg-transparent focus-visible:border-green-700 border-b-2 text-white text-lg" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center">
                    <Button disabled={Loading} type="submit" className='px-10 py-5 text-lg text-black sm:text-base lg:text-xl rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500'>
                        {Loading && <Loader2 className="text-white mr-2 h-4 w-4 animate-spin" />}
                        Subscribe Now
                    </Button>
                </div>
            </form>
        </Form>
    )
}
