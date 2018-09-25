module.exports = function getZerosCount(number, base) {
    let allFactors, pArr = [], qArr = [], result = [];

    // факторизуем систету счисления
    allFactors = getAllFactorsFor(base);

    // находим все степени base и квадраты
    for (let i = 0, len = allFactors.length; i < len; i++) {

        const item = allFactors[i];
        const pIndex = pArr.indexOf(item);

        if ( pIndex == -1 ) {
            pArr.push(item);
            qArr.push(1);
        } else {
            qArr[pIndex]++;
        }
    }

    for (let i = 0, len = pArr.length; i < len; i++) {

        const pItem = pArr[i];
        const qItem = qArr[i];
        let count = 0;
        let divider = pItem;

        // Применяем формулу Лежандра для каждого pItem
        while (divider < number) {

            count += Math.floor( number / divider );
            divider = divider * pItem;
        }

        result.push(Math.floor( count / qItem ));
    }

    // Минимальное число это искомое количество нулей
    return  Math.min(...result);
}

function getAllFactorsFor(remainder) {

  var factors = [];

  for (let i = 2; i <= remainder; i++) {
      while (remainder % i == 0) {
          factors.push(i);
          remainder /= i;
      }
  }

  return factors;
}