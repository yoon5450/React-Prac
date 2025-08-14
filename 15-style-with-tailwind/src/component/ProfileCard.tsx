function ProfileCard() {
  return (
    // 임의의 값을 지정할 수 있다.
    // sm이 커졌을 때 적용되는 이유는 요즘 제작은 다 mobile-first이기 때문에
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-8 bg-[#ffe3bb] rounded-xl m-5 min-w-[200px]">
      <img
        className="size-30 mx-auto block rounded-full sm:mx-0 sm:shrink-0"
        src="/visual.jpg"
        alt="yoon"
      />
      <div className="text-center sm:text-left space-y-2">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">윤대웅</p>
          <p className="font-medium sm:text-left">Software Engineer</p>
        </div>
        <button type="button" className="border-purple-200 text-purple-600 outline-1 px-3 py-1 rounded-full cursor-pointer hover:text-white hover:bg-purple-800 transition">Message</button>
      </div>
    </div>
  );
}
export default ProfileCard;
