import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-mined-blocks',
  templateUrl: './mined-blocks.component.html',
  styleUrls: ['./mined-blocks.component.css'],
})
export class MinedBlocksComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  transactions = [];
  currentBlockNumber = 0;
  blockHash = uuidv4().split('-').join('');
  ngOnInit() {
    this.mainService.fetchblock(0).then((data: []) => {
      console.log(data);
      this.transactions = data;
    });
  }

  fetchblock(direction) {
    if (direction == 'previous') {
      this.currentBlockNumber = this.currentBlockNumber - 1;
      if (this.currentBlockNumber - 1 < 0) {
        this.currentBlockNumber = 0;
      }
    } else if (direction == 'next') {
      this.currentBlockNumber = this.currentBlockNumber + 1;
    }

    this.mainService.fetchblock(this.currentBlockNumber).then((data: any) => {
      this.transactions = data;
    });
  }
}
