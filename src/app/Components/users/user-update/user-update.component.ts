import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthdate: Date;
  address:string;
  role: string;
  public form: FormGroup;
  id: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService,
    private activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: any) => {
      const {id} = params;
      this.userService.get(id).subscribe(
        {
          next: (response) => {
            this.id = response.userId;
            this.firstName= response.firstName;
            this.lastName= response.lastName
            this.username= response.username
            this.email= response.email
            this.phoneNumber= response.phone
            this.birthdate= response.birthDate
            this.address = response.adress
            this.role=  response.role
        } 
      }
      )
    })
    this.form = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      username:new FormControl(null, Validators.required),
      email:new FormControl(null, Validators.required),
      phoneNumber:new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    });
  }

  edit()
  {
   if(this.form.invalid)
   {
    this.markFormGroupTouched(this.form);
   } 
   if(this.form.valid) { 

    this.userService.edit(
      {
        userId: this.id,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phoneNumber,
        adress: this.address,
        email: this.email,
        birthDate: this.birthdate
      }
    ).subscribe({
      next: () => {
        this.toaster.success('user updated successfully');
        this.router.navigate(['/menu/users'])
      }
    })
  }
  } 
  markFormGroupTouched(formGroup: FormGroup): void {
    ( Object as any).values(formGroup.controls).forEach((control: any) => {
        control.markAsTouched();
        if (control.controls) {
            this.markFormGroupTouched(control);
        }
    });
}
}
