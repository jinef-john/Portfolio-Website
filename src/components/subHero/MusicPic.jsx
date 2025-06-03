import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const MusicPic = () => {
  return (
    <>
      <Card className="py-4 w-[240px] sm:w-[270px] max-w-[90vw]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Muziki Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Africa Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src="https://images.unsplash.com/photo-1577290563799-a269c03912a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5haXJvYml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default MusicPic;
