export const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
