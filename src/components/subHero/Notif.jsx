import React from "react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Notif = () => {
  return (
    <div className="flex gap-2 sm:gap-4 flex-wrap max-w-[90vw] justify-center">
      <Chip color="warning" variant="bordered" size="sm">
        Technology
      </Chip>
      <Chip color="warning" variant="flat" size="sm">
        connects
      </Chip>
      <Chip color="warning" variant="faded" size="sm">
        people
      </Chip>
      <Chip color="warning" variant="shadow" size="sm">
        worldwide
      </Chip>
      <Chip color="warning" variant="dot" className="text-white" size="sm">
        🇰🇪
      </Chip>
    </div>
  );
};

export default Notif;
