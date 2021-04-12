import mockRequests from "./team-data.json";

export const getRequestsSync = () => mockRequests;

export const getRequests = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(mockRequests), 2000);
  });
