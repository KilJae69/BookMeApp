import UpdateUserDataForm from "../features/user/UpdateUserDataForm";
import UpdateUserPasswordForm from "../features/user/UpdateUserPasswordForm";
import useAuthStore from "../store/useAuthStore";
import Heading from "../components/Heading";
import ImportExportBookmarks from "../features/import_export_bookmarks/ImportExportBookmarks";
import Button from "../components/buttons/Button";

function Account() {
  const { user } = useAuthStore();
  return user ? (
    <div className="flex flex-col items-center justify-center pt-5 px-2 sm:px-5">
      <Heading
        className="text-xl md:text-3xl text-primary600 dark:text-white"
        level={1}
      >
        Manage your account
      </Heading>
      <Button className="mt-3 text-xl" to={-1} variation="link">
        Go back
      </Button>

      <div className="flex flex-col gap-5 mt-10 w-full max-w-[1200px]">
        <UpdateUserDataForm />
        <UpdateUserPasswordForm />
        <div className="flex items-center justify-center">
          <ImportExportBookmarks />
        </div>
        
      </div>
    </div>
  ) : null;
}

export default Account;
