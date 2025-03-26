"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    message: z.string().optional(),
    service: z
        .any({
            required_error: "Please select a service to display.",
        })
})

const forms = {
    development: <>
        <SelectItem value="E-commerce">E-commerce</SelectItem>
        <SelectItem value="Landing Page">Landing Page</SelectItem>
        <SelectItem value="Standard Website">Standard Website</SelectItem>
        <SelectItem value="UI-UX">UI-UX</SelectItem>
        <SelectItem value="SEO">SEO</SelectItem>
        <SelectItem value="Other">Other</SelectItem>
    </>,
    socialmedia: <>
        <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
        <SelectItem value="Account Managment">Account Managment</SelectItem>
        <SelectItem value="Content Marketing">Content Marketing</SelectItem>
        <SelectItem value="PR & Collaborations">PR & Collaborations</SelectItem>
        <SelectItem value="Influencer Marketing">Influencer Marketing</SelectItem>
        <SelectItem value="Other">Other</SelectItem>
    </>,
    paidads: <>
        <SelectItem value="Facebook & Instagram Ads">Facebook & Instagram Ads</SelectItem>
        <SelectItem value="Google Ads">Google Ads</SelectItem>
        <SelectItem value="Pay Per Click Ads">Pay Per Click Ads</SelectItem>
        <SelectItem value="Youtube Ads">Youtube Ads</SelectItem>
        <SelectItem value="LinkedIn Ads">LinkedIn Ads</SelectItem>
        <SelectItem value="Email Marketing">Email Marketing</SelectItem>
        <SelectItem value="Other">Other</SelectItem>
    </>,
    design: <>
        <SelectItem value="Logo Design">Logo Design</SelectItem>
        <SelectItem value="Motion Graphics">Motion Graphics</SelectItem>
        <SelectItem value="Videos storytelling redefined">Videos storytelling redefined</SelectItem>
        <SelectItem value="Packaging design">Packaging design</SelectItem>
        <SelectItem value="Ads Production">Ads Production</SelectItem>
        <SelectItem value="Graphics and Identity">Graphics and Identity</SelectItem>
        <SelectItem value="Other">Other</SelectItem>
    </>,
}
export function ContactForm({ routeForm }: { routeForm: string }) {
    const [Loading, setLoading] = useState<boolean>(false)
    const [services, setServices] = useState<any>()
    const router = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setLoading(true)
            const response = await axios.post('/api/query', data)
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
    useEffect(() => {
        switch (routeForm) {
            case 'development':
                setServices(forms.development)
                break;
            case 'socialmedia':
                setServices(forms.socialmedia)
                break;
            case 'paidads':
                setServices(forms.paidads)
                break;
            case 'design':
                setServices(forms.design)
                break;
            default:
                break;
        }
    }, [routeForm])


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} className="bg-transparent  border-[1px] text-white ortext-sm" />
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
                                <Input placeholder="Contact no" {...field} className="bg-transparent  border-[1px] text-white ortext-sm" />
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
                                <Input placeholder="Email Id" {...field} className="bg-transparent  border-[1px] text-white ortext-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-transparent text-gray-400 border-[1px]">
                                        <SelectValue className="text-gray-400" placeholder="Select a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-[#242424] text-white">
                                    {
                                        services
                                    }
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
                                <Textarea placeholder="message..." {...field} className="bg-transparent  border-[1px] text-white text-sm" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full flex justify-center">
                    <div className='p-[2px] "w-full flex justify-center h-fit rounded-full btn-background'>
                        <Button disabled={Loading} type="submit" className='px-7 py-5 rounded-full bg-black'>
                            {Loading && <Loader2 className="text-white mr-2 h-4 w-4 animate-spin" />}
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}