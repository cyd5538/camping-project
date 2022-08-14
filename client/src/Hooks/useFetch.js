import { useState, useEffect } from "react";
import axios from "axios";

export default function UseFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return data;
}
