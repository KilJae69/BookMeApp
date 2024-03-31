import useAuthStore from "../../store/useAuthStore";

function UserAvatar() {
  const { user } = useAuthStore();
  const avatarUrl = user?.user_metadata.avatar
    ? `${user.user_metadata.avatar}?t=${new Date(user?.updated_at).getTime()}`
    : `/default-user.jpg`;

  return (
    <div className="-m-1.5 flex items-center p-1.5 ">
      <img
        className="h-10 w-10 rounded-full bg-bgPrimary50 dark:bg-bgDarkPrimary"
        src={avatarUrl}
        alt="User profile picture"
      />
      <div className="hidden sm:flex sm:items-center">
        <span
          className="ml-4 text-sm md:text-lg font-semibold leading-6 text-textPrimary900 dark:text-textPrimaryDark"
          aria-hidden="true"
        >
          {user?.user_metadata.username ||
            user?.user_metadata.user_name ||
            user?.user_metadata.full_name}
        </span>
      </div>
    </div>
  );
}

export default UserAvatar;
