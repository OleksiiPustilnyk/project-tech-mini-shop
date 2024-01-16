// import { NextApiRequest, NextApiResponse } from 'next'
// import axios from 'axios'

// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const { id } = req.query
//         const response = await axios.get(`http://localhost:8000/users/${id}`)
//         res.status(response.status).json(response.data)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: 'Server Error' })
//     }
// }
