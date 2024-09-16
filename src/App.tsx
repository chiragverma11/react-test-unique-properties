import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig } from "lucide-react";
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
import { propertyTypes, serviceTypes } from "./lib/constants";
import { Checkbox } from "./components/ui/checkbox";
import React from "react";
import VerticalPointCarousel from "./components/VerticalPointCarousel";

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
      <section className="bg-hero-banner bg-cover bg-fixed bg-[center_-6.7rem] bg-no-repeat h-[720px] py-16 flex flex-col justify-between items-center">
        <img src="/logo.webp" className="h-9 mx-auto" />
        <div className="flex justify-between p-16 items-center">
          <div className="space-y-2 text-white">
            <h1 className="text-[56px] font-medium tracking-tight leading-tight">
              Unlock Your Property's Potential
            </h1>
            <p className="font-light">
              Experience a seamless selling process with maximum returns.
            </p>
          </div>
          <div className="w-2/4 px-4">
            <ListPropertyCard className="rounded" />
          </div>
        </div>
      </section>
      <section className="p-20 flex gap-20 flex-col justify-between">
        <div className="mx-auto space-y-2 text-center container w-full lg:w-4/6 font-medium">
          <h2 className="text-3xl text-brand-primary-foreground">
            Why Sell Your Property With Us?
          </h2>
          <p className="text-lg font-light text-brand-secondary-foreground">
            With our knowledge and guidance, you can confidently navigate the
            selling process and maximize the value of your property.
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-3 w-1/2">
            {sectionTwoPoints.map((point) => {
              return (
                <div key={point.title} className="flex justify-between">
                  <div className="w-12 h-12 py-3">
                    <CircleCheckBig
                      className="h-7 w-7 aspect-square mr-4 items-start"
                      strokeWidth={3}
                    />
                  </div>
                  <div className="text-brand-secondary-foreground">
                    <p className="text-xl font-medium">{point.title}</p>
                    <p className="font-light">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img src="/images/section-2.webp" className="w-1/2" />
        </div>
      </section>
      <section className="p-20 flex gap-20 flex-col justify-between bg-brand-secondary">
        <div className="mx-auto space-y-2 text-center container w-full lg:w-4/6 font-medium">
          <h2 className="text-3xl text-brand-primary-foreground">
            Our Process
          </h2>
          <p className="text-lg font-light text-brand-secondary-foreground">
            With our knowledge and guidance, you can confidently navigate the
            selling process and maximize the value of your property.
          </p>
        </div>
        <VerticalPointCarousel points={processes} />
      </section>
      <section className="p-20 flex-col justify-between">
        <div className="mx-auto space-y-2 text-center container mb-8 w-full font-medium">
          <h2 className="text-3xl text-brand-primary-foreground">
            Partner with the best to sell your property faster.
          </h2>
          <p className="font-light text-brand-secondary-foreground">
            Selling your property can be a complex and time-consuming process.
            That's where we come in. With years of experience and a deep
            understanding of the local market, we're your trusted partner in
            achieving a swift and successful sale.
          </p>
        </div>
        <div className="flex justify-between items-center gap-4 px-16 py-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">16+</p>
            <p className="font-light">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">1000+</p>
            <p className="font-light">Transactions Every year</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">24B+</p>
            <p className="font-light">Worth of Property Sold</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-bold">400+</p>
            <p className="font-light">Active Listings</p>
          </div>
        </div>
        <p className="font-light text-center">
          Our proven track record of success speaks for itself. Let us leverage
          our knowledge and network to turn your property into a sold property
          in no time.
        </p>
        <ConsultationForm className="w-2/3 mx-auto my-4" />
      </section>
      <section className="p-20 flex gap-20 flex-col justify-between">
        <div className="p-12 bg-brand-secondary flex justify-between items-center rounded">
          <div className="space-y-2 container font-medium w-1/2 mx-auto">
            <h3 className="text-2xl font-bold tracking-tight text-brand-primary-foreground">
              Maximize Your Property Reach with Our Offline Marketing Tools
            </h3>
            <p className="font-light text-brand-secondary-foreground">
              Expand your property's visibility with our powerful offline
              marketing tools. Reach potential buyers and investors effectively,
              ensuring your property stands out in a competitive market.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <Button className="w-fit bg-brand-primary-foreground hover:bg-brand-primary-foreground/90 px-12">
              Get started today!
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-brand-primary-foreground p-4 w-full">
        <div className="max-w-6xl px-6 w-full gap-4 flex mx-auto justify-between items-center text-white">
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
    <Card className={cn("p-5", className)} {...props}>
      <CardHeader className="mx-auto text-center">
        <CardTitle className="text-2xl font-normal text-brand-primary-foreground">
          List Your Property With Us
        </CardTitle>
        <CardDescription className="text-brand-secondary-foreground font-light">
          Schedule a call with our property consultants
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                        className="p-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
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
                        className="p-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
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
                      <PhoneInput
                        inputProps={{
                          className:
                            "py-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40",
                          placeholder: "Mobile*",
                        }}
                        countrySelectClassName="h-12 focus-visible:ring-0 focus-visible:ring-transparent focus:visible:border focus-visible:border-black/40"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="w-fit px-10 mx-auto bg-brand-primary-foreground">
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
      className={cn("border border-border py-5 px-2", className)}
      {...props}
    >
      <CardHeader className="mx-auto text-center">
        <CardTitle className="text-3xl font-normal tracking-tight text-brand-primary-foreground">
          Book your free consultation with one of our advisors
        </CardTitle>
        <CardDescription className="text-[1rem] text-brand-secondary-foreground font-light">
          Share the details of your property so we can prepare a non-biding
          property appraisal and sell your property quickly.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8">
        <Form {...form}>
          <form id="consultationForm" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6 font-light">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name*"
                          className="p-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
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
                          className="p-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
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
                          className="p-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
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
                        <PhoneInput
                          inputProps={{
                            placeholder: "Mobile*",
                            className:
                              "py-5 h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40",
                          }}
                          countrySelectClassName="h-12 focus-visible:ring-0 focus:visible:border focus-visible:border-black/40"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {/* TODO: Add property type selector */}
              <FormField
                control={form.control}
                name="propertyInfo.propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-brand-secondary-foreground/60 font-light">
                      What is the type of property? *
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-x-6 gap-y-2 justify-start"
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
                    <FormLabel className="text-lg text-brand-secondary-foreground/60 font-light">
                      Specify the number of bedrooms *
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={`${field.value}`}
                        className="flex flex-wrap gap-x-6 gap-y-2 justify-start"
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
                                  value={`${i}`}
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg text-brand-secondary-foreground/60 font-light">
                      I am looking to *
                    </FormLabel>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start">
                      {serviceTypes.map((serviceType, i) => (
                        <FormItem
                          key={serviceType}
                          className="flex items-center space-x-2 space-y-0"
                        >
                          <FormControl key={serviceType}>
                            <Checkbox
                              checked={field.value === serviceType}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-light">
                            {services[i]}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                form="consultationForm"
                className="w-fit bg-brand-primary-foreground hover:bg-brand-primary-foreground/90 px-12 mx-auto mt-4"
              >
                Submit Details
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default App;
