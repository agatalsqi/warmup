module.exports = function warmup(temperature) {
  if (temperature > 0) return (temperature*(9/5)+32);
  else return (32-(-temperature)*9/5);
}