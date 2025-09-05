import { MoveRight } from "lucide-react";

function DirectionFlow({ DirectionHeader }: { DirectionHeader: string }) {
  return (
    <div className="flex flex-col text-center justify-center w-full">
      <h1>{DirectionHeader}</h1>
      <MoveRight size={50} className="w-full rotate-[90deg] md:rotate-[0deg]" />
    </div>
  );
}

export default DirectionFlow;
