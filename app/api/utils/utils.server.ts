import { badRequest } from "./request.server";

export function handleError(err: any) {
  return badRequest({message: err.message, ...err});
}

export function getRandomColor(): string {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export function getRandomColor2(number: number) {
  const hue = number * 137.508; // use golden angle approximation
  return `hsl(${hue},50%,75%)`;
}

export const getLineColorByAccountName = (accountName: string, index: number): string => {
  let color = '';

  switch (accountName) {
    case 'Ascensus (RC)': {
      color = '#cccc00';
      break;
    }
    case 'Paychex (CSG)': {
      color = '#66ccff';
      break;
    }
    case 'Ascensus (Omnyon)': {
      color = '#005ce6';
      break;
    }
    case 'Empower (Praxis)': {
      color = '#e62e00';
      break;
    }
    case 'Fidelity (GD)': {
      color = '#368727';
      break;
    }
    default: {
      color = colorList[index] ?? getRandomColor();
    }

  }

  return color;
};

export const colorList = [
  "#8080ff", //navy
  '#009933', //green
  '#996633', //brown
  '#0099cc', //blue
  '#ff9933', //orange
  '#800080', //purple
  '#663300', //dark brown
  '#0000FF', //blue
  '#008000', //green
  '#FFA500', // orange
  '#808000', //olive
  '#00FF00', //lime
  '#800000', //maroon
  '#00FFFF', //aqua
  '#008080', //team
  '#000080', //navy
  '#FF00FF', //fushua,
  '#808080' //gray
];

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
