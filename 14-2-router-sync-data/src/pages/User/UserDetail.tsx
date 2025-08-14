import type { User } from "@/@types/global";
import { Suspense, useEffect, useState } from "react";
import {
  Await,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router";

function UserDetail() {
  // const params = useParams();
  // const users = useLoaderData() as User;
  // const [userData, setUserData] = useState<User>();
  // console.log(users);
  const { user } = useLoaderData<{user: Promise<User>}>();
  
  // useEffect(() => {
  //   async function fetchUserById() {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${params.user_id}`
  //     );
  //     const data = await res.json();
  //     setUserData(data);
  //   }
  //   fetchUserById();
  // }, []);

  return (
    <div>
      <h1>UserDetail</h1>
      {/* Suspense로 예외 처리, 로드 상황 처리 */}
      <Suspense fallback={<p>유저 정보를 가져오는 중...</p>}>
        <Await resolve={user} errorElement={<div>Oops!!</div>}>
          {
            (user:User) => (
              <ul>
                <li>이름 : {user.name}</li>
                <li>이메일 : {user.email}</li>
                <li>이름 : {user.phone}</li>
              </ul>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
}
export default UserDetail;

// args에 params 값이 나온다.
export async function loader(args: LoaderFunctionArgs) {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${args.params.user_id}`
  // );
  // return res.json();

  return {user: fetch(`https://jsonplaceholder.typicode.com/users/${args.params.user_id}`).
    then((res) => res.json()),}
}
