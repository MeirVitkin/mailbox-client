import { useEffect, useState } from 'react'
import { axiosReq } from '../functions/axiosReq'

export default function useAxiosReq({ defaultVal, method, url, body }) {
   const [data, setData] = useState(defaultVal)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')


   const fetchData = async () => {
      setLoading(true)
      try {
         const result = await axiosReq({ method, url, body })
         setData(result)
      } catch (e) {
         setError(e)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => { fetchData() }, [])

   return { data,setData , loading, error , fetchData}
}
