import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { Router, provideRouter } from "@angular/router";
import { provideToastr } from "ngx-toastr";


export const appConfig: ApplicationConfig = {
    providers:[
        provideToastr(),
    ]
}