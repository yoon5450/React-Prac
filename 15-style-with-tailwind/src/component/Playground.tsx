function Playground() {
  return (
    <div>
      <div className="bg-emerald-300 sm:bg-red-400 text-neutral-800 px-l py-m">
        Playground
      </div>
      <a href="#">link</a>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3 className="highlight">h3</h3>

      <div className="_card">
        <h2>title</h2>
        <button>CTA</button>
      </div>

      <hr className="m-5" />

      <button
        type="button"
        className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 py-2 text-white hover:text-amber-500 cursor-pointer"
      >
        save changes
      </button>
    </div>
  );
}
export default Playground;

// sm:bg-red-400 으로 작아졌을 때 색이 바뀌도록 할 수 있음
