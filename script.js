//! a) Get all the countries from Asia continent /region using Filter method

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    console.log("\n\nAsian continent:\n\n")
    var reg = result.filter((ele)=>ele.region==="Asia")
    var region = reg.map((ele)=>console.log("Country name:",ele.name.common))
}

//! b) Get all the countries with a population of less than 2 lakhs using Filter method

const pop = new XMLHttpRequest();
pop.open("GET","https://restcountries.com/v3.1/all",true)
pop.send();
pop.onload=function(){
    var countriesData  = pop.response;
    var countriesWithLowPopulation = JSON.parse(countriesData)
    console.log("\n\nThe countries with population of less than 2 lakhs:\n\n");
    var res = countriesWithLowPopulation.filter((ele1)=>ele1.population<200000)
    var lessPopulation = res.map((ele1)=>console.log("Countries With Low Population:", ele1.name.common))
}

//! c) Print the following details name, capital, flag, using forEach method

const fg = new XMLHttpRequest();
fg.open("GET","https://restcountries.com/v3.1/all",true)
fg.send();
fg.onload=function(){
    var data  = fg.response;
    var result = JSON.parse(data)
    console.log("\n\nprinting countries Name, Capital, Flag:\n\n");  
    var flag = result.forEach((n1)=>console.log("Name:", n1.name.common,"Capital:", n1.capital, "Flag:", n1.flag))
}

//! d) Print the total population of countries using reduce function

const pop1 = new XMLHttpRequest();
pop1.open("GET","https://restcountries.com/v3.1/all",true)
pop1.send();
pop1.onload=function(){
    var data  = pop1.response;
    var result = JSON.parse(data)
    console.log("\n\nTotal Population of all countries:");
    // var reg1 = result.reduce((sum,i)=>sum+i.population,0);
    // var populationUsingReduce = reg1.map((sum,i)=>console.log("Population:", sum+i.name.common))
    // var reg1=result.reduce((sum,i)=>sum+i.population,0)
    var reg1=result.reduce((sum,i)=>{ return sum+i.population},0)
    console.log("Population:", reg1);
}

//! e) Print the country that uses US dollars as currency

const request1 = new XMLHttpRequest();
  request1.open("GET","https://restcountries.com/v3.1/all",true)
  request1.send();
  request1.onload=function(){
      var data = request1.response;
      var result = JSON.parse(data)
      console.log("\n\n US Dollar used countries:\n\n");
      var curr  = result.filter((ele)=>ele.currencies && ele.currencies.USD)
      curr.forEach((value)=>console.log("Countries:", value.name.common))
      }