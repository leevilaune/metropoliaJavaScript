//https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql
'use strict';

function requestItienary(start, end) {
    return `
    {
  plan(
    from: {lat: 60.168992, lon: 24.932366}
    to: {lat: 60.175294, lon: 24.684855}
    numItineraries: 3
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        realTime
        distance
        transitLeg
      }
    }
  }
}`
}

const form = document.querySelector("form")
form.addEventListener("submit", async function(event){
    event.preventDefault()
    const jsonResponse = await fetch('./digitransit.json');
    const json = await jsonResponse.json();
    let url = form.action
    let request = new Request(url);
    let headers = request.headers;
    headers.append("digitransit-subscription-key",json.apikey)
    headers.append("content-type", "application/json");

    const parameters ={
        method: "GET",
        headers: headers
    }

    const startAddressRequest = new Request("https://api.digitransit.fi/geocoding/v1/autocomplete?text=tietäjäntie%2010",parameters)
    const endAddressRequest = new Request("https://api.digitransit.fi/geocoding/v1/autocomplete?text=karaportti%202",parameters)
    const startResponse = await fetch(startAddressRequest)
    console.log(startResponse.json())

    const myInit = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({query:requestItienary()}),
    };
    request = new Request(url, myInit);
    const req = await fetch(request)

    //const address = await fetch(request)
    console.log(req.json())
    //console.log(address.json())
})