
import { useNavigate } from 'react-router-dom';
import proImg from '../../../../assets/Images/promotionImg.png'
import { Button, Image } from 'antd';
import '../Promotion.css'

const SeePost = () => {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate('/promotion')
    }
    return (
        <div>
           <h1 className='py-6 font-bold text-xl'>See Post</h1> 
           <div>
            <Image src={proImg} />
           </div>
           <div className='gap-8 flex py-12'>
           <Button
              onClick={handleEdit}
                // type="primary"
                style={{
                  backgroundColor: "#193664",
                  color: "#fff",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[185px] 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
              >
               Edit
              </Button>
           <Button
            //   onClick={handleSeePost}
                // type="primary"
                style={{
                  backgroundColor: "transparent",
                  color: "#193664",
                  size: "18px",
                  height: "56px",
                }}
                htmlType="submit"
                className=" w-[185px] custom-delete-button font-bold 
                   h-[56px]  py-4 mt-2 text-white hover:border-none border-none rounded-2xl"
              >
          Delete
              </Button>
           </div>
          
        </div>
    );
};

export default SeePost;