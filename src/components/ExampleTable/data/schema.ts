import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const AppCategorySchema = z.object({
  id: z.number(),
  category: z.string(),
  description: z.string(),
  createdOn: z.string(),
  createdBy: z.string(),
  lastUpdated: z.string(),
});

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export const EmployeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  role_id: z.number(),
  signup_status: z.boolean(),
  userActivity: z.string(),
});

export const ProjectSchema = z.object({
  id: z.number(),
  imageName: z.string(),
  completionDate: z.string(),
  annotation: z.boolean(),
  annotatedBy: z.string(),
  verifiedBy: z.string(),
  leadTime: z.string(),
  verified: z.boolean(),
});

export type AppCategory = z.infer<typeof AppCategorySchema>;

export type Task = z.infer<typeof taskSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;

export type Project = z.infer<typeof ProjectSchema>;
