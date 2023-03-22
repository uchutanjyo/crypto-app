import { endpoints } from "../redux/NewMockData";

function mockAxios(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: endpoints[url] });
      }, 1000);
    });
  }
  
  export default mockAxios;