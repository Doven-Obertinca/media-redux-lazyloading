import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="m-2"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>

      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
