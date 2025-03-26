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


const agegroup = [
    { id: "Under 18", label: "Under 18", },
    { id: "18 to 30", label: "18 to 30", },
    { id: "30 to 55", label: "30 to 55", },
]
const targetedlocation = [
    { id: "Tier 1", label: "Tier 1", },
    { id: "Tier 2", label: "Tier 2", },
    { id: "Tier 3", label: "Tier 3", },
]
const educationlevel = [
    { id: "In School", label: "In School", },
    { id: "In College", label: "In College", },
    { id: "Graduated", label: "Graduated", },
]
const languages = [
    { id: "Hindi", label: "Hindi", },
    { id: "English", label: "English", },
]
const taincome = [
    { id: "Lower", label: "Lower", },
    { id: "Lower-Middle", label: "Lower-Middle", },
    { id: "Upper-Middle", label: "Upper-Middle", },
    { id: "High", label: "High", },
]
const homeowner = [
    { id: "Own their house", label: "Own their house", },
    { id: "Rent Privately", label: "Rent Privately", },
    { id: "Rent Social Housing", label: "Rent Social Housing", },
]
const politicalchoice = [
    { id: "BJP", label: "BJP", },
    { id: "Congress", label: "Congress", },
    { id: "Unpolitical", label: "Unpolitical", },
    { id: "We can't Judge", label: "We can't Judge", },
]
const tafavplace = [
    { id: "Coffee Shop", label: "Coffee Shop", },
    { id: "Bowling", label: "Bowling", },
    { id: "Museum", label: "Museum", },
    { id: "Board Games", label: "Board Games", },
    { id: "Dinner Parties", label: "Dinner Parties", },
    { id: "Escape Room", label: "Escape Room", },
    { id: "Explore Cities", label: "Explore Cities", },
    { id: "Go Snowshoeing", label: "Go Snowshoeing", },
    { id: "Have a picnic", label: "Have a picnic", },
    { id: "Nature walks", label: "Nature walks", },
    { id: "Make crafts", label: "Make crafts", },
    { id: "Mall", label: "Mall", },
    { id: "Restaurant", label: "Restaurant", },
    { id: "Beach", label: "Beach", },
]
const tafavgenre = [
    { id: "Anime", label: "Anime", },
    { id: "Comedy", label: "Comedy", },
    { id: "Game show", label: "Game show", },
    { id: "Reality show", label: "Reality show", },
    { id: "Action", label: "Action", },
    { id: "Documentary", label: "Documentary", },
    { id: "Crime", label: "Crime", },
    { id: "Talk show", label: "Talk show", },
    { id: "News", label: "News", },
    { id: "Romance", label: "Romance", },
    { id: "Cooking", label: "Cooking", },
    { id: "Science Fiction", label: "Science Fiction", },
    { id: "Fantasy", label: "Fantasy", },
    { id: "Sports", label: "Sports", },
]
const whatarethey = [
    { id: "Buyer", label: "Buyer", },
    { id: "Influencer", label: "Influencer", },
    { id: "Decision Maker", label: "Decision Maker", },
]


const FormSchema = z.object({
    businessname: z.string().min(3, {
        message: "Name must be at least 2 characters.",
    }),
    websitelink: z.string().min(3, {
        message: "Website name must be at least 3 characters.",
    }),
    aboutbusiness: z.string().min(10, {
        message: "Explain in 10 characters.",
    }),
    agegroup: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a age group",
    }),
    customagegroup: z.string(),
    gender: z.enum(["Male", "Female", "Both"], {
        required_error: "You need to select a gender.",
    }),
    targetedlocation: z.string().min(3, { message: "Please enter city names" }),
    primarytargetedlocation: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select city tier.",
    }),
    educationlevel: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a level.",
    }),
    customeducationlevel: z.string(),
    ethnicity: z.string().min(3, { message: "Please enter details." }),
    languages: z.array(z.string()).default([]).optional(),
    customlanguages: z.string(),
    primaryta: z.string(),
    taincome: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a level.",
    }),
    taprofession: z.string().min(3, {
        message: "Describe Targeted audience profession"
    }),
    taproblems: z.string().min(3, {
        message: "Describe Targeted audience profession"
    }),
    oursolution: z.string().min(3, {
        message: "Describe Targeted audience profession"
    }),
    servicebrief: z.string().min(3, {
        message: "Describe Targeted audience profession"
    }),
    competitiveanalysis: z.string(),
    homeowner: z.array(z.string()).default([]).optional(),
    maritalstatus: z.enum(["Married", "Unmarried", "Both"], {
        required_error: "You need to select a gender.",
    }),
    politicalchoice: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a type.",
    }),
    custompoliticalchoice: z.string(),
    taindustry: z.string().min(3, {
        message: "Describe Targeted audience industry"
    }),
    tadesignation: z.string().min(3, {
        message: "Describe Targeted audience designation"
    }),
    tafavplace: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a type.",
    }),
    customtafavplace: z.string(),
    eventname: z.string(),
    tafavgenre: z.array(z.string()).default([]).optional(),
    customtafavgenre: z.string(),
    bookname: z.string(),
    competitorsname: z.string().min(3, { message: "Required" }),
    thingstheybuy: z.string(),
    peopletheyfollow: z.string(),
    influencertheyfollow: z.string(),
    apptheyused: z.string(),
    primaryfactor: z.string().min(3, { message: "Required" }),
    pagetheyfollow: z.string(),
    whatarethey: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select a type.",
    }),
    customwhatarethey: z.string(),
})

