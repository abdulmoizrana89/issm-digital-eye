import { testingServerConfig } from "../config/api";

export const CATEGORIES_QUERY_KEY = "CATEGORIES_QUERY_KEY";

export const getCategories = (id: string | undefined) =>
  testingServerConfig.get(`/categories/${id}`);
