// Function to calculate NHIF deductions based on monthly gross salary
function NHIFDeductions(Salary) {
    if (Salary <= 5999) {
      return 150;
    }
    if (Salary <= 7999) {
      return 300;
    }
    if (Salary <= 11999) {
      return 400;
    }
    if (Salary <= 14999) {
      return 500;
    }
    if (Salary <= 19999) {
      return 600;
    }
    if (Salary <= 24999) {
      return 750;
    }
    if (Salary <= 29999) {
      return 850;
    }
    if (Salary <= 34999) {
      return 900;
    }
    if (Salary <= 39999) {
      return 950;
    }
    if (Salary <= 44999) {
      return 1000;
    }
    if (Salary <= 49999) {
      return 1100;
    }
    if (Salary <= 59999) {
      return 1200;
    }
    if (Salary <= 69999) {
      return 1300;
    }
    if (Salary <= 79999) {
      return 1400;
    }
    if (Salary <= 89999) {
      return 1500;
    }
    if (Salary <= 99999) {
      return 1600;
    }
    return 1700;
  }
  
  // Function to calculate NSSF deductions based on monthly gross salary
  function NSSFContributions(Salary) {
    if (Salary <= 6000) {
      return Salary * 0.06;
    }
    if (Salary <= 18000) {
      return Salary * 0.06;
    }
    return 0;
  }
  
  // Function to calculate tax deductions based on monthly taxable pay
  function TaxDeductions(taxable) {
    if (taxable <= 24000) {
      return taxable * 0.1;
    }
    if (taxable <= 32333) {
      return taxable * 0.25;
    }
    return taxable * 0.3;
  }
  
  // Function to calculate net salary
  function NetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const Salary = basicSalary + benefits;
  
    //  NSSF contributions
    const nssfContributions = NSSFContributions(Salary);
  
    // taxable pay
    const taxable = Salary - nssfContributions;
  
    // Calculate tax deductions
    const taxDeductions = TaxDeductions(taxable);
  
    // Calculate NHIF deductions
    const nhifDeductions = NHIFDeductions(Salary);
  
    // Calculate net salary
    const netSalary = Salary - taxDeductions - nhifDeductions;
  
    // Return the calculated values
    return {
      basicSalary,
      benefits,
      Salary,
      nssfContributions,
      taxable,
      taxDeductions,
      nhifDeductions,
      netSalary,
    };
  }
  
  // Prompt the user for input
  const inputBasicSalary = parseFloat(prompt("Enter the basic salary:"));
  const inputBenefits = parseFloat(prompt("Enter the benefits:"));
  
  // Calculate net salary
  const salaryDetails = calculateNetSalary(inputBasicSalary, inputBenefits);
  console.log(salaryDetails);
  