export function BuyerPersonaForm() {

    const [fetching, setFetching] = useState<boolean>(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            businessname: "",
            websitelink: "",
            aboutbusiness: "",
            customagegroup: "",
            gender: "Male",
            targetedlocation: "",
            customeducationlevel: "",
            ethnicity: "",
            customlanguages: "",
            primaryta: "",
            taprofession: "",
            taproblems: "",
            oursolution: "",
            servicebrief: "",
            competitiveanalysis: "",
            maritalstatus: "Married",
            custompoliticalchoice: "",
            taindustry: "",
            tadesignation: "",
            customtafavplace: "",
            eventname: "",
            customtafavgenre: "",
            bookname: "",
            competitorsname: "",
            thingstheybuy: "",
            peopletheyfollow: "",
            influencertheyfollow: "",
            apptheyused: "",
            primaryfactor: "",
            pagetheyfollow: "",
            customwhatarethey: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // console.log(data)
        setFetching(true);
        try {
            const response = await axios.post('/api/buyer-persona-form', data)
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-4/5 lg:w-2/3 space-y-8 text-white capitalize">
                <FormField
                    control={form.control}
                    name="businessname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Business Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="Business Name" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="websitelink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website link *</FormLabel>
                            <FormControl>
                                <Input placeholder="Link" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="aboutbusiness"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>About your business *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="About Your Business"
                                    className="resize-none focus-visible:ring-0 focus-visible:ring-offset-0 border border-white bg-transparent"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="agegroup"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Target Age Group</FormLabel>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {agegroup.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="agegroup"
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
                    <FormField
                        control={form.control}
                        name="customagegroup"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Gender  *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Male
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Female
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Both" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Both
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
                    name="targetedlocation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Target Cities/Countries *</FormLabel>
                            <FormControl>
                                <Input placeholder="city or country name" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="primarytargetedlocation"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Primary Target Cities *</FormLabel>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                {targetedlocation.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="primarytargetedlocation"
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
                                                        {item.label} Cities
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
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="educationlevel"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Target Education Level *</FormLabel>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {educationlevel.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="educationlevel"
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
                    <FormField
                        control={form.control}
                        name="customeducationlevel"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="ethnicity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ethnicity Group</FormLabel>
                            <FormControl>
                                <Input placeholder="eg: Bengali, Sindhi, Muslims..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="languages"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Languages They Speak *</FormLabel>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {languages.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="languages"
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
                    <FormField
                        control={form.control}
                        name="customlanguages"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="primaryta"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Primary target Audience</FormLabel>
                            <FormControl>
                                <Input placeholder="targeted audience" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="taincome"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Target Audience Income class *</FormLabel>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                {taincome.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="taincome"
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
                                                        {item.label} Class
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
                <FormField
                    control={form.control}
                    name="taprofession"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Target Audience Profession (eg:engineers, teachers or lawyers) *</FormLabel>
                            <FormControl>
                                <Input placeholder="audience profession" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="taproblems"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Primary Target Audience Problems *</FormLabel>
                            <FormControl>
                                <Input placeholder="audience problems" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="oursolution"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Our Solution *</FormLabel>
                            <FormControl>
                                <Input placeholder="solution" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="servicebrief"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product/Service Brief *</FormLabel>
                            <FormControl>
                                <Input placeholder="brief" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="competitiveanalysis"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Competetive Analysis</FormLabel>
                            <FormControl>
                                <Input placeholder="analysis" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="homeowner"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Home Ownership *</FormLabel>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                {homeowner.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="homeowner"
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
                <FormField
                    control={form.control}
                    name="maritalstatus"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Target Audience Marital Status  *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Married" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Married
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Unmarried" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Unmarried
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Both" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Both
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="politicalchoice"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Their Political Party Choices *</FormLabel>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {politicalchoice.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="politicalchoice"
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
                    <FormField
                        control={form.control}
                        name="custompoliticalchoice"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="taindustry"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Target Audience Industry (working in) *</FormLabel>
                            <FormControl>
                                <Input placeholder="eg: IT industry, govt, job..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tadesignation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Target Audience Designation *</FormLabel>
                            <FormControl>
                                <Input placeholder="eg: Owner, Manager, HR..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="tafavplace"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Target Audience favourite Hang out place *</FormLabel>
                                </div>
                                <div className="grid grid-cols-2 gap-y-3">
                                    {tafavplace.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="tafavplace"
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
                    <FormField
                        control={form.control}
                        name="customtafavplace"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="eventname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Some events have names that they attend </FormLabel>
                            <FormControl>
                                <Input placeholder="Events Name" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="tafavgenre"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Target Audience favourite genre</FormLabel>
                                </div>
                                <div className="grid grid-cols-2 gap-y-3">
                                    {tafavgenre.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="tafavgenre"
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
                    <FormField
                        control={form.control}
                        name="customtafavgenre"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="bookname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Books name they read</FormLabel>
                            <FormControl>
                                <Input placeholder="book name" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="competitorsname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Competitors names or links *</FormLabel>
                            <FormControl>
                                <Input placeholder="name/link" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="thingstheybuy"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Things They Buy related to your business </FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="peopletheyfollow"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Some Names of People They Follow in life </FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="influencertheyfollow"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Some Influencer Names They Follow on social Media </FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="apptheyused"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Types of App They Use the Most </FormLabel>
                            <FormControl>
                                <Input placeholder="eg: Insta, Fb..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="primaryfactor"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Primary Motivating Factor for them from your business *</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pagetheyfollow"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Types of Page They Follow on Social Media </FormLabel>
                            <FormControl>
                                <Input placeholder="like memes, health care..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="whatarethey"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">What are they *</FormLabel>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    {whatarethey.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="whatarethey"
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
                    <FormField
                        control={form.control}
                        name="customwhatarethey"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Other..." {...field} className="border-x-0 border-t-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-b-2 border-white rounded-none bg-transparent" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
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
