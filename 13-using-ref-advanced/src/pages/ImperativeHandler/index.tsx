import { useRef, useState } from "react";
import S from "./style.module.css";
import ChatBox, { type ChatBoxHandle } from "./components/ChatBox";

const INITIAL_CHAT_MESSAGE = [
  { id: "chat-1", message: "오늘 저녁에 뭐 먹을까?", isMe: false },
  { id: "chat-2", message: "뭐 먹고 싶은데", isMe: false },
  { id: "chat-3", message: "아무거나.", isMe: false },
  { id: "chat-4", message: "치킨", isMe: false },
  { id: "chat-5", message: "치킨 싫은데", isMe: false },
  { id: "chat-6", message: "아무거나 먹자매 뭐 먹고 싶은데", isMe: false },
  { id: "chat-7", message: "몰라", isMe: false },
  { id: "chat-8", message: "오늘보지말자", isMe: false },
];

export type Chat = typeof INITIAL_CHAT_MESSAGE;

function ImperativeHandler() {
  const [chatMessage, setChatMessage] = useState<Chat>(INITIAL_CHAT_MESSAGE);

  // 하위 컴포넌트의 명령형 핸들어 접근 가능한 객체를 참조
  const imperativeHandlerRef = useRef<ChatBoxHandle>(null);

  const handleAddMessage = (message: string) => {
    const nextChatIndex = chatMessage.length + 1;

    const newMessage = {
      id: `chat-${nextChatIndex}`,
      isMe: true,
      message,
    };

    setChatMessage((message) => [...message, newMessage]);
  };

  const mountedMainElement = () => {
    const imperativeHandles = imperativeHandlerRef.current;
    if(!imperativeHandles) return;
    imperativeHandles.scrollDownList();
  };

  return (
    <main className={S.container} ref={mountedMainElement}>
      <h1>상위 컴포넌트에 명령형 핸들 노출하기</h1>
      <div className={S.description}>
        <p>
          React.forwardRef() / ref Props를 사용해 상위 컴포넌트의 DOM요소 노드를
          노출하는 방법을 학습했습니다.
        </p>
        <p>
          때때로 DOM 요소 노드에 대한 접근을 허용하지 않고, 명령형 핸들(함수)를
          노출하는 방법에 대해 학습해봅니다.
        </p>
        <p>이런 경우 React.useImperativeHandle() 훅을 사용할 수 있습니다.</p>
      </div>

      <ChatBox
        ref={imperativeHandlerRef}
        message={chatMessage}
        onAddMessage={handleAddMessage}
      />
    </main>
  );
}
export default ImperativeHandler;
