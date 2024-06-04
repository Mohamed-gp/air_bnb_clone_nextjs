"use client";

import { authActions } from "@/redux/authSlice/authSlice";
// import { IRootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const InitialUserData = ({ userData }: any) => {
  const dispatch = useDispatch();
  // const userInfo = useSelector((state:IRootState) => state.auth.user)
  useEffect(() => {
    // to iso string
    dispatch(authActions.setCredentials({...userData,createdAt : JSON.stringify(userData?.createdAt),updatedAt : JSON.stringify(userData?.updatedAt)}));
  }, [userData]);

  return <></>;
};
export default InitialUserData;
