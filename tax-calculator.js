var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10,
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },

  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
// *******ADDS TOTAL COMPANY SALES ARRAY******
  salesData.forEach(function(company){
    var compSales = 0
    company['sales'].forEach(function(sales){
        compSales += sales
    })
      company['sales'] = compSales
    })

// *********CALCULATES TOTAL TAXES AND PUTS IT INTO OBJECT
  var provinceTax = Object.keys(taxRates)
  salesData.forEach(function(company){
    provinceTax.forEach(function(tax){
      if (company['province'] == tax){
        company['totalTaxes'] = company['sales'] * taxRates[tax]
      }
    })
  })

  // ********UNIQUE COMPANIES*****

  var companySales = {}
  salesData.forEach(function(uniqueCompany){
    if (!companySales.hasOwnProperty(uniqueCompany['name'])){
      companySales[uniqueCompany['name']] = ''
    }
  })

  var companyKeyNames = Object.keys(companySales)

  companyKeyNames.forEach(function(companyName){
    var allSales =
    {
      totalCompSales: 0,
      totalTaxSales: 0
    }

    salesData.forEach(function(company){
      if (companyName == company['name']){
        allSales['totalCompSales'] += company['sales']
        allSales['totalTaxSales'] += company['totalTaxes']
      }
      companySales[companyName] = allSales
    })
  })
  return companySales
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/