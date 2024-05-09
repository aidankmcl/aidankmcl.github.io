export const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

export const formatDate = (date: Date) => date.toUTCString().split(" ")[2] + " " + date.getUTCFullYear();

export const displayDateRange = (start: Date, end: Date | undefined) =>
  formatDate(start) + " - " + (end ? formatDate(end) : "Current");
