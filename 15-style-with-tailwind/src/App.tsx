import "@/style/style.css";
// import Playground from './component/Playground'
import ChatCard from "./component/ChatCard";
import ProfileCard from "./component/ProfileCard";
import Profile from "./component/Profile";
import Button_twMerge from "./component/Button_twMerge";
import Button_clsx from "./component/Button_clsx";
import Button_tw from "./component/Button_tw";
import Button_cva from "./component/Button_cva";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <h1 className="bg-indigo-500 text-white p-4 flex justify-center items-center">
        hello tailwind
      </h1>

      {/* <Playground/> */}
      <ChatCard />

      <hr className="m-5" />

      <ProfileCard />

      <hr className="m-5" />

      <Profile />

      <hr className="m-5" />

      <Button_twMerge className="bg-amber-600">
        <div>Call to Action</div>
      </Button_twMerge>

      <hr className="m-5" />

      <Button_clsx size="md" className="bg-orange-600">
        Call to Action
      </Button_clsx>

      <hr className="m-5" />

      <Button_tw size="sm" disabled className="bg-emerald-400">
        Call to Action
      </Button_tw>

      <hr className="m-5"/>

      <Button_cva intent="primary" loading={true} size={'lg'} block={true} className="bg-indigo-500">
        Call to Action
      </Button_cva>

      <hr className="m-5"/>

      <Card logoSrc={'/logo_facebook.svg'} company="Senior UI Developer" title="Senior UI Developer" rate="$120/hr"/>
      
    </div>
  );
}
export default App;
