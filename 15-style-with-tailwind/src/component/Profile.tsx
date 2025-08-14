const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Profile() {
  return (
    <div className="flex flex-col border-cyan-500 border-1 bg-white p-4 m-3 gap-4 font-bold dark:bg-black">
      <div className="flex gap-4 items-center dark:text-white">
        <h1>Contributors</h1>{" "}
        <span className="bg-gray-200 px-2 rounded-md">204</span>
      </div>
      <div className="flex -space-x-2">
        {data.map((item) => (
          <img
            className="size-16 rounded-full ring-2 ring-white"
            src={item.src}
            key={item.id}
          ></img>
        ))}
      </div>
      {/* 그룹으로 이동시키는 대상을 안정화시킬 수 있음. */}
      <div className="group">
        <div className="m-0.5 transition group-hover:translate-x-11 text-white">
          198 others
        </div>
      </div>
    </div>
  );
}
export default Profile;
