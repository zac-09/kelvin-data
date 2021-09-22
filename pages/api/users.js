import axios from "axios"

// export default handler = (req, res) => {
//     res.status(200).json({ text: 'Hello' })
//     // axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
//     //     res.status(200).json({ data: response })
//     //   });

//   }

  export default async function handler(req, res){
   const body = req.body
   //console.log(body)
    const apiKey = 'ac4c9b0e-ecbc-43c3-a785-a6480df2092f';
    //const url = `https://jsonplaceholder.typicode.com/${body}`
    const url = `https://api.kelvindata.com/rest/v1/search-v2?phone=${body.phoneNumber}&apiKey=${apiKey}`

    //console.log(url)

   // res.status(200).json({ text: 'Hello' })
   

    // if (req.method !== 'POST') {
    //     res.status(405).send({ message: 'Only POST requests allowed' })
    //     return
    //   }

   

try{
    const response = await axios.get(url)
    const data = await response.data
 
    
      console.log(`response is ${data}`)
        res.status(200).json({ data })
}catch(err){
    console.log(err)
        res.status(400).json({ err })
}
    

     
  }


