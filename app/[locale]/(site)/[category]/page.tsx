import ProductsListItem, {
    Props as ProductsListItemProps,
} from '@/components/Products/ProductsListItem'

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

type Props = {
    id: number
    img: string
    title: string
    description: string
    color: string
    price: string
    category: string
    params: {
        category: string
        locale: string
    }
}

export default async function Category({ params }: Props) {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/productsDb`)
    const items = (await response.json()).products as ProductsListItemProps[]
    console.log(items)

    unstable_setRequestLocale(params.locale)
    const t = await getTranslations('Category')

    return (
        <div className=' '>
            <h1>
                {t('productsInCategory')}:{' '}
                <span className='capitalize'>{params.category}</span>
            </h1>
            <div className='grid grid-cols-3 gap-4'>
                {items.map(
                    ({
                        id,
                        img,
                        title,
                        description,
                        color,
                        price,
                        category,
                    }) => {
                        if (category === params.category) {
                            return (
                                <div
                                    key={id}
                                    className='grid items-center rounded'
                                >
                                    <ProductsListItem
                                        id={id}
                                        img={img}
                                        title={title}
                                        description={description}
                                        color={color}
                                        price={price}
                                        category={category}
                                    />
                                </div>
                            )
                        }
                    },
                )}
            </div>
        </div>
    )
}
