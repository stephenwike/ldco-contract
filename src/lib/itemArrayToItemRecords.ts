export function itemArrayToItemRecords<T extends { _id: string }>(arr: T[]): Record<string, T> {
  return arr.reduce((acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {} as Record<string, T>);
}
