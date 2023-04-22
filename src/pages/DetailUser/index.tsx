import useDetail from "./hooks";

export const DetailUser = () => {
  const { userInfo } = useDetail();

  return (
    <div className="border-2 rounded-lg p-6 grid grid-cols-5 mx-60">
      <div>
        <img
          className="rounded-full w-32"
          src={userInfo.avatar_url}
          alt="user"
        />
      </div>

      <div className="mt-6 col-span-4">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-3">{userInfo.name}</h1>
            <p className="text-slate-600 text-xl mb-3">{userInfo.login}</p>
            <p className="text-slate-600 text-md mb-8">{userInfo.bio}</p>
          </div>
          <div className="w-full">
            <a
              href={userInfo.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex mb-4"
            >
              <img
                className="w-8 mr-4"
                src="https://img.icons8.com/windows/32/null/github.png"
                alt="github profile"
              />
              <p className="text-slate-600 text-xl">{userInfo.login} github</p>
            </a>
            <div className="flex justify-between bg-slate-200 w-42 p-6 rounded-xl">
              <div className="flex flex-col items-center">
                <p className="text-slate-600 text-md mb-2">Repos</p>
                <p className="font-bold text-xl">{userInfo.public_repos}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-slate-600 text-md mb-2">Followers</p>
                <p className="font-bold text-xl">{userInfo.followers}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-slate-600 text-md mb-2">Following</p>
                <p className="font-bold text-xl">{userInfo.following}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 mt-10">
          <div>
            <div className="flex justify-start items-center mb-6">
              <img
                className="mr-1 w-8"
                src="https://img.icons8.com/ios-filled/50/null/marker.png"
                alt="location"
              />
              <p className="text-slate-500 text-xl">{userInfo.location}</p>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="mr-2 w-8"
                src="https://img.icons8.com/ios-filled/50/null/mail.png"
                alt="email"
              />
              <p className="text-slate-500 text-xl">{userInfo.email}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-start items-center mb-6">
              <img
                className="mr-2 w-8"
                src="https://img.icons8.com/fluency/48/null/twitter.png"
                alt="twitter"
              />
              <p className="text-slate-600 text-xl">
                {userInfo.twitter_username}
              </p>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="mr-2 w-8"
                src="https://img.icons8.com/material-outlined/24/null/link--v1.png"
                alt="blog"
              />
              <p className="text-slate-600 text-xl">{userInfo.blog}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
