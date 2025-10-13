import { BackendService } from "../../../services/backend.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TruyenService {

    protected apiServerPaths = environment.backendServer.path;

    constructor(private backendService: BackendService) {
    }
    
    getRecords(){
        const path = this.apiServerPaths.table.mg5spzij16k3hy9.records;

        return this.backendService.get(path,{}, map((result: any) => {
            return result?.list ?? []; // result err => array rong
        }))   
    }

    getDetail(id:number){
        const path = this.apiServerPaths.table.mg5spzij16k3hy9.records + "/" + id;
        return this.backendService.get(path,{},map((result:any) => {
            // console.log(result) //
            return result ?? []; //
        }))
    }

}