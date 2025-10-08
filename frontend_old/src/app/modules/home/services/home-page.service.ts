import { BackendService } from "../../../services/backend.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HomePageService {

    protected apiServerPaths = environment.backendServer.path;

    constructor(private backendService: BackendService) {
    }

    getRecords(limit:number = 0) {
      
        const path = this.apiServerPaths.table.mg5spzij16k3hy9.records;

        return this.backendService.get(path,({params: {limit}}), map((result: any) => {
            return result?.list ?? []; // result err => array rong
        }))   
    }

}