function changeDateString(dateString: string): string {
  const dateObj = new Date(dateString);
  const formattedDate = `${dateObj.getFullYear()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getDate()}`;
  return formattedDate;
}

export default changeDateString;
