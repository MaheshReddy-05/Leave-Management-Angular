import { NgModule } from "@angular/core";
import { StatusTagComponent } from "./status-tag.component";
import { StatuTagComponent } from "./statu-tag/statu-tag.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        StatuTagComponent
        
    ],
    imports:[
        CommonModule
    ],
    exports:[StatuTagComponent]
})

export class StatusTagModule { }