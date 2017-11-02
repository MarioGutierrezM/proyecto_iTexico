import {Component} from '@angular/core';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'
})

export class ProfileComponent{
   // creamos variable llamada profiles tipo array 
   profiles: any[] =  [  
       {first_name: 'Mario', last_name: 'Gutierrez'},
       {first_name: 'Ana', last_name: 'Rosas'}
   ]
}