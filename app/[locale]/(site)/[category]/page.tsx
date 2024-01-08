import ProductsListItem from '@/components/Products/ProductsListItem';
interface Props {
    id: number;
    img: string;
    title: string;
    description: string;
    color: string;
    price: string;
    category: string;
    params: {
        category: string;
    };
}

export default async function Category({ params }: Props) {
    const responce = await fetch(`${process.env.NEXTAUTH_URL}/api/productsDb`);
    const items = (await responce.json()).products as Props[];
    console.log(items);
    return (
        <div className=" ">
            <h1>
                Products in category:{' '}
                <span className="capitalize">{params.category}</span>
            </h1>
            <div className="grid grid-cols-3 gap-4">
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
                                    className="grid items-center rounded"
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
                            );
                        }
                    },
                )}
            </div>
        </div>
    );
}
