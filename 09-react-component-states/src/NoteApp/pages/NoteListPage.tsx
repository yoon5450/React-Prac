import React from "react";
import type { Note } from "../api/getNote";
import "@/NoteApp/pages/NoteListPage.css";
import NoteList from "../components/NoteList";

interface Props {
  list: Note[];
}

function NoteListPage({ list }: Props) {
  return (
    <div className="NoteListPage">
      <div>노트 정보</div>

      <NoteList list={list} />
      <a href="#create-note" className="createNoteLink">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
