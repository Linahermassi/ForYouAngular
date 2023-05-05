import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthdate: Date;
  password: string;
  confirmPassword: string;
  address:string;
  role: string;
  public form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      username:new FormControl(null, Validators.required),
      email:new FormControl(null, Validators.required),
      phoneNumber:new FormControl(null, Validators.required),
      birthdate: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword:new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    });
  }

  add()
  {
    if(this.form.invalid)
    {
      this.markFormGroupTouched(this.form)
    }

   if(this.form.valid) { 

    if(this.password !== this.confirmPassword) {
      alert('pwd not equals');
      return;
    }
    this.userService.add(
      {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phoneNumber,
        address: this.address,
        role: this.role,
        password: this.password,
        email: this.email,
        birthDate: this.birthdate
      }
    ).subscribe({
      next: () => {
        this.toaster.success('user added successfully');
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
