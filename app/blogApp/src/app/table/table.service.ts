import {Injectable} from '@angular/core';
import {ICat} from './cat'; //interface profe uso IProduct
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProductService{
    private _url = 'http://localhost:8000/products';


    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._url)
        .do(data=>console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    //---------------------------------------------------------
    
    postProduct(body:IProduct): Observable<IProduct>{
        //let body = JSON.stringify(newCat[0]);
        return this._http.post(this._url, body)
        .do(data=>console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    deleteProduct(id:IProduct): Observable<IProduct>{
        return this._http.delete(this._url +"/"+ id)
        .do(data=>console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    putProduct(body:IProduct): Observable<IProduct>{
        return this._http.put(this._url + "/" + body._id, body)
        .do(data=>console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    
    //---------------------------------------------------------

    

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}