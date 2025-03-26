"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Check, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import parsePhoneNumber from "libphonenumber-js";

const options = [
  "Website Development",
  "Complete Digital Marketing",
  "Social Media Marketing",
  "Content Marketing",
  "PPC Ads",
  "Email Marketing",
  "SEO",
  "Design Services",
  "Others",
];

const countries = [
  {
    value: "+91",
    label: "+91 ",
    name: "India",
    flag: "https://flagsapi.com/IN/flat/24.png",
  },
  {
    value: "+1",
    label: "+1",
    name: "United States of America",
    flag: "https://flagsapi.com/US/flat/24.png",
  },
  {
    value: "+1",
    label: "+1",
    name: "Canada",
    flag: "https://flagsapi.com/US/flat/24.png",
  },
  {
    value: "+971",
    label: "+971",
    name: "United Arab Emirates",
    flag: "https://flagsapi.com/BE/flat/24.png",
  },
  {
    value: "+44",
    label: "+44",
    name: "United Kingdom",
    flag: "https://flagsapi.com/BE/flat/24.png",
  },
  {
    value: "+49",
    label: "+49",
    name: "Germany",
    flag: "https://flagsapi.com/BE/flat/24.png",
  },
];

export default function TypeFormComponent() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [CurrentForm, setCurrentForm] = useState<number>(0);
  const [fullName, setfullName] = useState<string>("");
  const [emailAddress, setemailAddress] = useState<string>("");
  const [compnayName, setcompnayName] = useState<string>("");
  const [website, setwebsite] = useState<string>("");
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [selectedOptions, setselectedOptions] = useState<string[]>([]);
  const [Submited, setSubmited] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const handleOptionToggle = (value: string) => {
    if (selectedOptions.includes(value)) {
      // Remove the option if it's already selected
      setselectedOptions((prev) => prev.filter((item) => item !== value));
    } else {
      // Add the option if it's not selected
      setselectedOptions((prev) => [...prev, value]);
    }
  };

  const handleSubmit: any = async () => {
    const values = {
      name: fullName,
      options: selectedOptions,
      email: emailAddress,
      company: compnayName,
      website: website,
      phone: phone,
    };
    try {
      setFetching(true);
      const response = await axios.post("/api/typeform", values);
      setFetching(false);
      setSubmited(true);
      toast({
        title: "Successfull 👍👍",
        description: response.data,
      });
      router.push("/thankyou");
    } catch (error) {
      setFetching(false);
      toast({
        title: "Oops 😔😔",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string) => {
    try {
      const phoneNumberObj = parsePhoneNumber(phoneNumber);
      return phoneNumberObj && phoneNumberObj.isValid();
    } catch (error) {
      return false;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondaryBGColor overflow-hidden md:w-3/5 w-4/5 h-[40rem] lg:h-[30rem] rounded-lg border-t-4 border-textColor flex items-center justify-center relative"
    >
      <div
        className="relative transition-all duration-500 ease-in-out delay-75 w-full h-full lg:pl-9 "
        style={{ transform: `translateY(-${CurrentForm * 100}%)` }}
      >
        <div className="flex flex-col gap-4 w-full h-full items-start justify-center pl-3">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`What's your name?`}</h2>
          <input
            placeholder="Type your name here."
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            required
            type="text"
            name="name"
            className="bg-transparent outline-none border-b-2 md:border-b-4 h-14 text-textColor font-medium text-base md:text-lg w-4/5 caret-textColor"
            tabIndex={-1}
          />
          <div
            onClick={() => {
              fullName.trim() !== "" && setCurrentForm(1);
            }}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none",
              !(fullName.trim() !== "")
                ? "cursor-not-allowed bg-white/10"
                : "cursor-pointer bg-secondaryColor"
            )}
          >
            OK
            <Check className="ml-2 h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-full items-start justify-center px-3 lg:px-0">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`${fullName}, which of the option best represents your concern ?This question is required.*`}</h2>
          <div className="space-y-2 grid grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionToggle(option)}
                className={`h-full cursor-pointer border border-white text-white rounded-md p-2 text-sm flex items-center justify-between break-normal gap-2 font-semibold ${
                  selectedOptions.includes(option)
                    ? "bg-secondaryColor text-white flick-animation"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  value={option}
                  required
                  checked={selectedOptions.includes(option)}
                  onChange={() => {}}
                  className="form-checkbox opacity-0 absolute"
                  tabIndex={-1}
                />
                <span className="">{option}</span>
                <span
                  className={`${
                    selectedOptions.includes(option)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
          <div
            onClick={() => {
              selectedOptions.length > 0 && setCurrentForm(2);
            }}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none",
              !(selectedOptions.length > 0)
                ? "cursor-not-allowed bg-white/10"
                : "cursor-pointer bg-secondaryColor"
            )}
          >
            OK
            <Check className="ml-2 h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-full items-start justify-center pl-3">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`Great! Now please let us know your EMAIL to contact you.*`}</h2>
          <input
            placeholder="example@email.com"
            value={emailAddress}
            onChange={(e) => setemailAddress(e.target.value)}
            type="email"
            name="email"
            className="bg-transparent outline-none border-b-2 md:border-b-4 h-14 text-textColor font-medium text-base md:text-lg w-4/5 caret-textColor"
            tabIndex={-1}
          />
          <div
            onClick={() => {
              isValidEmail(emailAddress.trim()) && setCurrentForm(3);
            }}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none",
              !isValidEmail(emailAddress.trim())
                ? "cursor-not-allowed bg-white/10"
                : "cursor-pointer bg-secondaryColor"
            )}
          >
            OK
            <Check className="ml-2 h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-full items-start justify-center pl-3">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`What is your Company/Brand Name ?`}</h2>
          <input
            placeholder="type your answer here."
            value={compnayName}
            onChange={(e) => setcompnayName(e.target.value)}
            type="text"
            name="company"
            required={false}
            className="bg-transparent outline-none border-b-2 md:border-b-4 h-14 text-textColor font-medium text-base md:text-lg w-4/5 caret-textColor"
            tabIndex={-1}
          />
          <div
            onClick={() => compnayName.trim() !== "" && setCurrentForm(4)}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none",
              !(compnayName.trim() !== "")
                ? "cursor-not-allowed bg-white/10"
                : "cursor-pointer bg-secondaryColor"
            )}
          >
            OK
            <Check className="ml-2 h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full h-full items-start justify-center pl-3">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`Your Website ?`}</h2>
          <input
            placeholder="type your answer here."
            value={website}
            required={false}
            onChange={(e) => setwebsite(e.target.value)}
            type="text"
            name="website"
            className="bg-transparent outline-none border-b-2 md:border-b-4 h-14 text-textColor font-medium text-base md:text-lg w-4/5 caret-textColor"
            tabIndex={-1}
          />
          <div
            onClick={() => setCurrentForm(5)}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none cursor-pointer bg-secondaryColor"
            )}
          >
            OK
            <Check className="ml-2 h-4 w-4" />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full h-full items-start justify-center pl-3">
          <h2 className="text-white text-base md:text-xl font-medium tracking-widest">{`Your Phone Number ?`}</h2>
          {/* <div className="flex flex-col md:flex-row gap-3">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div
                  aria-expanded={open}
                  className="w-[250px] justify-between flex items-center text-white border-textColor border p-1 rounded-md"
                >
                  {value
                    ? countries.find(
                        (country) => country.value.toString() === value
                      )?.name
                    : "Select country..."}
                  <ChevronDown className="ml-2 h-4  w-4 shrink-0 opacity-50" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup className="overflow-y-scroll hideScroll">
                    {countries.map((country) => (
                      <CommandItem
                        key={country.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === country.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <img src={country.flag} /> {country.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <input
              placeholder="enter your number here."
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              type="text"
              name="phone"
              className="bg-transparent outline-none border-b-2 md:border-b-4 h-14 text-textColor font-medium text-base md:text-lg w-4/5 caret-textColor"
              tabIndex={-1}
            />
          </div> */}

          <PhoneInput
            defaultCountry="ua"
            value={phone}
            onChange={(phone) => {
              console.log(phone);
              setPhone(phone);
            }}
          />

          <Button
            onClick={handleSubmit}
            disabled={!isValidPhoneNumber(phone.trim()) || Submited || fetching}
            className={cn(
              " text-white w-fit py-2 px-3 flex items-center rounded-md select-none"
            )}
            tabIndex={-1}
          >
            {fetching && (
              <Loader2 className="text-white mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </div>
      </div>
      <div className="absolute right-10 bottom-10 flex gap-4">
        <div
          onClick={() =>
            CurrentForm !== 0 ? setCurrentForm(CurrentForm - 1) : ""
          }
          className="bg-secondaryColor p-2 rounded-md cursor-pointer select-none"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </div>
      </div>
    </form>
  );
}
