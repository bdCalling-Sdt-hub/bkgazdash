import { Button, Image } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OpenCloseSlectItem from "./OpenCloseSlectItem";
import styles from './Products.module.css';

// Correctly import the image
import slinderImg from "../../assets/Images/slinderImg.png";

const Products = () => {
  const navigate = useNavigate();

  // Use the correct image path here
  const products = [
    {
      id: 1,
      title: "bk-gaz",
      weight: "12kg",
      price: "$20",
      img: slinderImg,
      rating: 5,
    },
    {
      id: 2,
      title: "bk-gaz",
      weight: "12kg",
      price: "$20",
      img: slinderImg,
      rating: 5,
    },
    {
      id: 3,
      title: "bk-gaz",
      weight: "12kg",
      price: "$20",
      img: slinderImg,
      rating: 5,
    },
    
  ];

  const handleAddProduct = () => {
    navigate('/dashboard/product/addproduct');
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/product/updateProduct/${id}`);
  };

  return (
    <div>
      <div className="flex justify-between 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw] py-6">
        <OpenCloseSlectItem />
        <Button onClick={handleAddProduct} type="primary" className="flex items-center w-[206px] h-[56px] rounded-md  bg-[#193664]">
          <GoPlus className="mr-2" />
          Add Product
        </Button>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/4">
        {products.map((product) => (
          <div key={product.id} className="border justify-center items-center w-[200px] p-4 rounded-lg bg-[#DCEFF9]">
            <div className="flex justify-center">
              <Image src={product.img} alt={product.title} />
            </div>
            <div className="px-4 py-4">
              <h3 className="pt-2 text-bold text-2xl">{product.title}</h3>
              <p className="py-2 text-xs">{product.weight}</p>
              <div className="flex justify-between">
                <p>{product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>
            </div>
            <div className="flex space-x-4 justify-center py-6">
              <Button className={styles.customBtn}>Delete</Button>
              <Button className={styles.customBtn1}  onClick={() => handleUpdate(product.id)} >Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
