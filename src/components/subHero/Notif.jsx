import React from "react";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const Notif = () => {
  return (
    <div>
      <Chip color="warning" variant="solid">
        Technology
      </Chip>
      <Chip color="warning" variant="bordered">
        shapes
      </Chip>
      <Chip color="warning" variant="light">
        society,
      </Chip>
      <Chip color="warning" variant="flat">
        connecting
      </Chip>
      <Chip color="warning" variant="faded">
        people
      </Chip>
      <Chip color="warning" variant="shadow">
        worldwide
      </Chip>
      <Chip color="warning" variant="dot" className="text-white">
        ❤️
      </Chip>
    </div>
  );
};

export default Notif;
