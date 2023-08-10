import * as wanakana from "wanakana";

export function convertToKana(textInput) {
  return wanakana.toKana(textInput); //To change input to JP Characters directly
}

export function getVisualDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${day} / ${month} / ${year}`;
}
