export function itemArrayToItemRecords<T extends { id: string }>(arr: T[]): Record<string, T> {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, T>);
}
