import { Avatar } from "../components/Avatar";

export function AvatarListPage() {
  return (
    <ul className="avatarList">
      <Avatar name="jjangoo" status="online" />
      <Avatar name="jjanga" status="online" />
      <Avatar name="mangoo" status="online" />
      <Avatar name="bong" status="online" />
    </ul>
  );
}

export default AvatarListPage;
