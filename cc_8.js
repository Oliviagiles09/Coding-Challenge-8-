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

// Task 3 
let calculateServiceFee = (amount, serviceType) => {
  let fee = 0;
  switch (serviceType) {
    case 'Premium':
      fee = amount * 0.15;
      break;
    case 'Standard':
      fee = amount * 0.10;
      break;
    case 'Basic':
      fee = amount * 0.05;
      break;
  }
  return 'Service Fee: $${fee.toFixed(2)}';
};

consol.log(calculateServiceFee(200, "Premium"));
consol.log(calculateServiceFee(500, "Standard"));

// Task 4 
function calculaterentalCost(days, carType, insurance = false) {
  let dailyRate = 0;
  switch (carType) {
    case 'Economy':
      dailyRate = 40;
      break;
    case 'Standard':
      dailyRate = 60;
      break;
    case 'Luxury':
      dailyRate = 100;
      break;
  }
  let insuranceCost = insurance ? 20 : 0;
  let totalCost = (dailyRate + insuranceCost) * days;
  return 'Total Rental Cost: $${totalCost}';
}

consol.log(calculateRentalCost(3, "Economy", true));
consol.log(calculateRentalCost(5, "Luxury", false));

// Task 5 
function calculateLoanPayment(principal, rate, time) {
  let totalPayment = principal + (principal * rate * time);
  return 'Total Payment: $${totalPayment.toFixed(2)}';
}

consol.log(calculateLoanPayment(1000, 0.05, 2));
consol.log(calculateLoanPayment(5000, 0.07, 3));

// Task 6 
let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
  return transactions.filter(filterFunction);
}

consol.log(filterLargeTransactions(transactions, amount => amount > 1000));

// Task 7 
function createCartTracker() {
  let total = 0;
  return function (amount) {
    total += amount;
    return 'Total Cart Value: $${total}';
  };
}

let cart = createCartTracker();
consol.log(cart(20));
consol.log(cart(35));

// Task 8 
function calculateSavings(years, amount) {
  if (years < 10) {
    return calculateSavings(years + 1, amount * 1.05);
  }
  return 'Projected Savings: $${amount.toFixed(2)}';
};

consol.log(calculateSavings(8, 1000));
consol.log(calculateSavings(5, 5000));
