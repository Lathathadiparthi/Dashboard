import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { ChartComponent } from 'ng-apexcharts';
import {
  
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: any; 
    chart:any ;
    xaxis:any;
    dataLabels: any;
    grid: any; 
    stroke:any 
    title: any;
       
};

export type ChartOptions1 = {
  plotOptions:any;
   
  series: any; 
  // ApexAxisChartSeries;
  chart:any ;
  // ApexChart;
  xaxis:any;
  //  ApexXAxis;
  dataLabels: any;
  // ApexDataLabels;
  grid: any; 
  //  ApexGrid;
  stroke:any 
  // ApexStroke;
  title: any;
  // ApexTitleSubtitle;
  fill:any;
  labels:any;
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  @ViewChild("chart") chart:any;
  // ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions1>;
 

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [0.3,0.25,0.15,0.23,0.15,0.25]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Power (kW)",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "12:06:29",
          "12:06:39",
          "12:06:49",
          "12:06:59",
          "12:07:09",
          "12:07:19"
        ]
      }
    };

    this.chartOptions1 = {
      series: [90],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: true
            },
            value: {
              offsetY: -2,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Voltage(V)"]
    };
  }
}  

