import axios from "axios"



export const axiosReq = async ({ method = 'POST', body, url }) => {
   try {
    //   axios.defaults.baseURL = 'http://localhost:5555/'
      console.log('api req 😘 \n', { url, method, body })
      
      const { data: result } = await axios({
         baseURL: 'http://localhost:5555/',
         method,
         data: body,
         url,
         headers: {
            Authorization: localStorage.token || ''
         }
      })
      
      console.log('api req result 🐱 \n', { result })


      return result

   } catch (error) {
      console.log('api error 🤢 \n', { error })
      throw error.response?.data?.my  ? error.response?.data?.message || 'something went wrong' : 'something went wrong'
   }
}