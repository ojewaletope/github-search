import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
query: string = "";
users: any[] = [];
totalCount: number = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }
  seatchGithub() {
    return this.apiService.searchGithub(this.query).subscribe(res => {
     this.users = res.items;
     this.totalCount = res.total_count
    })
  }

}
