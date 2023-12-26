import "./ProductsListItem.scss";

type Props = {
  id: number;
  img: string;
  title: string;
  description: string;
  category: string;
};

const ProductsListItem = ({ id, img, title, description, category }: Props) => {
  return (
    <div className=" ">
      <div>
        <div className="product-img border-b border-gray-400 p-4 ">
          <img src={img} alt="img-product " />
        </div>
        <h4 className="product-title">{title}</h4>
        <div className="product-description">{description}</div>
        <div className="product-features">category: {category}</div>
        {/* <div className="product-price">Price: $ {price}</div> */}
      </div>
    </div>
  );
};
export default ProductsListItem;
