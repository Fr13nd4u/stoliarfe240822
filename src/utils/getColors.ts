export const getRandomColor = () => {
  const colorsArray = ['#74B3CE', '#172A3A', '#253B17', '#3B1717', '#17173B', '#3B3517', '#BD0996'];
  const randomIndex = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomIndex];
}