import React from "react";
import type { Note } from "../api/getNote";
import { convertSlug } from "@/utils/conversSlug";
import "./NoteList.css";
import { ROUTES } from "../routes";

type noteData = {
  id: number;
  title: string;
};

type Props = {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
};

function NoteList({ list, onChangeRoute }: Props) {
  // 핸들러 함수를 추가
  // 핸들러 바인딩
  // onChangeRoute(next, id) 실행

  // 클로저를 활용해서 id를 부여함.
  // 1. PickId를 map 구문에서 받아옴
  // 2. 뒤에 있는 함수를 리턴
  // 3. 뒤에 있는 함수는 체이닝된 상위 함수의 pickNoteId를 참조할 수 있다.
  // 4. onChangeRoute에서 pickNoteId를 출력
  const handleClick = (pickNoteId:number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    onChangeRoute(ROUTES.detail, pickNoteId);
  };

  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map(({ id, title }: noteData) => {
          const slug = `#${convertSlug(title)}`;
          return (
            <li key={id}>
              <a href={slug} onClick={handleClick(id)}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;
