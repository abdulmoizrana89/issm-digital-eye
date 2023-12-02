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

export const AppListingSchema = z.object({
  id: z.number(),
  name: z.string(),
  model: z.string(),
  createdOn: z.string(),
  createdBy: z.string(),
  lastUpdated: z.string(),
});

export const AppDeploymentSchema = z.object({
  id: z.number(),
  name: z.string(),
  appName: z.string(),
  createdOn: z.string(),
  implementedOn: z.string(),
  videoFeed: z.string(),
  });

export const EventLogSchema = z.object({
  id: z.number(),
  eventName: z.string(),
  eventTime: z.string(),
  date: z.string(),
  device: z.string(),
});

export const LiveFeedSchema = z.object({
  id: z.string(),
  object_detected: z.string(),
  object_count: z.number(),
  timestamp: z.string(),
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

export type AppListing = z.infer<typeof AppListingSchema>;

export type AppDeployment = z.infer<typeof AppDeploymentSchema>;

export type EventLog = z.infer<typeof EventLogSchema>

export type LiveFeed = z.infer<typeof LiveFeedSchema>;


export type Task = z.infer<typeof taskSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;

export type Project = z.infer<typeof ProjectSchema>;
