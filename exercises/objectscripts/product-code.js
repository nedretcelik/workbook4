
function getSupplierCode(partCode) {
    const positionOfColon = partCode.indexOf(":");
    return partCode.substring(0, positionOfColon);
  }
  
  function getProductNumber(partCode) {
    const positionOfColon = partCode.indexOf(":");
    const positionOfHyphen = partCode.indexOf("-");
    return partCode.substring(positionOfColon + 1, positionOfHyphen);
  }
  
  function getSize(partCode) {
    const positionOfHyphen = partCode.indexOf("-");
    return partCode.substring(positionOfHyphen + 1);
  }
  
  function parsePartCode(partCode) {
      let supplierCode = getSupplierCode(partCode);
      let productNumber = getProductNumber(partCode);
      let size = getSize(partCode); 
      let partCodeObject = {
          supplierCode: supplierCode,
          productNumber: productNumber,
          size: size
      }
      return partCodeObject;
  }
  
  const partCode1 = "ACME:123-L";
  const partCode2 = "DI:12345-M";
  const partCode3 = "ACE:1-12";
  
  let returnedObject = parsePartCode(partCode1);
  console.log(returnedObject);





















/* "use strict";

// "XYZ:1234-L

/* const partCode1 = "ACME:123-L";
const partCode2 = "DI:12345-M";
const partCode3 = "ACE:1-12"; */

/* 
function getPartCode(partCode) {
  const positionOfColon = partCode.indexOf(":");
  let supplierCode = partCode.substring(0, positionOfColon);

  // ACME

  const positionOfHyphen = partCode.indexOf("-");
  let productNumber = partCode.substring(positionOfColon + 1, positionOfHyphen);

  // 123

  let sizePart = partCode.substring(positionOfHyphen + 1);

  // L

  let productCode = {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: sizePart,
  };

  return productCode;
}

const partCode1 = "ACME:123-L";
const partCode2 = "DI:12345-M";
const partCode3 = "ACE:1-12";

let part1 = getPartCode(partCode1);

console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size); */
