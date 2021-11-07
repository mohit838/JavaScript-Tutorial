//**Source Stackoverflow.com

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

// usage: Asia/Jakarta is GMT+7
convertTZ("2012/04/10 10:10:30 +0000", "Asia/Jakarta") // Tue Apr 10 2012 17:10:30 GMT+0700 (Western Indonesia Time)

// Resulting value is regular Date() object
const convertedDate = convertTZ("2012/04/10 10:10:30 +0000", "Asia/Jakarta") 
convertedDate.getHours(); // 17

// Bonus: You can also put Date object to first arg
const date = new Date()
convertTZ(date, "Asia/Jakarta") // current date-time in jakarta.