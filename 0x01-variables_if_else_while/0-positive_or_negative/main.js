const printIfN = (n = 0) => {
  if (n > 0) return `${n} is positive\n`;

  if (n < 0) return `${n} is negative\n`;

  return `${n} is zero\n`;
};

const a = Math.random() * 10;
const b = Math.random() * 10;

const n = a - b;

const res = printIfN(n);

console.log({ res, n });
