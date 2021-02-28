const firstFive = ({ str, baseNegativeSpace = -1.5 }) => {
  let i = 0;
  let pt = 0;
  let retStr = '';
  const steps = stepsFiller(1, 2.6, 5).reverse();
  console.log({ steps })
  while (i < 5) {
    if ((str[pt] !== ' ') && (str[pt] !== '\n') && (str[pt] !== '\t')) {
      retStr += `<span style="font-size: ${steps[i]}em; margin-left: ${steps[i] * baseNegativeSpace}px;">${str[pt]}</span>`;
      pt++;
      i++;
    } else {
      retStr += str[pt];
      pt++;
    }
  }

  retStr += str.slice(pt);

  return retStr;
};

const stepsFiller = (fromI, toI, steps) => {
  const diff = (toI - fromI) / steps;
  const rr = new Array(steps).fill(0);
  return rr.map((e, i) => fromI + ((i + 1) * diff));
};

const applyStyle = query => {
  const contents = document.querySelector(query).innerHTML;
  console.log({ contents });
  document.querySelector(query).innerHTML = firstFive({ str: contents });
}

applyStyle('.trans > p');

