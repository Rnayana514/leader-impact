import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submit(){
    var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
  }

  ngOnInit() {
  }

}
