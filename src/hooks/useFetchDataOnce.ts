import { useState, useEffect } from "react"

export default function useFetchDataOnce(url: string) {

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>();

    async function getData(url: string) {
        
        setLoading(true);

        await fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            setData(result)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })
        .catch(err => {
            setLoading(false)
            throw new Error(err)
        })
    }

    useEffect(() => {
        getData(url)
    }, [])

    return {
        data,
        loading
    }
}