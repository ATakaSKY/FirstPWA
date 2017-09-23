import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit(){

    this.updateUIAvailability();
    window.addEventListener("online", this.updateUIAvailability);
    window.addEventListener("offline", this.updateUIAvailability);


    if((navigator as any).standalone === undefined){
      //its not iOS
      if(window.matchMedia("(display-mode:browser)").matches){
        //we are in browser
        window.addEventListener("beforeinstallprompt",event => {
          event.preventDefault();
          (event as any).prompt();
          //document.querySelector('footer').style.display = 'block';
          return false;
        })
      }
    }
  }

  updateUIAvailability(){
    if(navigator.onLine){
      //You might be online
      (document.querySelector("body") as any).style = "";
    }else{
      //you are surely offline
      (document.querySelector("body") as any).style = "filter:grayscale(1)";
    }
  }
}
