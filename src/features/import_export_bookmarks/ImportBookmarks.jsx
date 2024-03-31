import { HiOutlineDownload } from "react-icons/hi";
import { MdCloudUpload } from "react-icons/md";
import { RiFileWarningLine } from "react-icons/ri";

import Button from "../../components/buttons/Button";
import FileInput from "../../components/inputs/FileInput";
import Heading from "../../components/Heading";
import { processHTMLContent } from "../../helpers/processImportBookmarks/processHTMLContent";

function ImportBookmarks() {
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;

        processHTMLContent(content);
      };
      reader.readAsText(file);
    }
  }
  return (
    <div disabled={true}>
      <Heading
        className="text-lg mb-3 pb-2 text-slate-300 border-b-[1px] border-lightOutline dark:border-darkOutline"
        level={2}
      >
        Import Bookmarks
      </Heading>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 border-b-[1px] py-3">
          <HiOutlineDownload className="inline-block w-6 h-6 text-primary600 dark:text-primaryDark600" />
          <p className="text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark">
            Download bookmarks from your browser as{" "}
            <span className="font-bold dark:text-white">.html</span> file
          </p>
        </div>

        <FileInput
          accept=".html"
          label="Choose .html file for import"
          id="import-bookmarks"
          onChange={handleFileChange}
          disabled={true}
          className="xl:max-w-none"
        />

        <div className="flex gap-3 border-b-[1px] py-3">
          <MdCloudUpload className="inline-block w-6 h-6 text-primary600 dark:text-primaryDark600" />
          <p className="text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark">
            Import your <span className="font-bold dark:text-white">.html</span>{" "}
            bookmarks file
          </p>
        </div>

        <div className="flex gap-3 border-b-[1px] py-3">
          <RiFileWarningLine
            size={24}
            className="block flex-shrink-0 text-primary600 dark:text-primaryDark600"
          />
          <p className="text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark">
            Note: Bookmark structure will be flattened to fit the app&apos;s
            two-layer structure. Deeply nested folders in the imported file will
            be converted to categories within a single collection.
          </p>
        </div>

        <Button disabled={true} onClick={() => {}} variation="primary">
          This feature is still in development and is currently unavailable.
        </Button>
      </div>
    </div>
  );
}

export default ImportBookmarks;
