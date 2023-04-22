import { UsersInfo } from "../../../interfaces/index";

type ListUsersProps = {
  users: UsersInfo[];
  goViewProfile: (idUser: string) => void;
};

const ListUsers = ({ users, goViewProfile }: ListUsersProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {users.map((user: any) => (
        <div className="flex flex-col border-2 rounded-lg p-6" key={user.id}>
          <div className="flex items-center">
            <img
              className="w-20 rounded-full"
              src={user.avatar_url}
              alt="profile user"
            />
            <h3 className="text-2xl font-bold ml-8">{user.login}</h3>
          </div>
          <div className="flex justify-between mt-8">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img
                className="w-6 rounded-full"
                src="https://img.icons8.com/windows/32/null/github.png"
                alt="github profile"
              />
            </a>
            <button
              className="text-slate-400 font-bold"
              onClick={() => goViewProfile(user.login)}
            >
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
