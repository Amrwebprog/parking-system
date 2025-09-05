import useChoseGate from "../GateHooks/useChoseGate";
import GateHeader from "../GateUI/GateHeader";

function ChoseGate() {
  const { data } = useChoseGate();
  console.log(data);
  return (
    <>
      <GateHeader />
    </>
  );
}

export default ChoseGate;
