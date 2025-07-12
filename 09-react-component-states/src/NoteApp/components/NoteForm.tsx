import React, { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUserList } from "../api/getUser";
import './NoteForm.css'

type Form = React.FormEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>

interface Props {
  mode: string;
  newNoteId: number;
  onCreate: (newNoteItem: Note) => void;
  onBackLink: () => void;
}

const userList = getUserList();


function NoteForm({ mode, newNoteId, onCreate, onBackLink }: Props) {

  const [formData, setFormData] = useState(() => {
    return {
      title: "",
      content: "",
      userId: 0,
    };
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleCreateNote = (e:Form) => {
    const {name, value} = e.target;

    console.log(name, value);
    const nextFormData = {
      ...formData,
      [name]:value
    }


    setFormData(nextFormData);

    console.log(formData)
  };

  return (
    <form className="NoteForm">
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          id={titleId}
          type="text"
          name="title"
          onChange={handleCreateNote}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          onChange={handleCreateNote}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          id={userId}
          name="userId"
          onChange={handleCreateNote}
        >
        <option>작성자 선택</option>
        {
          userList.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>

      <div className="buttonGroup">
        <button type="submit">추가</button>
        <button type="reset">초기화</button>
      </div>


    </form>
  );
}
export default NoteForm;