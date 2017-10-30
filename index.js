// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue >= revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue >= revenue
  }).map (function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, matchCriteria) {
  return drivers.filter (function (driver) {
    for (const key in matchCriteria) {
    return driver[key] === matchCriteria[key]
  }
  })
}

function exactMatchToList(drivers, matchCriteria) {
  return exactMatch(drivers, matchCriteria).map (function (driver) {
    return driver.name
  })
}
