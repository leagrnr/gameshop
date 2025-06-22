export const calculateCartTotal = (items) => {
  return items.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)
}
