import { useFetchAlbumsQuery } from "../store";

const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);
  return <div>AlbumList {user.name}</div>;
};

export default AlbumList;
