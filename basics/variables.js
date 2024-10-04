const accountId = 144553
let accountEmail = "rajpoddar8907@gmail.com"
var accountPassword ="12345" //pefer not to use var
accountCity = "Kolkata"
let accountState;

/*
{
 the curly barces is called scope !
}
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

// accountId=2 //not allowed 

accountEmail ="hc@hc.com"
accountPassword="1212"
accountCity="Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
