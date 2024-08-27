import { Button, Image } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OpenCloseSlectItem from "./OpenCloseSlectItem";

// Correctly import the image
import slinderImg from "../../assets/Images/slinderImg.png";

const Categories = () => {
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
    navigate('/addproduct');
  };

  const handleUpdate = (id) => {
    navigate(`/updateProduct/${id}`);
  };

  return (
    <div>
      <div className="flex justify-between 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw] py-6">
        <OpenCloseSlectItem />
        <Button onClick={handleAddProduct} type="primary" className="flex items-center bg-[#193664]">
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
            <div className="flex space-x-4 py-6">
              <Button>Delete</Button>
              <Button onClick={() => handleUpdate(product.id)} className="bg-[#193664] text-white">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
