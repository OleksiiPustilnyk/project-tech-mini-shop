import ProductsListItem, {
    Props as ProductsListItemProps,
} from '@/components/Products/ProductsListItem'

import { getTranslations } from 'next-intl/server'

type Props = {
    params: {
        category: string
        locale: string
    }
}

export default async function Category({ params }: Props) {
    const response = await fetch(`http://localhost:8000/items`)
    const items = (await response.json()) as ProductsListItemProps[]

    console.log(items)

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
                        name,
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
                                        name={name}
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
