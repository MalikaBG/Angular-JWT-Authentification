import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { isNgTemplate } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Word } from './Word';
import { Analysis } from './Analysis';
import {ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class BoardAdminComponent  {

  data: any;
  postdata = { 
  }
  url = 'http://localhost:8076/api/test/analysis'
  json;
  index = 0;
  test;
  opost : Word;
  public resultDT : Analysis
  public arrAnalysis: Analysis[]


  
  
  //public word: Word;
  getTextVal(item){
    console.log(item.value);

    this.opost = new Word();
    this.opost.word = item.value
    console.log(this.opost);
    
    console.log(this.test);
    //this.word = JSON.parse(this.test);
    //console.log(this.word);
    //this.http.post(this.url, this.opost).toPromise().then
    this.http.post(this.url, this.opost).subscribe((data : Analysis) => {
      //console.log(this.postdata);
      console.log(data);
      this.resultDT = data
      //this.json = JSON.stringify(data.json);
      console.log(this.resultDT.resp);
      this.test = JSON.stringify(this.resultDT);
      console.log(this.test);

    });
    
  }

  constructor(private http: HttpClient) {
    
      
  }
}

