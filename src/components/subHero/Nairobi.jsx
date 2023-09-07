import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Nairobi = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none ">
      <Image
        alt="Woman listing to music"
        className="object-contain"
        height={100}
        src="https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Nairobi;
