function lowerCaseDrivers(array) {
  return array.map(driver => driver.toLowerCase());
}

function nameToAttributes(arr) {
  x = arr.map(driver => driver.split(' '));
  return x.map(function(ele) {
    rele = {};
    rele.firstName = ele[0];
    rele.lastName = ele[1];
    return rele
  })
}

function attributesToPhrase(arr) {
  return arr.map(function(ele) {
    return `${ele.name} is from ${ele.hometown}`
  })
}
