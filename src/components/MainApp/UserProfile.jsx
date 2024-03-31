
import ProfileMenu from "./ProfileMenu";
import UserAvatar from "./UserAvatar";

function UserProfile() {
  
  
  return (
    <div className="relative flex items-center gap-3">
      <UserAvatar />
      <div
        className="block h-6 w-px bg-gray-200"
        aria-hidden="true"
      />
      <ProfileMenu />
    </div>
  );
}

export default UserProfile;
