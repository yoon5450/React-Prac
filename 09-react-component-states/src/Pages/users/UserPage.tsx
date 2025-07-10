import userData from "@/data/users.json";
import { useState } from "react";
import UserList from "@/components/UserList";
import UserSearchBox from "@/components/UserSearchBox.tsx";
import UserListCount from "@/components/UserListCount";
import InstantSearch from "@/components/InstantSearch";

function UserPage() {
  // 상태 선언
  // 상위에서 state를 선언하고 전체적인 렌더링 관리를 해 줘야 함.
  const [users, updataUser] = useState<UserType[]>(userData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isInstantSearch, setIsInstantSearch] = useState(false);

  // 상태 업데이트
  // handleSearch, handleReset => UserSerchBox
  const handleSearch = (userInput: string) => setSearchTerm(userInput);
  const handleReset = () => setSearchTerm("");
  const handleInstantCheck = () => setIsInstantSearch(!isInstantSearch)

  // 문자열이 포함된 것들만 조회
  // 파생된 상태 - 기존에 있는 요소를 변경해서 사용하는 형태
  const searchedUserList = users.filter((user) => 
    user.name.includes(searchTerm) ||
    user.city.includes(searchTerm) ||
    user.email.includes(searchTerm)
);

  // 마크업
  return (
    <div className="UserPage">
      <InstantSearch onCheck={handleInstantCheck} isInstantSearch={isInstantSearch}/>
      <UserSearchBox onSearch={handleSearch} onReset={handleReset} isInstantSearch={isInstantSearch} searchTerm={searchTerm}/>
      <UserList userData={searchedUserList} />
      <UserListCount searchedUsersCount={searchedUserList.length} totalUsersCount={users.length}/>
    </div>
  );
}

export default UserPage;
