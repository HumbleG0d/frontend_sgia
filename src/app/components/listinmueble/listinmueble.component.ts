import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listinmueble',
  templateUrl: './listinmueble.component.html',
  styleUrls: ['./listinmueble.component.css']
})
export class ListinmuebleComponent implements OnInit{

  inmuebles: any[] | undefined
  url: string = "http://localhost:8080/api/v1/inmuebles/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getInmuebles().subscribe(data => {
      this.inmuebles = data;
    })
  }

  deleteInmueble(id_inmueble: string){
    this.service.deleteUser(id_inmueble).subscribe(data => {
      this.inmuebles = this.inmuebles?.filter(inm => inm.id_inmueble !== id_inmueble);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateInmueble(id_inmueble: string){
    this.router.navigate(['update', id_inmueble]);
  }


}
