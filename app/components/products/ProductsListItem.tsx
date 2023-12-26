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
      <div className="product-card rounded-xl">
        <div className="proguct-image">
          <div className="block">
            <div className="image rounded-t-xl">
              <img src={img} alt="img-product " />
            </div>
          </div>
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
