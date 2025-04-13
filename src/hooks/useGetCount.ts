import { useCounterStore } from "../stores/StoreContext";

export const useGetCount = () => {
  const countStore = useCounterStore();
  return countStore.count;
};
