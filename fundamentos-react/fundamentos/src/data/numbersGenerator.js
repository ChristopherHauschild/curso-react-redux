function numbersDiferent(min, max, array) {
  const aleatory = parseInt(Math.random() * (max + 1 - min)) + min

  return array.includes(aleatory) ?
    numbersDiferent(min, max, array) : aleatory
}

function numbersGenerator(quant) {
  const numbers = Array(quant)
    .fill(0)
    .reduce((nums) => {
      const newNumber = numbersDiferent(1, 60, nums)
      return [ ...nums, newNumber ]
    }, [])
    .sort((a, b) => a - b)

  return numbers
}

export { numbersGenerator }

