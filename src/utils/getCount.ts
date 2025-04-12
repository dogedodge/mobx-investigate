import CounterStore from "../stores/CounterStore";

export function getCount(countStore: CounterStore) {
  return countStore.count;
}
