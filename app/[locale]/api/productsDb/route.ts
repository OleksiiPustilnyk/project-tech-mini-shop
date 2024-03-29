import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '@/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    try {
        await connectToDatabase()
        const products = await prisma.product.findMany()
        return NextResponse.json({ products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'server error' }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}

export const POST = async (req: Request) => {
    try {
        const { img, title, description, color, price, category } =
            await req.json()
        await connectToDatabase()
        const product = await prisma.product.create({
            data: { img, title, description, color, price, category },
        })
        return NextResponse.json({ product }, { status: 201 })
    } catch (error) {
        console.log(error)

        return NextResponse.json({ message: 'Server Error' }, { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}
