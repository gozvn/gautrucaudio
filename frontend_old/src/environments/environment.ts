import { table } from "console"
import path from "path"

export const environment = { // file chung he thong
    appPrefix : "",
    backendServer: {
        host: 'dragonball.gozvn.com',
        port : 443,
        prePath:'/api/v2',
        path:{
            table: {
                mg5spzij16k3hy9:{ // table list truyen
                    records:'tables/mg5spzij16k3hy9/records',
                    create:'tables/mg5spzij16k3hy9/records',
                    edit : 'tables/mg5spzij16k3hy9/records',
                    delete : 'tables/mg5spzij16k3hy9/records'
                }
            }
        }
    }
}
// hostname.path.table.mg5spzij16k3hy9.records // goal path response

// https://dragonball.gozvn.com/api/v2/tables/mg5spzij16k3hy9/records?limit=6&shuffle=0&offset=0