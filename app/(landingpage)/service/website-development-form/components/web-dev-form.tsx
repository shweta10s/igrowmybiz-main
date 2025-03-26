"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import axios from "axios"
import { Loader, Loader2 } from "lucide-react"


const items = [
    {
        id: "Service Based",
        label: "Service Based",
    },
    {
        id: "Product Based",
        label: "Product Based",
    },
]


const items1 = [
    {
        id: "E-commerce Product Setup",
        label: "E-commerce Product Setup",
    },
    {
        id: "Payment Gateway Setup",
        label: "Payment Gateway Setup",
    },
    {
        id: "Contact form",
        label: "Contact form",
    },
    {
        id: "Gallery page",
        label: "Gallery page",
    },
    {
        id: "Testimonial section",
        label: "Testimonial section",
    },
    {
        id: "WhatsApp Contact Button Integration",
        label: "WhatsApp Contact Button Integration",
    },
] as const


const FormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 2 characters.",
    }),
    websitename: z.string().min(3, {
        message: "Website name must be at least 3 characters.",
    }),
    hosting: z.enum(["yes", "no",], {
        required_error: "You need to select a type.",
    }),
    webtype: z.enum(["Buisness Website", "Blog Website", "E-commerce", "Portfolio"], {
        required_error: "You need to select a type.",
    }),
    tagline: z.string(),
    phone: z.string(),
    buisnessexplain: z.string().min(30, {
        message: "Explain in 30 characters.",
    }),
    buisnesstype: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a business type",
    }),
    functionality: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a business type",
    }),
    budget: z.enum(["500 to 1k", "1k to 5k", "More than 5k"], {
        required_error: "You need to select your budget.",
    }),
    inspiration: z.string().min(3, {
        message: "Website name must be at least 3 characters.",
    }),
    deadline: z.string().min(3, {
        message: "Website name must be at least 3 characters.",
    }),
})

export function WebDevForm() {

    const [fetching, setFetching] = useState<boolean>(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            websitename: "",
            tagline: "",
            phone: "",
            buisnessexplain: "",
            buisnesstype: [],
            functionality: [],
            inspiration: "",
            deadline: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // console.log(data)
        try {
            setFetching(true);
            const response = await axios.post('/api/web-dev-form', data)
            setFetching(false)
            form.reset();
            toast({
                title: "Successfull 👍👍",
                description: response.data,
            })
        } catch (error) {
            setFetching(false);
            toast({
                title: "Oops 😔😔",
                description: 'Something went wrong',
                variant: "destructive"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-4/5 lg:w-2/3 space-y-8 text-white">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="your name" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="websitename"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Domain or Website Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hosting"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Do you have Website hosting *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No, I need to purchase
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="webtype"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Website type *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Buisness Website" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Buisness Website
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Blog Website" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Blog Website
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="E-commerce" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            E-commerce
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Portfolio" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Portfolio
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tagline"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tagline (if you have)</FormLabel>
                            <FormControl>
                                <Input placeholder="tagline" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="number" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="buisnessexplain"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Explain your business in few words *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="explain you business"
                                    className="resize-none focus-visible:ring-0 focus-visible:ring-offset-0 border border-white bg-transparent"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="buisnesstype"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Business Type</FormLabel>
                            </div>
                            <div className="flex flex-col space-y-4 space-x-0">
                                {items.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="buisnesstype"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={Array.isArray(field.value) && field.value.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                if (Array.isArray(field.value)) {
                                                                    field.onChange(
                                                                        checked
                                                                            ? [...field.value, item.id]
                                                                            : field.value.filter((value) => value !== item.id)
                                                                    );
                                                                } else {
                                                                    field.onChange(checked ? [item.id] : []);
                                                                }
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* <FormField
                    control={form.control}
                    name="functionality"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Website Functionality</FormLabel>
                            </div>
                            <div className="flex flex-col space-y-4 space-x-0">
                                {items1.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="functionality"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={Array.isArray(field.value) && field.value.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                if (Array.isArray(field.value)) {
                                                                    field.onChange(
                                                                        checked
                                                                            ? [...field.value, item.id]
                                                                            : field.value.filter((value) => value !== item.id)
                                                                    );
                                                                } else {
                                                                    field.onChange(checked ? [item.id] : []);
                                                                }
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}
                <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Budget in dollar *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="500 to 1k" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            500 to 1k
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="1k to 5k" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            1k to 5k
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="More than 5k" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            More than 5k
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="inspiration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Please write name or link if you have any inspirational competitive website *</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Any deadline for the development and launch of your website *</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end w-full py-6">
                    <Button disabled={fetching} type="submit" className="bg-white w-fit text-sm px-6 text-gray-900 font-semibold hover:text-white hover:bg-secondaryBGColor">
                        {fetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    )
}
