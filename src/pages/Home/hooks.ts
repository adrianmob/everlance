import { githubApi } from "../../api/githubApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useForm } from "../../hooks/useForms";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { FormEvent } from "react";
import { UsersInfo } from "../../interfaces/index";

const useHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  interface Props {
    q: string | (string | null)[] | null;
  }

  interface QueryProps {
    pageParam?: number;
    queryKey: (string | Props)[];
  }

  const getUsers = async ({
    pageParam = 1,
    queryKey,
  }: QueryProps): Promise<UsersInfo[]> => {
    const [, args] = queryKey;
    const { q } = args as Props;

    const params = new URLSearchParams();

    params.append("page", pageParam.toString());
    params.append("per_page", "12");
    params.append("q", q?.toString() || "");
    const { data } = await githubApi.get("/search/users", { params });
    return data.items;
  };

  const usersQuery = useInfiniteQuery(
    ["users", { q }],
    (data) => getUsers(data),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return;
        return pages.length + 1;
      },
      enabled: !!q,
      refetchOnWindowFocus: false,
    }
  );

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length === 0) return;

    navigate(`?q=${searchText}`);
  };

  const goViewProfile = (idUser: string) => {
    navigate(`detailUser/${idUser}`);
  };

  return {
    searchText,
    onInputChange,
    onSearchSubmit,
    usersQuery,
    goViewProfile,
    users: usersQuery.data?.pages.flat(),
  };
};

export default useHome;
