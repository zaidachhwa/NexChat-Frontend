const colors = [
  "rgba(255, 107, 107, 1)", // Coral Red
  "rgba(77, 150, 255, 1)", // Soft Blue
  "rgba(107, 203, 119, 1)", // Fresh Green
  "rgba(255, 217, 61, 1)", // Warm Yellow
  "rgba(132, 94, 194, 1)", // Purple
  "rgba(0, 201, 167, 1)", // Teal
  "rgba(255, 150, 113, 1)", // Peach
  "rgba(44, 115, 210, 1)", // Royal Blue
  "rgba(249, 248, 113, 1)", // Light Lime
  "rgba(195, 74, 54, 1)", // Brick Red
  "rgba(64, 64, 64, 1)",
];

const colorsRGBAOpacity = [
  "rgba(255, 107, 107, 0.3)", // Coral Red
  "rgba(77, 150, 255, 0.3)", // Soft Blue
  "rgba(107, 203, 119, 0.3)", // Fresh Green
  "rgba(255, 217, 61, 0.3)", // Warm Yellow
  "rgba(132, 94, 194, 0.3)", // Purple
  "rgba(0, 201, 167, 0.3)", // Teal
  "rgba(255, 150, 113, 0.3)", // Peach
  "rgba(44, 115, 210, 0.3)", // Royal Blue
  "rgba(249, 248, 113, 0.3)", // Light Lime
  "rgba(195, 74, 54, 0.3)", // Brick Red
  "rgba(64, 64, 64, .3)",
];

export const generateColor = (index = 0) => {
  return colorsRGBAOpacity[index % colorsRGBAOpacity.length];
};

export const generateColorOpacity = (index = 0) => {
  return colors[index % colors.length];
};
