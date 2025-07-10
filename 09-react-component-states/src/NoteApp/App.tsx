import React, { useState } from "react";
import NoteListPage from "./pages/NoteListPage";
import { getNoteList } from "./api/getNote";

function NoteApp() {
  const [list, setList] = useState(() => getNoteList()); // callback으로 선언하면 초기화 될 대마다 가져오는 게 아니라 한번만 가져옴

  console.log(getNoteList());

  return <NoteListPage list={list}/>;
}

export default NoteApp;
