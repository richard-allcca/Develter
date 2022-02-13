export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};

// Notas:
// redondear la opacity * 255 y luego con toString comvertir ese valor a hexadecimal con base 16
