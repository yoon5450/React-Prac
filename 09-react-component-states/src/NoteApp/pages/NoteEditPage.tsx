import { getNoteItem, type Note } from "../api/getNote";
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import { ROUTES } from "../routes";

interface Props {
  noteId: number | null;
  onDelete: (deletedNoteId: number) => void;
  onEdit: (editedData: Note) => void;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

function NoteEditPage({ noteId, onDelete, onChangeRoute, onEdit }: Props) {
  const handleBackLink = () => {
    onChangeRoute(ROUTES.list);
  };

  if (!noteId) return;
  const note = getNoteItem(noteId);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackLink} />
      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm
            mode="edit"
            onDelete={onDelete}
            onEdit={onEdit}
            note={note}
            onBackLink={handleBackLink}
          />
        </>
      )}
    </div>
  );
}
export default NoteEditPage;
