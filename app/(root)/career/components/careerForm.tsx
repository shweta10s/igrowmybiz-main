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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
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
    select: z.string(),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function CareerForm() {
    const [Loading, setLoading] = useState<boolean>(false)
    const router = useRouter()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            select: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true)
            const response = await axios.post('/api/career', values)
            toast({
                title: response.data,
            })
            setLoading(false);
            form.reset()
            router.replace('/thankyou')
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'destructive',
            })
            setLoading(false);
        }
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
                                <Input placeholder="Your Name" {...field} className="bg-transparent focus-visible:border-mainColor border-b-2 text-white text-lg" />
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
                                <Input placeholder="Contact no" {...field} className="bg-transparent focus-visible:border-mainColor border-b-2 text-white text-lg" />
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
                                <Input placeholder="Email Id" {...field} className="bg-transparent focus-visible:border-mainColor border-b-2 text-white text-lg" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="select"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-transparent focus-visible:border-mainColor border-b-2 text-white text-lg">
                                        <SelectValue placeholder="Select Job Profile" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="text-base text-gray-600 font-medium relative z-[99] h-[300px] w-[260px] overflow-x-hidden overflow-y-scroll">
                                    <SelectItem value="Content Writer">Content Writer</SelectItem>
                                    <SelectItem value="Graphic Designer">Graphic Designer</SelectItem>
                                    <SelectItem value="Account Manager">Account Manager</SelectItem>
                                    <SelectItem value="Business Development">Business Development</SelectItem>
                                    <SelectItem value="Paid Media Expert">Paid Media Expert</SelectItem>
                                    <SelectItem value="SEO Specialist">SEO Specialist</SelectItem>
                                    <SelectItem value="Video Editor">Video Editor</SelectItem>
                                    <SelectItem value="Brand Strategist">Brand Strategist</SelectItem>
                                    <SelectItem value="Copywriter">Copywriter</SelectItem>
                                    <SelectItem value="Creative Head">Creative Head</SelectItem>
                                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                                    <SelectItem value="Front-end Developer">Front-end Developer</SelectItem>
                                    <SelectItem value="Back-end Developer">Back-end Developer</SelectItem>
                                    <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                                    <SelectItem value="Sales">Sales</SelectItem>
                                    <SelectItem value="Internship">Internship</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Why should we hire you..." {...field} className="bg-transparent focus-visible:border-mainColor border-b-2 text-white text-lg" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center">
                    <Button disabled={Loading} type="submit" className='px-6 py-2 text-lg text-white sm:text-base rounded-full bg-black w-fit font-semibold hover:bg-mainColor hover:text-black transition-all duration-500'>
                        {Loading && <Loader2 className="text-black mr-2 h-4 w-4 animate-spin" />}
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    )
}
