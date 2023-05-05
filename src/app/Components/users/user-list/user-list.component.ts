import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit  {
  users: any = []; 

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshUsers();
   
  }

  refreshUsers(){
    this.userService.list().subscribe({
      next: (response) => {
        this.users = [...response];
      }
    });
  }

  delete(id: any){
    
    if(confirm("Are you sure yo want to delete this user? ")) {
        this.userService.delete(id).subscribe(
          {
            next: () => {
              this.refreshUsers();
              this.toastr.success('User deleted successfully')
            }
          }
        )
   } 
  }  
}
