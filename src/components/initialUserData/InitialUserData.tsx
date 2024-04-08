"use client";

import { authActions } from "@/redux/authSlice/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const InitialUserData = ({ userData }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // to iso string
    dispatch(authActions.setCredentials({...userData,createdAt : JSON.stringify(userData?.createdAt),updatedAt : JSON.stringify(userData?.updatedAt)}));
  }, []);
  return <></>;
};
export default InitialUserData;
