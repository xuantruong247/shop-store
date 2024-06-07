"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Fillters
        <Plus size={20} />
        <Dialog
          open={open}
          as="div"
          className="relative z-40 lg:hidden"
          onClose={onClose}
        >
          {/* Background */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            {/* Dialog position */}
            <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              {/* Close Button */}
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={20} onClick={onClose} />} />
              </div>
              {/* Render the filters */}
              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilters;
