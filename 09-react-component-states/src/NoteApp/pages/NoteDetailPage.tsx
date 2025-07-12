import { convertSlug } from "@/utils/conversSlug";
import { getNoteItem, getNoteList } from "../api/getNote";
import PrintError from "../components/PrintError";
import { ROUTES } from "../routes";
import BackLink from "../components/BackLink";
import "./NoteDetailPage.css";

interface Props {
  noteId: number | null;
  onChangeRoute: (nextRoute: string, pickNoteId?: number) => void;
}

function NoteDetailPage({ noteId, onChangeRoute }: Props) {
  const note = getNoteItem(noteId);

  if (!noteId || note === null) {
    return <PrintError>노트 정보를 불러오지 못했습니다.</PrintError>;
  }

  const handleChangeRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.edit, noteId);
  };

  const handleBackLink = () => {
    onChangeRoute(ROUTES.list);
  };

  const createMarkUp = () => {
    return { __html: note.content };
  };

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackLink} />
      {!note && <PrintError>노트를 찾을 수 없습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>
            {note.expand?.user.name}{" "}
            <a
              href={`#edit/${convertSlug(note.title)}`}
              onClick={handleChangeRoute}
            >
              수정
            </a>
          </span>
          <div dangerouslySetInnerHTML={createMarkUp()} />
        </>
      )}
    </div>
  );
}
export default NoteDetailPage;
