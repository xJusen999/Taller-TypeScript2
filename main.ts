import { Serie } from "./Serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById("series")!;
const AvrSeasons: HTMLElement = document.getElementById("AverageSeasons")!;

renderCoursesInTable(series);
AvrSeasons.innerHTML = `${getAverageSeasons(series)}`

function renderCoursesInTable(series: Serie[]): void {
    series.forEach(x => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${x.numb}</td>
                            <td style="color: rgb(0, 112, 224);">${x.title}</td>
                           <td>${x.channel}</td>
                           <td>${x.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let AverageSeasons: number = 0;
    let TotalSeasons: number = 0;
    series.forEach((serie) => TotalSeasons = TotalSeasons + serie.seasons);
    AverageSeasons = TotalSeasons / series.length;
    return AverageSeasons;
  }

