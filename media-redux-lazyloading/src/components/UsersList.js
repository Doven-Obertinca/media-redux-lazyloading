import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUsers, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users; // { data: [], isLoading: false, error: null }
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error featching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUsers} onClick={handleUserAdd}>
          {" "}
          + Add User
        </Button>

        {creatingUserError && "Error creating user"}
      </div>

      {renderedUsers}
    </div>
  );
};

export default UsersList;
