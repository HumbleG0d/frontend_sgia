import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Inmueble } from 'src/app/model/Inmueble';

@Component({
  selector: 'app-updateinmueble',
  templateUrl: './updateinmueble.component.html',
  styleUrls: ['./updateinmueble.component.css']
})
export class UpdateinmuebleComponent {
  inm?: Inmueble
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.inm = data
      console.log(this.inm)
    })
  }

  form = new FormGroup({
    inmueble: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    id_inmueble: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateInmueble(this.inm?.id_inmueble, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }
}
