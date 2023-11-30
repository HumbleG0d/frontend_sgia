import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addinmueble',
  templateUrl: './addinmueble.component.html',
  styleUrls: ['./addinmueble.component.css']
})
export class AddinmuebleComponent {
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    inmuebles: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    id_inmueble: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addinmueble(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}

