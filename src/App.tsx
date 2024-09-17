import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { PhoneInput } from "./components/ui/phone-input";
import { cn } from "./lib/utils";
import {
  ConsultationFormSchema,
  consultationSchema,
  ListPropertyFormSchema,
  listPropertySchema,
} from "./lib/validation/homepage.validation";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import {
  propertyLocations,
  propertyTypes,
  serviceTypes,
} from "./lib/constants";
import { Checkbox } from "./components/ui/checkbox";
import React from "react";
import VerticalPointCarousel from "./components/VerticalPointCarousel";
import { CircleCheckBig } from "lucide-react";
import Combobox from "./components/ui/combobox";

const sectionTwoPoints: { title: string; description: string }[] = [
  {
    title: "Sell Expertise and Experience",
    description:
      "Our real estate experts provide in-depth market knowledge and strategic guidance to maximize your property's value.",
  },
  {
    title: "Extensive Network and Marketing Reach",
    description:
      "Our vast network and strategic marketing campaigns guarantee maximum exposure for your property.",
  },
  {
    title: "Tailored Marketing Approach",
    description:
      "Our tailored marketing approach highlights your property's unique features to attract the right buyers.",
  },
  {
    title: "Seamless Selling Process",
    description:
      "Our dedicated team simplifies the selling process, ensuring a smooth and stress-free experience.",
  },
];

const processes: Pick<
  Parameters<typeof VerticalPointCarousel>[0],
  "points"
>["points"] = [
  {
    title: "Consultation",
    logoSrc: "/icons/consultation.png",
    display: {
      imageSrc: "/images/consultation.webp",
      title: "Expert Property Consultation",
      description:
        "Our initial property consultation is designed to provide you with a clear understanding of your property's market value and potential. With in-depth market knowledge, we offer tailored strategies to ensure a swift and successful sale.",
    },
  },
  {
    title: "Appraisel",
    logoSrc: "/icons/valuation.png",
    display: {
      title: "Accurate Appraisal",
      imageSrc: "/images/valuation.webp",
      description:
        "Accurately determining your property's value requires a deep understanding of the local market. Our experts leverage extensive knowledge and data-driven analysis to uncover your property's full potential. By meticulously examining market trends and target demographics, we establish a precise appraisal that maximizes your property's selling price.",
    },
  },
  {
    title: "Marketing",
    logoSrc: "/icons/marketing.png",
    display: {
      title: "Tailored Marketing for Maximum Impact",
      imageSrc: "/images/marketing.webp",
      description:
        "Your property deserves a marketing strategy as unique as it is. We collaborate closely with you to create a customized plan that showcases your property's distinctive qualities. Our comprehensive approach, combining traditional and digital channels, ensures maximum exposure to a global audience.",
    },
  },
  {
    title: "Viewings",
    logoSrc: "/icons/viewing.png",
    display: {
      title: "Targeted Outreach & Showcasing Excellence",
      imageSrc: "/images/viewing.webp",
      description:
        "Our priority is to connect your property with qualified buyers from our extensive network. Through careful selection, we ensure that only genuinely interested parties view your home. Every viewing is meticulously planned to create an unforgettable experience. Our goal is to inspire potential buyers and help them envision a new life in your property.",
    },
  },
];

