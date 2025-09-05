import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../libs/axios/AxiosInstance";

function useChoseGate() {
  const getData = async () => {
    const { data } = await axiosInstance.get("/master/gates");

    return data;
  };

  const { data } = useQuery({
    queryKey: ["GateData"],
    queryFn: getData,
  });
  return { data };
}

export default useChoseGate;
