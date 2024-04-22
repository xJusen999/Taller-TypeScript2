import { Serie } from "./Serie.js";
import { series } from "./data.js";


const seriesTbody: HTMLElement = document.getElementById("series") as HTMLElement;
const serieDetails: HTMLElement = document.getElementById("serieDetails") as HTMLElement;
const serieImage: HTMLImageElement = document.getElementById("serieImage") as HTMLImageElement;
const serieTitle: HTMLElement = document.getElementById("serieTitle") as HTMLElement;
const serieDescription: HTMLElement = document.getElementById("serieDescription") as HTMLElement;
const serieLink: HTMLAnchorElement = document.getElementById("serieLink") as HTMLAnchorElement;


function renderSeriesInTable(series: Serie[]): void {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.numb}</td>
                               <td style="color: rgb(0, 112, 224);">${serie.title}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        trElement.onclick = () => showDetails(serie);
        seriesTbody.appendChild(trElement);
    });
}

function showDetails(serie: Serie): void {
    serieImage.src = serie.urlImage;
    serieTitle.textContent = serie.title;
    serieDescription.textContent = serie.description;
    serieLink.href = serie.url;
    serieDetails.style.display = 'block';
}


function getAverageSeasons(series: Serie[]): number {
    let totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / series.length;
}

renderSeriesInTable(series);
document.getElementById("AverageSeasons")!.textContent = `${getAverageSeasons(series)}`;
