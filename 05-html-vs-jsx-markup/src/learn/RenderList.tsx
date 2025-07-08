import React, { Fragment, type JSX } from "react";

interface Props {
  reactLibrary: ReactLibrary;
  items: StatusMessageWithId[];
}

// type ReactLibrary = {
//     name: string;
//     author: string;
//     writtenIn: string;
//     type: string;
//     license: string;
// }

function RenderList({ reactLibrary, items }: Props) {
  const renderDefinitionList = () => {
    const infoArr = Object.entries(reactLibrary);

    const list = infoArr.map((el) => (
      <Fragment key={el[0]}>
        <dt>{el[0]}</dt>
        <dd>{el[1]}</dd>
      </Fragment>
    )); // <> </> 프래그먼트에 키값을 설정해야 하는 경우에 react에서 Fragment를 가져와 정의하고 넣어주면 된다.

    return <dl className="reactLibrary">{list}</dl>;
  };

  const renderItems = () => {
    const list = items.map(({ id, message }) => <li key={id}>{message}</li>);

    return list;
  };

  const forOfItems = [];

  for (const a of items) {
    forOfItems.push(<li key={a.id}>{a.message}</li>);
  }

  const reverseRenderItem = () =>{
    const reverseItems = items.reverse();
    console.log(reverseItems);

    return reverseItems.map(({ id, message }) => <li key={id}>{message}</li>);
  }

  // 표현식, for of, 배열의 메서드, 함수를 사용한 리스트 렌더링
  return (
    <>
      <dt>리스트 렌더링</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다
        </p>
        {renderDefinitionList()}
      </dd>
      <dd>
        <ul>
          {items.map(({ id, message }: StatusMessageWithId) => (
            <li key={id}>{message}</li>
          ))}
        </ul>
        <hr />
        <ul>
          {forOfItems}
        </ul>
        <hr />
        <ul>{renderItems()}</ul>
      </dd>
      <dd>
        <p>상태 메세지(status message) 배열을 역순 정렬하여 렌더링</p>
        <ul>
          {reverseRenderItem()}
        </ul>
      </dd>
    </>
  );
}

export default RenderList;
