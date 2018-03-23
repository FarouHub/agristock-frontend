import { Component, OnInit, ViewChild } from '@angular/core';
import { MercucialService } from '../mercucial.service';
import { Mercucial } from '../mercucial';

import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-mercucial',
  templateUrl: './mercucial.component.html',
  styleUrls: ['./mercucial.component.css']
})
export class MercucialComponent implements OnInit {

  displayedColumns = ['source', 'description', 'origine', 'mention', 'type', 'ua', 'unit', 'information', 'prix_1', 'prix_livre', 'prix_2', 'prix_3', 'prix_4', 'prix_10'];
  dataSource: MatTableDataSource<Mercucial>;

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }
  
  constructor(private mercucialService: MercucialService) { }

  ngOnInit() {
    this.getMercuciaux();
  }

  getMercuciaux(){
    this.mercucialService.getMercucial().subscribe( (mercus) => {
      this.dataSource = new MatTableDataSource(mercus);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  prix1Color(): string {
    return 'black';
  }

  prix2Color(element: Mercucial): string {
    if(element.prix_1 == element.prix_2){
        return 'black';
    }
    return 'navy';
  }

  prix3Color(element: Mercucial): string {
    if(element.prix_2 == element.prix_3){
        return this.prix2Color(element);
    }
    return 'aqua';
  }

  prix4Color(element: Mercucial): String {
    if(element.prix_3 == element.prix_4){
        return this.prix3Color(element);
    }
    return 'purple';
  }

  prix10Color(element: Mercucial): String {
    if(element.prix_4 == element.prix_10){
        return this.prix4Color(element);
    }
    return 'green';
  }
}