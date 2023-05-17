function getRate(count: number, sum: number) {
  const rate = String((count / sum) * 100);
  return Number(rate);
}

export default getRate;
