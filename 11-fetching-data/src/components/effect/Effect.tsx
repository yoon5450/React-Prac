import { useUsers } from "@/hook/useUsers";

function Effect() {
  /*
    useEffect를 사용해서 데이터 fetch
    fetch 데이터를 list rendering
  */

  const {users, loading, error} = useUsers();

  if(error) return <p>error 발생</p>
  if (loading) return <p>loading...</p>;

  return (
    <ul>{users && users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
  );
}

export default Effect;
