const isDevelopment = process.env.NODE_ENV === "development";

export const HTTP = isDevelopment ? "localhost" : "back";
export const PORT = "3000";
export const API_URL = `http://${HTTP}:${PORT}`;
