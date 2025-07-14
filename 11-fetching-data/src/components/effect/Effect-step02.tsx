import { useEffect, useState } from "react";

function Effect() {
  /*
    useEffect를 사용해서 데이터 fetch
    fetch 데이터를 list rendering
  */
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true)

  const END_POINT = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const response = fetch(END_POINT);
    response
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data) // 렌더링 트리거이기 때문에 effect 이후에 두번 렌더링
        setLoading(false);
      }).catch(err =>{
        console.error('데이터 가져오기 실패!', err)
      });
  }, []);

  if(loading) return <p>loading...</p>

  return <ul>{users && users.map(user => (<li key={user.id}>{user.name}</li>))}</ul>;
}

export default Effect;
