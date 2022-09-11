import { useEffect, useState } from "react";
import { filterResult } from "./filter";

const useFetch = (str: string | undefined = "art") => {
  const [result, setResult] = useState<[Record<string, any> | undefined]>();

  useEffect(() => {
    fetchFun(str)
      .then((res) => setResult(() => filterResult(res)))
      .catch(() => setResult(undefined));
  }, []);

  return result;
};

export const fetchFun = (str: string | undefined = "art") =>
  fetch("https://boki-six.vercel.app/search/" + str).then((res) => res.json());

export default useFetch;
