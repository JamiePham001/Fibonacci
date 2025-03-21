import "./styles.css";

const fibonnaci = (input) => {
  if (input === 0) {
    return [];
  } else if (input === 1) {
    return [0];
  } else if (input === 2) {
    return [0, 1];
  }

  let fibArray = fibonnaci(input - 1);

  const nextVal = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

  fibArray.push(nextVal);

  return fibArray;
};
console.log(fibonnaci(5));
