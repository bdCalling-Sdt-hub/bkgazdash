import { Flex, Image, Rate } from "antd";
import logo from "../../assets/Images/detailsDeliveryEmployProfile.jpg"; // Import the image
import ReviewRating from "./ReviewRating";
import { useState } from "react";
import baseUrl from "../../redux/api/baseUrl";

const Review = ({review, productId}) => {
  // console.log(review, productId);
  
const imageUrl = baseUrl;


  return (
    <div>
      
        {
          review?.data?.results?.map(rev =>  

      <div className="py-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="overflow-hidden w-[50px] h-[50px] rounded-full flex items-center justify-center">
              {
                rev?.userId ? (
                  <div> 
                    <Image width={55} height={55} src={imageUrl + rev?.userId?.image} />
                  </div>
                ) : (
                  <div> 
                    <Image width={55} height={55} src={logo} />{" "}
                  </div>
                )
              }
            
            </div>
            <div>
              <h1>  {rev?.userId?.fullName || "Julian Frederick"}</h1>
              <div>
              <Flex gap="middle" vertical>
            <Rate className="text-[#1397D5]" value={rev?.rating} />
            {rev?.rating ? <span>{rev.rating}</span> : null}
        </Flex>
              </div>
            </div>
          </div>
          <div>
          <p>{rev?.userId?.createdAt ? rev?.userId?.createdAt.split("T")[1].slice(0,5): "n/a"}</p>
          </div>
        </div>
        <div>
         {rev?.comment || "consectetur adipisicing"}
        </div>
      </div>
          )
        }
    </div>
  );
};

export default Review;
