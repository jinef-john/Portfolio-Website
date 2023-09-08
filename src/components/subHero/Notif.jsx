import React from "react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Notif = () => {
  return (
    <div className="flex gap-4">
      <Chip color="warning" variant="bordered">
        Technology
      </Chip>
      <Chip color="warning" variant="flat">
        connects
      </Chip>
      <Chip color="warning" variant="faded">
        people
      </Chip>
      <Chip color="warning" variant="shadow">
        worldwide
      </Chip>
      <Chip color="warning" variant="dot" className="text-white">
        🇰🇪
      </Chip>
    </div>
  );
};

export default Notif;
