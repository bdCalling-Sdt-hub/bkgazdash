import { Flex, Image, Rate } from "antd";
import logo from "../../assets/Images/detailsDeliveryEmployProfile.jpg"; // Import the image
import ReviewRating from "./ReviewRating";
import { useState } from "react";

const Review = ({review, productId}) => {
  // console.log(review, productId);
  



  return (
    <div>
      <h1 className="text-2xl font-bold">Review</h1>
        {
          review?.data?.results?.map(rev =>  

      <div className="py-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="overflow-hidden w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <Image width={50} height={50} src={logo} />{" "}
              {/* Use the imported image */}
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
            <h1>10:45pm</h1>
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
