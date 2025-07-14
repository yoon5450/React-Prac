import React, { useState } from "react";
import NoteListPage from "./pages/NoteListPage";
import { getNoteList, type Note } from "./api/getNote";
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";

function NoteApp() {
  const [routeInfo, setRounteInfo] = useState<{
    route: string;
    noteId: number | null;
  }>({
    route: "list",
    noteId: null,
  });

  const [list, setList] = useState(() => getNoteList()); // callback으로 선언하면 초기화 될 대마다 가져오는 게 아니라 한번만 가져옴

  const handleChangeRoute = (
    nextRoute: string,
    pickNoteId: number | null = 0
  ) => {
    // 새로운 route로 변경
    if (typeof pickNoteId === "undefined") {
      console.error("handleCahngeRoute:: undefined 값으로 수정했습니다.");
    }

    setRounteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId,
    });

    console.log("routeInfo :>> ", routeInfo);
  };

  // 노트 수정 함수
  const handleEditNote = (editedNote:Note) => {
    const nextList = list.map((item) =>
    item.id === editedNote.id ? editedNote : item)
    setList(nextList);
  };

  // 노트 삭제 함수
  const handleDeleteNote = (deletedNoteId:number) => {
    const nextList = list.filter((item) => item.id !== deletedNoteId);
    setList(nextList);
  };

  // 노트 생성 함수
  const handleCreateNote = (newNoteItem: Note) => {
    setList([...list, newNoteItem]);
  };

  // 파생 상태
  const newNoteId = list.length + 1;

  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return (
        <NoteDetailPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.create:
      return (
        <NoteCreatePage
          newNoteId={newNoteId}
          onCreate={handleCreateNote}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.edit:
      return (
        <NoteEditPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      );
    default:
      return <div>404 not found</div>;
  }

  return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
}

export default NoteApp;
