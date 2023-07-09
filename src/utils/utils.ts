import { IProduct } from "src/models/IProduct";

export const colorUtility = (jsonData: IProduct[]) => {
  let colors :string[] = [];
  jsonData.forEach(({ color }) => {
    colors.push(...color);
  });
  colors = [...new Set(colors)];
  debugger
  return colors;
};

/**
 * Trasforma una stringa in Capitalized ( lettera maiuscola iniziale )
 * @param {string} string
 * @returns string
 */
export const toCapitalized = (string: string) => {
  if (string === null || string === undefined || string === "") return "";
  return `${string[0].toUpperCase()}${string.substring(1)}`;
};
