import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import * as $ from 'jquery';
// import { debug } from 'util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
  }
  IsClosed: boolean = false;
  pageType = 1;
  
  clicked = true;
  constructor() { }
  onClick() {

  }
  OnCollaps() {
   
  }
  ngOnInit() {
   
  }
  JQueryFunctions() {
   
    

  }
  toggleSub(id: string) {
    
   
  }

//-----------------------------------------------------------------------------------------

  onPageClick(pageURL: string) {
    
  }

//-----------------------------------------------------------------------------------------

  changePageTypeValue(pageSetupValue: number) {
  }

//-----------------------------------------------------------------------------------------



}
