import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-flow-of-individual',
  templateUrl: './flow-of-individual.component.html',
  styleUrls: ['./flow-of-individual.component.css'],
})
export class FlowOfIndividualComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  ngOnInit() {}
  allTransactions = [];
  fetchTransactions(username: string) {
    this.mainService.fetchTransactions(username).then((array: []) => {
      console.log(array);
      this.allTransactions = array;
    });
  }
}
