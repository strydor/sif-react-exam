import mockRequests from "./team-data.json";
import refData from "./row-data.json";

export const getRequestsSync = () => {
  return includeRefData(mockRequests);
};

export const getRequests = (data) =>
  new Promise((resolve, reject) => {
    let data = includeRefData(mockRequests);
    setTimeout(() => resolve(data), 2000);
  });

const includeRefData = (data) => {
  return data.map((d) => {
    d["row_reference"] = refData.data;
    return d;
  });
};
