import React from "react";
import type { Note } from "../api/getNote";
import "@/NoteApp/pages/NoteListPage.css";
import NoteList from "../components/NoteList";
import { ROUTES } from "../routes";

interface Props {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId: number | null) => void;
}

function NoteListPage({ list, onChangeRoute }: Props) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create, null);
  };


  return (
    <div className="NoteListPage">
      <div>노트 정보</div>
      <NoteList list={list} onChangeRoute={onChangeRoute}/>
      <a 
      href="#create-note" 
      className="createNoteLink" 
      onClick={handleClick}>
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
