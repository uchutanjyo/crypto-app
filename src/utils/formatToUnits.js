export const formatToUnits = (number, precision) => {
    if (number === NaN|| number === undefined) {
      return '∞'
    } else {
    const abbrev = ['', 'k', 'm', 'b', 't'];
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
    const suffix = abbrev[order];
    return (number / Math.pow(10, order * 3)).toFixed(precision) + suffix;
    }
  }