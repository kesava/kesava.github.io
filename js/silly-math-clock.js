
window.addEventListener('orientationchange', function (e) {
  var isUpright = (window.orientation == 'portrait');
});

const pickRandom = arr => {
  const len = arr.length;
  const index = Math.floor(Math.random() * len);
  return arr[index];
}

const genArr = ({ init, step, number }) => {
  let retVal = [];
  for (let i = 0; i < number; i++)  {
    retVal[i] = init + (step * i);
  }
  return retVal;
}

const randSub = x => {
  const higher = Math.floor(Math.random() * 10000);
  const lower = higher - x;
  return `${higher} - ${lower}`;
}

const sqrt = x => `sqrt ${x * x}`;

const longDiv = x => {
  const denom = Math.floor(Math.random() * 10000);
  const num = denom * x;
  return `${denom} // ${num}`;
}

const sqrtSub = x => {
  const higher = Math.floor(Math.random() * 1000);
  const lower = higher - x;
  return `sqrt (${higher} ^ 2 - ${lower} ^ 2)`
}

const simpleMul = x => {
  const y = Math.floor(x / 2);
  if (y * 2 === x) {
    return `${y} xx 2`;
  }
  return `(${y} xx 2) + 1`;
}

const linearEq1 = x => {
  const higher = Math.floor(Math.random() * 100);
  const lower = higher - x;
  return `${higher} = x + ${lower}`;
}

const linearEq2 = x => {
  const higher = Math.floor(Math.random() * 100);
  const lower = higher - x;
  return `-${higher} = -${lower} - x`;
}

const linearEq3 = x => {
  const higher = Math.floor(Math.random() * 100);
  const lower = higher - x;
  return `-${higher} = -x - ${lower}`;
}

const ratio1 = x => {
  const num1 = pickRandom(genArr({ init: 10, step: 10, number: 10 }));
  const num2 = pickRandom(genArr({ init: 2, step: 2, number: 5 }));
  const denom1 = (num1 * x) / num2;
  return `${num1} / ${denom1} = ${num2} / x`;
}

const ratio2 = x => {
  const num1 = pickRandom(genArr({ init: 10, step: 10, number: 10 }));
  const denom1 = 1;
  const num2 = (num1 * x);
  return `${num1} / ${denom1} = ${num2} / x`;
}

const fngen = [randSub, sqrt, longDiv, sqrtSub, simpleMul, linearEq1, linearEq2, linearEq3, ratio1, ratio2];


const makeClock = ({ hh = false, mm = false, ss = false }) => {
  const d = new Date();
  let ret = '';
  if (hh) {
    ret = `\`${pickRandom(fngen)(d.getHours())}\``;
  }

  if (mm) {
    ret = `\`${pickRandom(fngen)(d.getMinutes())}\``;
  }

  if (ss) {
    ret = `\`${pickRandom(fngen)(d.getSeconds())}\``;
  }

  return ret;
};

document.getElementById('hh').innerHTML = makeClock({ hh: true });
setInterval(() => {
  document.getElementById('hh').innerHTML = makeClock({ hh: true });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "hh"]);
}, 60000);

document.getElementById('mm').innerHTML = makeClock({ mm: true });
setInterval(() => {
  document.getElementById('mm').innerHTML = makeClock({ mm: true });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "mm"]);
}, 10000);

document.getElementById('ss').innerHTML = makeClock({ ss: true });
setInterval(() => {
  document.getElementById('ss').innerHTML = makeClock({ ss: true });
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "ss"]);
}, 1000);