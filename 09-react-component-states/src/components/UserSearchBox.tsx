import React, { useId } from "react";
import "./UserSearchBox.css";
import { throttle } from "@/utils/throttle";

interface Props {
  onSearch: (userInput: string) => void;
  onReset: () => void;
  searchTerm: string;
  isInstantSearch: boolean;
}

function UserSearchBox({
  onSearch,
  onReset,
  searchTerm,
  isInstantSearch,
}: Props) {
  const id = useId(); // 라벨의 id를 맞춰주는 것

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById(id) as HTMLInputElement;
    const value = input.value.trim();

    if (value.length > 0) {
      onSearch(value);
    } else {
      alert("검색어를 입력하세요.");
      input.value = "";
      input.focus();
    }
  };

  const handleReset = () => {
    const input = document.getElementById(id) as HTMLInputElement;
    input.value = "";

    onReset();
  };

  const handleChange = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, 600);

  // 이벤트가 작동하지 않게 하려면 undefined를 넣어야 함.
  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleReset}
    >
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          type="search"
          name=""
          id={id}
          placeholder="사용자 정보 입력"
          onChange={isInstantSearch ? handleChange : undefined}
        />
      </div>
      <button hidden={isInstantSearch} type="submit">찾기</button>
      <button hidden={isInstantSearch} type="reset">목록 초기화</button>
    </form>
  );
}

export default UserSearchBox;
