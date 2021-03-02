const debounce = (func, timer) => {
  let timeout = 0;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), timer);
  }
}

const inputVol = document.getElementById('vol');

const fraclookup = [
  ['కాలు', 'అర', 'ముక్కాలు'],
  ['వీసము', 'పరక', 'మువ్వీసము'],
  ['కాని', 'అరవీసము', 'ముక్కాని'],
  ['ప్రియ', 'అరకాని', 'ముప్ప్రియ'],
  ['సుర', 'రెండు సురలు', 'మూడు సురలు'],
  ['గోకరకాని', 'రెండు గోకరకానులు', 'మూడు గోకరకానులు']
];

const oddMarks = ["౸", "౹", "౺", "౻"];
const evenMarks = ["౦", "౼", "౽", "౾"];

const convert2baseN = ({ input, base, precision, accuracy }) => {

  const convertInternal = ({ input, iterationCount, accumulator }) => {
    if ((iterationCount < precision) && (input != 0.0)) {
      const nextStep = input * base;
      const integerPart = Math.floor(nextStep);
      const decimalPart = nextStep - Math.floor(nextStep);
      iterationCount = iterationCount + 1;
      accumulator.push(integerPart);
      return convertInternal({ input: decimalPart, iterationCount, accumulator });
    } else {
      return accumulator;
    }
  };

  return convertInternal({ input, iterationCount: 0, accumulator: [] });
}

const conversion = () => {
  const num = document.getElementById('vol').value;
  const decimalPart = (num.split('.').length > 1) ? `.${num.split('.')[1]}` : 0;
  const isEven = i => (i % 2) === 0;
  const lookupMark = (x, i) => isEven(i + 1) ? evenMarks[x] : oddMarks[x];
  const pow = (x, n) => Math.pow(x, n);

  const base4List = convert2baseN({ input: parseFloat(decimalPart), base: 4, precision: 6 });
  const base4Eq = (n, i) => `${n} * (1 / ${pow(4, i + 1)})`;
  const base4Marks = list => list.map(lookupMark);
  const teluguDescriptors = list => list.map((x, i) => fraclookup[i][x - 1]).filter(x => x !== undefined);

  document.getElementById('base4-markings').innerHTML = base4List.map((n, i) => `(${ base4Eq(n, i) })`).join(" + <br/>") + " = \n" + `0${decimalPart}`;
  document.getElementById('base4-lookup').innerHTML = base4List.map((x, i) => `${x} --> ${lookupMark(x, i)} (${isEven(i + 1) ? 'Even' : 'Odd'} position)`).join("<br/>");

  document.getElementById('base4').innerHTML = `${Math.floor(num)}.${base4Marks(base4List).join('')}`;
  document.getElementById('telugu').innerHTML = `${Math.floor(num)} ${teluguDescriptors(base4List).join(', ')}`;
  console.log('------------------------------------');
  console.log(base4Marks(base4List));
  console.log(teluguDescriptors(base4List));
  console.log('------------------------------------');
};

inputVol.addEventListener('keyup', debounce(conversion, 500));
conversion();