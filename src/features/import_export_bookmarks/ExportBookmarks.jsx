import { IoMdCloudDownload } from "react-icons/io";
import Button from "../../components/buttons/Button";
import { downloadBookmarksFile } from "../../helpers/downloadBookmarksFile";
import { generateBookmarkHTML } from "../../helpers/generateBookmarkHTML";
import Heading from "../../components/Heading";
import { useCollectionsForExport } from "./useCollectionsForExport";
import useAuthStore from "../../store/useAuthStore";
import Spinner from "../../components/Spinner";

function ExportBookmarks() {
  const { user } = useAuthStore();
  const { isLoading, collectionsForExport, error } = useCollectionsForExport(
    user.id
  );
  const handleExportClick = () => {
    // Placeholder for export functionality
    console.log("Export button clicked");
    const htmlContent = generateBookmarkHTML(collectionsForExport);
    downloadBookmarksFile(htmlContent);
  };

  return (
    <div>
      <Heading
        className="text-lg mb-3 pb-2 text-slate-300 border-b-[1px] border-lightOutline dark:border-darkOutline"
        level={2}
      >
        Export Bookmarks
      </Heading>
      {error && (
        <div className="text-red-500 flex flex-col gap-3">
          <p className="font-semibold">
            Sorry, we couldn&apos;t get your collections for export at this
            moment. Please try again later.
          </p>
          <span className="italic">{error.message}</span>
        </div>
      )}
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="huge" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border-b-[1px] py-3">
            <IoMdCloudDownload className="inline-block w-6 h-6 text-primary600 dark:text-primaryDark600" />
            <p className="text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark">
              Export your bookmarks as <span className="font-bold">.html</span>{" "}
              file
            </p>
          </div>
          <Button
            disabled={error}
            onClick={handleExportClick}
            variation="primary"
          >
            Download
          </Button>
        </div>
      )}
    </div>
  );
}

export default ExportBookmarks;
