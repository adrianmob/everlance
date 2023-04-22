import { githubApi } from "../../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserInfo } from "../../interfaces";

const useDetail = () => {
  const { idUser } = useParams();
  const [userInfo, setuserInfo] = useState<UserInfo>({
    avatar_url: "",
    name: "",
    login: "",
    bio: "",
    location: "",
    email: "",
    html_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    twitter_username: "",
    blog: "",
  });

  const getUser = async () => {
    const { data } = await githubApi.get(`/users/${idUser}`);
    return data;
  };

  const userQuery = useQuery(["user"], getUser, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (userQuery.data) {
      setuserInfo(userQuery.data);
    }
  }, [userQuery]);

  return {
    userInfo,
  };
};

export default useDetail;
