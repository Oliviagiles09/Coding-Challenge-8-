// Task 1 
function calcualteSalary(baseSalary, bonus, taxRate) {
  let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
  return 'Net Salary: $${netSalary}';
}

consol.log(calculateSalary(5000, 500, 0.1));
consol.log(calculateSalary(7000, 1000, 0.15));

// Task 2
function calculateDiscount(price, discountedRate) {
  let finalPrice = price - (price * discountRate);
  return 'Final Price: $${finalPrice.toFixed(2)}';
}

consol.log(calculateDiscount(100, 0.2));
consol.log(calculateDiscount(250, 0.15));
