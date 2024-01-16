// import { connectToDatabase } from '@/helpers/server-helpers'
// import prisma from '@/prisma'
// import { NextResponse } from 'next/server'

// export const GET = async () => {
//     try {
//         await connectToDatabase()
//         const users = await prisma.user.findMany()
//         return NextResponse.json({ users }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ error: 'server error' }, { status: 500 })
//     } finally {
//         await prisma.$disconnect()
//     }
// }

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query
        const response = await axios.get(`http://localhost:8000/users/${id}`)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error' })
    }
}
