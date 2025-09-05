import { MoveDown } from "lucide-react";

function CardFlow({
  FlowHeader,
  FlowProperties,
}: {
  FlowHeader: string;
  FlowProperties: string[];
}) {
  return (
    <>
      <div className="flex flex-col gap-1 justify-center">
        <div className="border-1 p-5 border-black min-h-[150px] text-center flex justify-center items-center">
          {FlowHeader}
        </div>
        <div className="text-center w-full flex justify-center rotate-180">
          <MoveDown />
        </div>
        <div className="border-1  py-10 px-20 gap-2 rounded-full border-black min-h-[150px] text-center  justify-center items-center flex flex-col">
          {FlowProperties.map((el: string, key: number) => (
            <h1 key={key}>{el}</h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardFlow;
