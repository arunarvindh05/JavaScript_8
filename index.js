
var requests = new XMLHttpRequest()// created XMLhttprequest object

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'
//the api url
requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
    console.log(data);
    //1. Get all the countries from Asia continent /region using Filter function
    let asiaRegionCountries = data.filter((country)=>country.region==='Asia')
    console.log("List of countries which are in Asia region :",asiaRegionCountries)

    //2. Get all the countries with a population of less than 2 lakhs using Filter function
    let populationLess2Lakhs = data.filter((country)=>country.population <= 200000)
    console.log("List of countries which have population less than 2 lakhs :",populationLess2Lakhs)

    //3. Print the following details name, capital, flag using forEach function
    data.forEach(element => {
        console.log("Name :"+element.name)
        console.log("Capital :"+element.capital)
        console.log("Flag :"+element.flag)
    });

    //4. Print the total population of countries using reduce function
    let sum=0
    let totalPopulation = data.map(d=>d.population).reduce((a,b) =>(a+b))
    console.log('Total Population of countries :',totalPopulation)

    //5. Print the country which uses US Dollars as currency.
    let usDollars = data.filter((country)=>(country.currencies.filter((cur)=>cur.code==='USD')).length>0)
    console.log('Country which uses US Dollars as currency :',usDollars)
}
