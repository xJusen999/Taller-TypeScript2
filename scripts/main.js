import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var AvrSeasons = document.getElementById("AverageSeasons");
renderSeriesInTable(series);
AvrSeasons.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (x) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(x.numb, "</td>\n                            <td style=\"color: rgb(0, 191, 255);\">").concat(x.title, "</td>\n                           <td>").concat(x.channel, "</td>\n                           <td>").concat(x.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var AverageSeasons = 0;
    var TotalSeasons = 0;
    series.forEach(function (serie) { return TotalSeasons = TotalSeasons + serie.seasons; });
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
}
