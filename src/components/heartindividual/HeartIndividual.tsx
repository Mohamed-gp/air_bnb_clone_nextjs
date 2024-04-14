"use client";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { toast } from "react-hot-toast";
import { authActions } from "@/redux/authSlice/authSlice";

interface HeartIndividualProps {
  houseId: string;
}

const HeartIndividual = ({ houseId }: HeartIndividualProps) => {
  const dispatch = useDispatch();
  const userInfo: any = useSelector((state: IRootState) => state.auth.user);
  const addToWishListHandler = async () => {
    try {
      const result = await axios.post(`/api/listings/${houseId}`, {
        userId: userInfo.id as string,
      });
      toast.success(result.data.message);
      dispatch(authActions.wishlistToggle({ listingId: houseId }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {userInfo?.favoriteIds && (
        <div onClick={(e) => {e.preventDefault();addToWishListHandler()}}>
          {userInfo?.favoriteIds?.indexOf(houseId) != -1 ? (
            <>
              <FaHeart
                className={`absolute top-3 right-4 text-red-600  text-xl hover:scale-125 duration-500 `}
              />
              <FaRegHeart
                className={`absolute top-3 right-4  text-white text-xl hover:scale-125 duration-500`}
              />
            </>
          ) : (
            <>
              <FaHeart
                className={`absolute top-3 right-4  text-xl hover:scale-125 duration-500`}
              />
              <FaRegHeart
                className={`absolute top-3 right-4  text-white text-xl hover:scale-125 duration-500`}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};
export default HeartIndividual;
