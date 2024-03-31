import { Tab } from "@headlessui/react";
import { classNames } from "../../helpers/classNames";
import ImportBookmarks from "./ImportBookmarks";
import ExportBookmarks from "./ExportBookmarks";

export default function ImportExportBookmarks() {
  return (
    <div className="w-full max-w-2xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            key="import"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2",
                selected
                  ? "bg-secondaryBg dark:bg-secondaryBgDark text-primary600 dark:text-primaryDark600 shadow"
                  : "text-blue-100 dark:bg-secondaryBgDark/[0.12] hover:text-white"
              )
            }
          >
            Import Bookmarks
          </Tab>
          <Tab
            key="export"
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2",
                selected
                  ? "bg-secondaryBg dark:bg-secondaryBgDark text-primary600 dark:text-primaryDark600 shadow"
                  : "text-blue-100 dark:bg-secondaryBgDark/[0.12] hover:text-white"
              )
            }
          >
            Export Bookmarks
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            key="import"
            className={classNames(
              "rounded-xl shadow-md border bg-secondaryBg dark:bg-secondaryBgDark p-3",
              "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2"
            )}
          >
            <ImportBookmarks />
          </Tab.Panel>
          <Tab.Panel
            key="export"
            className={classNames(
              "rounded-xl bg-secondaryBg dark:bg-secondaryBgDark shadow-md border p-3",
              "ring-white/60 ring-offset-2 ring-offset-lightOutline dark:ring-offset-darkOutline focus:outline-none focus:ring-2"
            )}
          >
            <ExportBookmarks />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
