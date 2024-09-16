import { z } from "zod";
import { propertyTypes, serviceTypes } from "../constants";

export const listPropertySchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email("Must be a valid email"),
  mobile: z.string(),
  propertyInfo: z.object({
    propertyType: z.enum(propertyTypes),
    numberOfBedrooms: z.number().min(1),
    location: z.string(),
  }),
});

export type ListPropertyFormSchema = z.infer<typeof listPropertySchema>;

export const consultationSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "FirstName must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "LastName must be at least 3 characters" }),
  email: z.string().email("Must be a valid email"),
  mobile: z.string(),
  propertyInfo: z.object({
    propertyType: z.enum(propertyTypes),
    numberOfBedrooms: z.number().min(1),
    location: z.string(),
  }),
  service: z.enum(serviceTypes),
});

export type ConsultationFormSchema = z.infer<typeof consultationSchema>;
