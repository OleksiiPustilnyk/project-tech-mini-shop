import { useTranslations } from 'next-intl'

import './ProductsListItem.scss'

export type Props = {
    id: number
    img: string
    name: string
    description: string
    color: string
    price: string
    category: string
}

const ProductsListItem = ({
    id,
    img,
    name,
    description,
    color,
    price,
    category,
}: Props) => {
    const t = useTranslations('ProductsListItem')

    return (
        <div className=' '>
            <div className='product-card rounded-xl'>
                <div className='product-image'>
                    <div className='block'>
                        <div className='image rounded-t-xl p-5 bg-white'>
                            <img src={img} alt='img-product' />
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <h4 className='product-title'>{name}</h4>
                    <div className='product-description'>{description}</div>
                    <div className='product-features'>
                        {t('color_product')}: {color}
                    </div>
                    <div className='product-price'>
                        {t('price_product')}: $ {price}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductsListItem
