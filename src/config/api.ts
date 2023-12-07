import axios from "axios";

const DEV_SERVER_BASE_URL = "http://localhost:3000";

const testingServerConfig = axios.create({
  baseURL: DEV_SERVER_BASE_URL,
});

export { testingServerConfig };
