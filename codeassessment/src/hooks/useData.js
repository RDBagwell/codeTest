import { useCallback, useEffect, useState } from "react";
import { getData } from "./requests";

function useData() {
    const [pageData, savePageData] = useState([]);
    const getPageData = useCallback(async ()=>{
        const fetchData = await getData();
        savePageData(fetchData)
    }, []);

    useEffect(()=>{
        getPageData()
    }, [getPageData]);

    return pageData
  }
  
  export default useData;