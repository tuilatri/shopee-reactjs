import axios from "axios";

// The REST API endpoints
const API1_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/1";
const API2_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/2";
const API3_URL = "https://61bc99f0d8542f001782486b.mockapi.io/api/3";

async function fetchData() {
  const { data: responedData1 } = await axios.get(API1_URL);
  const { data: responedData2 } = await axios.get(API2_URL);
  const { data: responedData3 } = await axios.get(API3_URL);

  // Format data...
  const wantedData1 = [...responedData1, ...responedData2, ...responedData3];
  const wantedData2 = {
    ...wantedData1[0],
    ...wantedData1[1],
    ...wantedData1[2],
  };

  return wantedData2;
}

export default fetchData;