function App() {
  return (
    <>
      <section className="flex h-screen max-h-[1080px] flex-col items-center justify-between bg-[start_-6.7rem] bg-hero-banner bg-cover bg-fixed bg-no-repeat py-12 sm:h-[720px] md:h-[720px] lg:bg-[center_-6.7rem] lg:py-16">
        <img src="/logo.webp" className="mx-auto mb-20 h-9" />
        <div className="flex flex-col items-center justify-between gap-4 px-3 lg:flex-row lg:gap-0 lg:p-16">
          <div className="space-y-2 text-white">
            <h1 className="text-[32px] font-medium leading-tight tracking-tight lg:text-[56px]">
              Unlock Your Property's Potential
            </h1>
            <p className="font-light">
              Experience a seamless selling process with maximum returns.
            </p>
          </div>
          <div className="w-full lg:w-2/4 lg:px-4">
            <ListPropertyCard className="rounded" />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between gap-20 px-3 py-12 lg:p-20">
        <div className="container mx-auto w-full space-y-2 text-center font-medium lg:w-4/6">
          <h2 className="text-2xl text-brand-primary-foreground lg:text-3xl">
            Why Sell Your Property With Us?
          </h2>
          <p className="text-lg font-light text-brand-secondary-foreground">
            With our knowledge and guidance, you can confidently navigate the
            selling process and maximize the value of your property.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="space-y-3 lg:w-1/2">
            {sectionTwoPoints.map((point) => {
              return (
                <div key={point.title} className="flex justify-between">
                  <div className="h-12 w-12 py-3">
                    <CircleCheckBig
                      className="mr-4 aspect-square h-6 w-6 items-start lg:h-7 lg:w-7"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="mr-auto text-brand-secondary-foreground">
                    <p className="text-xl font-medium">{point.title}</p>
                    <p className="font-light">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img src="/images/section-2.webp" className="lg:w-1/2" />
        </div>
      </section>
      <section className="flex flex-col justify-between gap-20 bg-brand-secondary px-2 py-12 lg:p-20">
        <div className="container mx-auto w-full space-y-2 text-center font-medium lg:w-4/6">
          <h2 className="text-2xl text-brand-primary-foreground">
            Our Process
          </h2>
          <p className="text-lg font-light text-brand-secondary-foreground">
            With our knowledge and guidance, you can confidently navigate the
            selling process and maximize the value of your property.
          </p>
        </div>
        <VerticalPointCarousel points={processes} />
      </section>
      <section className="flex-col justify-between px-2 py-12 lg:p-20">
        <div className="container mx-auto mb-8 w-full space-y-2 text-center font-medium">
          <h2 className="text-2xl text-brand-primary-foreground">
            Partner with the best to sell your property faster.
          </h2>
          <p className="font-light text-brand-secondary-foreground">
            Selling your property can be a complex and time-consuming process.
            That's where we come in. With years of experience and a deep
            understanding of the local market, we're your trusted partner in
            achieving a swift and successful sale.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 pb-6 lg:grid-cols-4 lg:px-16 lg:py-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-bold">16+</p>
            <p className="text-center font-light">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-bold">1000+</p>
            <p className="text-center font-light">Transactions Every year</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-bold">24B+</p>
            <p className="text-center font-light">Worth of Property Sold</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl font-bold">400+</p>
            <p className="text-center font-light">Active Listings</p>
          </div>
        </div>
        <p className="pb-4 text-center font-light">
          Our proven track record of success speaks for itself. Let us leverage
          our knowledge and network to turn your property into a sold property
          in no time.
        </p>
        <ConsultationForm className="mx-1 md:mx-auto md:w-2/3 lg:my-4" />
      </section>
      <section className="flex flex-col justify-between gap-20 px-2 py-12 sm:px-12 md:px-20 md:py-12 md:pt-6">
        <div className="mx-2 flex flex-col items-center justify-between gap-4 rounded bg-brand-secondary p-4 py-5 md:flex-row md:p-12">
          <div className="container mx-auto space-y-2 font-medium md:w-1/2">
            <h3 className="text-center text-xl font-bold tracking-tight text-brand-primary-foreground lg:text-start lg:text-2xl">
              Maximize Your Property Reach with Our Offline Marketing Tools
            </h3>
            <p className="text-center font-light text-brand-secondary-foreground lg:text-start">
              Expand your property's visibility with our powerful offline
              marketing tools. Reach potential buyers and investors effectively,
              ensuring your property stands out in a competitive market.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2">
            <Button className="w-fit bg-brand-primary-foreground px-12 hover:bg-brand-primary-foreground/90">
              Get started today!
            </Button>
          </div>
        </div>
      </section>
      <footer className="w-full bg-brand-primary-foreground p-4">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-2 text-xs text-white lg:px-6 lg:text-base">
          <p>Made by Chirag</p>
          <p>Copyright © 2024. Unique Properties</p>
        </div>
      </footer>
    </>
  );
}

interface ListPropertyCardSchema
  extends React.ComponentPropsWithoutRef<typeof Card> {}

const ListPropertyCard: FC<ListPropertyCardSchema> = ({
  className,
  ...props
}) => {
  const form = useForm<ListPropertyFormSchema>({
    resolver: zodResolver(listPropertySchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      propertyInfo: {
        propertyType: undefined,
        numberOfBedrooms: undefined,
        location: "",
      },
    },
  });

  const onSubmit = (data: ListPropertyFormSchema) => {
    console.log(data);
  };

  return (
    <Card className={cn("px-2 py-2 lg:p-5", className)} {...props}>
      <CardHeader className="lg:px-auto mx-auto px-0 text-center">
        <CardTitle className="text-2xl font-normal text-brand-primary-foreground">
          List Your Property With Us
        </CardTitle>
        <CardDescription className="font-light text-brand-secondary-foreground">
          Schedule a call with our property consultants
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <Form {...form}>
          <form id="listPropertyForm" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6 font-light">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your Full name*"
                        className="focus:visible:border h-12 p-5 focus-visible:border-black/40 focus-visible:ring-0"
                        required
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your Email*"
                        className="focus:visible:border h-12 p-5 focus-visible:border-black/40 focus-visible:ring-0"
                        required
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <PhoneInput defaultCountry="IN" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="mx-auto w-fit bg-brand-primary-foreground px-10 hover:bg-brand-primary-foreground/90">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const services = [
  "Rent out a property",
  "Sell a property ",
  "Get a free property appraisal",
];
interface ConsultationFormProps extends React.ComponentPropsWithoutRef<"div"> {}

const ConsultationForm: FC<ConsultationFormProps> = ({
  className,
  ...props
}) => {
  const form = useForm<ConsultationFormSchema>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      propertyInfo: {
        propertyType: undefined,
        numberOfBedrooms: undefined,
        location: "",
      },
      service: undefined,
    },
  });

  const onSubmit = (data: ConsultationFormSchema) => {
    console.log(data);
  };

  return (
    <Card
      className={cn("border border-border lg:px-2 lg:py-5", className)}
      {...props}
    >
      <CardHeader className="lg:px-auto mx-auto px-4 text-center">
        <CardTitle className="text-2xl font-normal tracking-tight text-brand-primary-foreground lg:text-3xl">
          Book your free consultation with one of our advisors
        </CardTitle>
        <CardDescription className="text-[1rem] font-light text-brand-secondary-foreground">
          Share the details of your property so we can prepare a non-biding
          property appraisal and sell your property quickly.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 lg:px-8">
        <Form {...form}>
          <form id="consultationForm" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6 font-light">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name*"
                          className="focus:visible:border h-12 p-5 focus-visible:border-black/40 focus-visible:ring-0"
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Last Name*"
                          className="focus:visible:border h-12 p-5 focus-visible:border-black/40 focus-visible:ring-0"
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Email*"
                          className="focus:visible:border h-12 p-5 focus-visible:border-black/40 focus-visible:ring-0"
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <PhoneInput defaultCountry="IN" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Combobox
                value={form.watch("propertyInfo.location")}
                onValueChange={(value) =>
                  form.setValue("propertyInfo.location", value)
                }
                className="focus:visible:border h-12 w-full py-5 font-light focus-visible:border-black/40 focus-visible:ring-0"
                items={propertyLocations.flatMap((location) => ({
                  label: location,
                  value: location,
                }))}
                name="locations"
              />
              <FormField
                control={form.control}
                name="propertyInfo.propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-brand-secondary-foreground/60">
                      What is the type of property? *
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap justify-start gap-x-6 gap-y-2"
                      >
                        {propertyTypes.map((propertyType) => (
                          <FormItem
                            key={propertyType}
                            className="flex items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem
                                className="h-5 w-5 border border-black/40"
                                value={propertyType}
                              />
                            </FormControl>
                            <FormLabel className="font-light">
                              {propertyType}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyInfo.numberOfBedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-brand-secondary-foreground/60">
                      Specify the number of bedrooms *
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange(Number(value))}
                        defaultValue={`${field.value}`}
                        className="flex flex-wrap justify-start gap-x-6 gap-y-2"
                      >
                        {Array.from({ length: 6 }).map((_, i) => {
                          const bedroom = i + 1;
                          return (
                            <FormItem
                              key={i}
                              className="flex items-center space-x-2 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  className="h-5 w-5 border border-black/40"
                                  value={`${i + 1}`}
                                />
                              </FormControl>
                              <FormLabel className="font-light">
                                {bedroom > 5 ? "5+" : bedroom}{" "}
                                {bedroom > 0 ? "Bedrooms" : "Bedroom"}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-brand-secondary-foreground/60">
                      I am looking to *
                    </FormLabel>
                    <div className="flex flex-wrap justify-start gap-x-6 gap-y-2">
                      {serviceTypes.map((serviceType, i) => (
                        <FormField
                          key={serviceType}
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem
                              key={serviceType}
                              className="flex items-center space-x-2 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value === serviceType}
                                  onCheckedChange={(value) => {
                                    if (value) field.onChange(serviceType);
                                    else field.onChange("");
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-light">
                                {services[i]}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-center gap-2">
                <Button
                  type="submit"
                  form="consultationForm"
                  className="mx-auto mt-4 w-fit bg-brand-primary-foreground px-12 hover:bg-brand-primary-foreground/90"
                >
                  Submit Details
                </Button>
                <p className="text-center text-xs text-secondary-foreground/80 lg:text-sm">
                  By clicking submit, you agree to our Terms & Privacy Policy
                </p>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default App;
