import { Image } from "antd";
import logo from "../../assets/Images/detailsDeliveryEmployProfile.jpg"; // Import the image
import ReviewRating from "./ReviewRating";

const Review = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Review</h1>
      <div className="py-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="overflow-hidden w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <Image width={50} height={50} src={logo} />{" "}
              {/* Use the imported image */}
            </div>
            <div>
              <h1>Julian Frederick</h1>
              <div>
                <ReviewRating/>
              </div>
            </div>
          </div>
          <div>
            <h1>10:45pm</h1>
          </div>
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          possimus dicta inventore architecto neque at praesentium ipsa!
        </div>
      </div>
    </div>
  );
};

export default Review;
