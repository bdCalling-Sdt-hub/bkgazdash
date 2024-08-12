
import { Button, Image } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductQuery } from "../../redux/api/services/productApi";
import { selectedProduct } from "../../redux/features/product/productSlice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { data: products = [], error, isLoading } = useGetProductQuery();

  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  const handleUpdate = (id) => {
    dispatch(selectedProduct(id));
    console.log(id)
    navigate(`/updateProduct/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Products</p>;

  return (
    <div>
      <div className="flex justify-end 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw]">
        <Button onClick={handleAddProduct} type="primary" className="flex items-center bg-[#193664]">
          <GoPlus className="mr-2" />
          Add Product
        </Button>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/4">
        {products.map((product, index) => (
          <div key={index} className="border justify-center items-center w-[200px] p-4 rounded-lg bg-[#DCEFF9]">
            <div className="flex justify-center">
              <Image src={product.img} alt={product.title} />
            </div>
            <div className="px-4">
              <h3 className="pt-2">{product.title}</h3>
              <p className="py-2">{product.weight}</p>
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
}

export default Categories;
