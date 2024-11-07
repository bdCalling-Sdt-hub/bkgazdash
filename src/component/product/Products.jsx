 

import { Button, Card, Pagination } from "antd";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OpenCloseSlectItem from "./OpenCloseSlectItem";
import styles from './Products.module.css';
import productt from './../../../public/Product 1.png';
import style from './Pagination.module.css';
import slinderImg from "../../assets/Images/slinderImg.png";
import { useGetAllProductQuery } from "../../redux/features/product/getAllProduct";
import baseUrl from "../../redux/api/baseUrl";
import { useState } from "react";
import { useDeleteProductMutation } from "../../redux/features/product/deleteProduct";
import toast, { Toaster } from "react-hot-toast";
import { useAllCategoryQuery } from "../../redux/features/category/getAllCategory";
import {  DeleteOutlined } from '@ant-design/icons';
import { useDeleteCategoryMutation } from "../../redux/features/category/deleteCategory";
const Products = () => {
  const navigate = useNavigate();
  const { data: allProduct, isLoading } = useGetAllProductQuery();
  const [deleteProduct, {}] = useDeleteProductMutation()
// console.log("all product listt>>>>>>>>>>>>>>: ",allProduct);

const  productDelete = async (id) => {
   try{
    const res = await deleteProduct(id).unwrap();
     console.log(res);
     if(res?.code == 200){
      toast.success(res?.message)
     }
     setTimeout(() => { 
       navigate("/dashboard/product")
     }, 2000);
     
   }catch (error){
    console.log(error?.data?.message);
    
   }
}

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Handling pagination page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get products for the current page
  const paginatedProducts = allProduct?.data?.attributes?.results.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleAddProduct = () => {
    navigate('/dashboard/product/addproduct');
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/product/updateProduct/${id}`);
  };
  const {data: categories} = useAllCategoryQuery()
  console.log(categories?.data?.attributes?.results)
 const [deleteCategory] = useDeleteCategoryMutation()
 const CategoryD = async(id) => {
    try{
      const res = await deleteCategory(id).unwrap();
      if(res.code == 200){
        toast.success(res?.message)
      }
    }catch(error){
      console.log(error)
    }
 }
 
  return (
    <div>
      <Toaster reverseOrder = {false} />
      <div className="flex justify-between 2xl:w-[79vw] xl:w-[76vw] lg:w-[75vw] py-6">
        <div>

         <h1 className="text-2xl">Products</h1>
        </div>
        <div>
         <div className="flex items-center gap-4">

        <Button  onClick={() => navigate('addcaregory')} type="primary" className="flex items-center w-[150px] h-[46px] rounded-md  bg-[#193664]">
          <GoPlus className="mr-2"/>
          Add Category
        </Button>
        <Button onClick={handleAddProduct} type="primary" className="flex items-center w-[150px] h-[46px] rounded-md  bg-[#193664]">
          <GoPlus className="mr-2" />
          Add Product
        </Button>
         </div>
        </div>
      </div>
      <h1 className="text-xl font-medium py-2">Product Category</h1>
      <div className="grid grid-cols-10 gap-2">
        {
          categories?.data?.attributes?.results.map(category => 

            <div className="">
              <Card className="shadow-md rounded-lg p-4 border bg-[#c7d7f1]">
        <div className="text-lg font-semibold">{category?.name}</div>
        <DeleteOutlined  className="" key="delete" onClick={() => CategoryD(category?._id)}/>
      </Card>
            </div>
          )
        }
       
    </div>

      {/* card */}
      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-5 gap-4 py-8">
        {paginatedProducts?.map((product) => (
          <div key={product.id} className="border justify-center items-center p-4 rounded-lg bg-[#DCEFF9]">
            <div className="flex justify-center">
              {/* <img src={productt} alt="" /> */}
              <img className="h-60 w-[80%]" src={baseUrl + product.image} alt="" />
            </div>
            <div className="px-4 py-4">
              <h3 className="pt-2 text-bold text-2xl">{product?.name}</h3>
              <p className="py-2 text-xs">{product?.categoryId?.name}</p>
              <div className="flex justify-between">
                <p>{product?.price.toFixed(2)}</p>
                <p>Rating: {product?.avgRating?.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex space-x-4 justify-center py-6">
              <Button onClick={() => productDelete(product?._id)} className={styles.customBtn}>Delete</Button>
              <Button className={styles.customBtn1} onClick={() => handleUpdate(product._id)}>Edit</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={allProduct?.data?.attributes?.results.length}
        pageSize={pageSize}
        onChange={handlePageChange}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        className={style.paginationCenter}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Products;

