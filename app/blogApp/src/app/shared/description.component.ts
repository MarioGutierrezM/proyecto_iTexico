import {Component, Input, OnChanges} from '@angular/core';

//decorador
@Component({
    selector: 'cat-description',
    templateUrl: './description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() cat: {name:'', description:''};
    ngOnChanges(){

        //called after the constructor, iitializing input propertis
        //add 'implements OnInit' to the class
        console.log(this.cat)
    }
}





/* 
LIFE CYCLE HOOKS

ngOnChange
ngOnInit
*/