function getRate(proCount: number, conCount: number) {
  const pro = String((proCount / (proCount + conCount)) * 100);
  const con = String((conCount / (proCount + conCount)) * 100);

  return { proRate: Number(pro), conRate: Number(con) };
}

export default getRate;
