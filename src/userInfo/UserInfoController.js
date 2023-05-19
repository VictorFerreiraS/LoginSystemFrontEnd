import React, { useEffect } from "react";
import UserInfoView from "./UserInfoView";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { redirect } from "react-router-dom";

const fetchUserData = async () => {
  return await fetch("http://localhost:8080/api/v1/auth/user", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((response) => {
    return response.json();
  });
};

export default function UserInfoController() {
  const dispatch = useDispatch();
  const { data, status } = useQuery("userData", fetchUserData);

  // Dispatch an action with the user data
  useEffect(() => {
    if (status === "success") {
      dispatch(
        login({
          fullName: `${data.firstName} ${data.lastName}`,
          isEmpty: false,
        })
      );
    }
  }, [data, dispatch, status]);

  const logout = () => {
    dispatch(
      login({
        fullName: ``,
        isEmpty: true,
      })
    );
    redirect("/");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching user data</div>;
  }

  return (
    <>
      <UserInfoView logout={{ logout }} />
    </>
  );
}
