import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "../helpers/classNames";
import { Fragment } from "react";
import { applyCategoryTheme } from "../helpers/applyCategoryTheme";
import { IoColorPaletteOutline } from "react-icons/io5";



function ColorsListBox({colors,currentColor,setCurrentColor}) {

    const currentTheme = applyCategoryTheme(currentColor.value);
    return (
      <Listbox
        as="div"
        value={currentColor}
        onChange={setCurrentColor}
        className="flex-shrink-0"
      >
        {({ open }) => (
          <>
            <Listbox.Label className="sr-only">Pick a color</Listbox.Label>
            <div className="relative">
              <Listbox.Button
                className={classNames(
                  `${currentTheme.background} ${currentTheme.hoverBackground}`,
                  "relative inline-flex items-center whitespace-nowrap rounded-full group transition-colors px-2 py-2 text-sm font-medium text-gray-500 sm:px-3"
                )}
              >
                <IoColorPaletteOutline
                  className={classNames(
                    `${currentTheme.textLight} ${currentTheme.textLightGroupHover}`,
                    "h-5 w-5 flex-shrink-0 sm:-ml-1"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    `${currentTheme.textLight} ${currentTheme.textLightGroupHover}`,
                    "hidden truncate sm:ml-2 sm:block"
                  )}
                >
                  {currentColor.name}
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {colors.map((color) => (
                    <Listbox.Option
                      key={color.value}
                      className={({ active }) =>
                        classNames(
                          active ? color.background : "bg-white",
                          "group relative cursor-pointer select-none px-3 py-2",
                          color.textLight
                        )
                      }
                      value={color}
                    >
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            "block truncate font-medium",
                            color.text,
                            color.textHover
                          )}
                        >
                          {color.name}
                        </span>
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    );
}

export default ColorsListBox
