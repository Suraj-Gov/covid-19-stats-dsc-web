function fetchData() {
  const API_ENDPOINT = "https://disease.sh/v3/covid-19/all";
  fetch(API_ENDPOINT)
    .then(function(response) {
      const jsonData = response.json();
      // console.log(jsonData)
      return jsonData;
    })
    .then(function(jsonData) {
      displayData(jsonData)
    })
}

function f(num) {
  const formattedNum = new Intl.NumberFormat("en-IN").format(num);
  return formattedNum;
}

function displayData(data) {
  const stats = document.querySelectorAll(".stat");
  // active cases
  stats[0].children[1].textContent = f(data.cases);
  stats[0].children[2].textContent = f(data.todayCases);
  // recovered cases
  stats[1].children[1].textContent = f(data.recovered);
  stats[1].children[2].textContent = f(data.todayRecovered);
  // deaths
  stats[3].children[1].textContent = f(data.deaths);
  stats[3].children[2].textContent = f(data.todayDeaths);
  
  // target header
  const headerConfirmedStat = document.querySelector("header")
  headerConfirmedStat.children[1].textContent = f(data.cases)

}

window.onload = function () {
  // setTimeout(() => {
    fetchData() 
  // }, 2000);
}