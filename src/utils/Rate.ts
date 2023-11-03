function getRate(count: number, sum: number) {
  const rate = String((count / sum) * 100);
  return parseInt(rate, 10);
}

export default getRate;
