// Code your solution here

function findMatching(drivers, string) {
    const names = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return names
} 

function fuzzyMatch(drivers, query) {
    const queryArray = drivers.filter(driver => driver.substr(0,2) === query)
    return queryArray
}

function matchName(drivers, string) { 
    const nameAndHometowns = drivers.filter(drivers => drivers.name === string)
    return nameAndHometowns
}