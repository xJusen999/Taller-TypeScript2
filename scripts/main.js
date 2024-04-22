import { series } from "./data.js";

var seriesTbody = document.getElementById("series");
var serieDetails = document.getElementById("serieDetails");
var serieImage = document.getElementById("serieImage");
var serieTitle = document.getElementById("serieTitle");
var serieDescription = document.getElementById("serieDescription");
var serieLink = document.getElementById("serieLink");

function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.numb}</td>
                               <td style="color: rgb(0, 191, 255);">${serie.title}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        trElement.onclick = function () { showDetails(serie); };
        seriesTbody.appendChild(trElement);
    });
}

function showDetails(serie) {
    serieImage.src = serie.urlImage;
    serieTitle.textContent = serie.title;
    serieDescription.textContent = serie.description;
    serieLink.href = serie.url;
    serieDetails.style.display = 'block';
}

function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return totalSeasons / series.length;
}

renderSeriesInTable(series);
document.getElementById("AverageSeasons").textContent = `${getAverageSeasons(series)}`;
