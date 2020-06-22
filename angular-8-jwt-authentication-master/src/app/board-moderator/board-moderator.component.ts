import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Analysis } from './Analysis';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})

export class BoardModeratorComponent implements OnInit {
  content: any;
  data: any;
  public arrAnalysis: Analysis[] = new Array() as Array<Analysis>;
  //this.arrAnalysis = new Array();
   anal = new Analysis();

   //arrAnalysis.push(anal);
 
 // public doughnutChartLabels = ['Positive', 'Negative'];
 // public doughnutChartData = [this.arrAnalysis[0].resp, this.arrAnalysis[0].resn];
 // public doughnutChartType = 'doughnut';
  constructor(private userService: UserService) {}
  loaded : boolean;

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.loaded = false;
        this.arrAnalysis = data
        //this.arrAnalysis = data as string[];
        
        //this.arrAnalysis = Array.of(data.json());
        
        //console.log(this.arrAnalysis[0].resn);
        //this.doughnutChartData = this.arrAnalysis[1].resn
        //this.doughnutChartData=[this.arrAnalysis[1].resp,this.arrAnalysis[1].resn];

 //this.newStr = this.arrAnalysis.substring(1, this.arrAnalysis.length-1);
        //for (let key in data)
         //  if (this.arrAnalysis.hasOwnProperty(key))
            //   this.arrAnalysis.push(data[key])
            this.loaded = true;
      },
      
      
      err => {
        this.content = JSON.parse(err.error).message;
      }

        
      
    );
 
  }

  



}
