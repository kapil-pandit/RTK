import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    _id: 1,
    price: 5,
    title: "Amazon",
    description: "First",
  },
  {
    _id: 2,
    price: 20,
    title: "Flipcart",
    description: "Second",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => 
          <ProductItem
            key={product._id}
            _id={product._id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
