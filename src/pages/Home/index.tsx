import ListUsers from "./components/ListUsers";
import Loading from "./components/Loading";
import useHome from "./hooks";

export const Home = () => {
  const {
    onInputChange,
    searchText,
    onSearchSubmit,
    usersQuery,
    goViewProfile,
    users,
  } = useHome();

  return (
    <>
      <div>
        <div className="grid gap-8 grid-cols-3 mb-8">
          <h1 className="text-3xl font-bold col-span-2 ">Github Users</h1>
          <form onSubmit={onSearchSubmit} className="relative">
            <input
              className="border-2 rounded-lg p-4 w-full px-8"
              type="text"
              autoComplete="off"
              placeholder="Enter username or email"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img
                className="w-4"
                src="https://img.icons8.com/ios/50/null/search--v1.png"
                alt="magnifying"
              />
            </div>
          </form>
        </div>
        {usersQuery.isFetching ? (
          <>
            <div className="mx-auto w-fit">
              <Loading />
            </div>
          </>
        ) : (
          <>
            {(users?.length ?? []) > 0 ? (
              <>
                <ListUsers users={users || []} goViewProfile={goViewProfile} />

                <div className="mt-10 flex justify-end">
                  <button
                    className={`border-2 rounded-lg p-3 font-bold ${
                      !usersQuery.hasNextPage && "hidden"
                    }`}
                    onClick={() => {
                      usersQuery.fetchNextPage();
                    }}
                  >
                    Load More
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center w-full justify-center">
                <h2 className="text-2xl text-slate-500 font-bold ">
                  No users found
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
