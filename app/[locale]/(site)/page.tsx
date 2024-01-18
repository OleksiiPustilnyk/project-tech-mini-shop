import ProductsListItem, {
    Props as ProductsListItemProps,
} from '../../../components/Products/ProductsListItem'

import { getTranslations } from 'next-intl/server'

type Props = {
    params: { locale: string }
}

export default async function Home({ params: { locale } }: Props) {
    const t = await getTranslations('Home')

    const response = await fetch(`http://localhost:8000/items`)
    const items = (await response.json()) as ProductsListItemProps[]
    // const items = products as ProductsListItemProps[]

    console.log(items)

    return (
        <main className=' overflow-hidden'>
            <h1 className='container mx-auto flex items-center'>
                {t('title')}
            </h1>
            <div className='container mx-auto grid grid-cols-3 gap-4'>
                <div className='col-span-3 min-h-[fit-content]'>
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
                            }) => (
                                <div className='grid items-center  rounded-xl'>
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
                            ),
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
