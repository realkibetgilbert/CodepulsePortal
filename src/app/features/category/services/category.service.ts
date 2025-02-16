import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { CategoryToDisplay } from '../models/category-to-display.model';
import { environment } from 'src/environments/environment.development';
import { UpdateCategoryRequestDto } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:AddCategoryRequest):Observable<void>{
    return this.
    http.post<void>(  `${environment.localApiUrl}/Category`,model)
  }

  getAllCategories():Observable<CategoryToDisplay[]>{
  return this.http.get<CategoryToDisplay[]>(`${environment.localApiUrl}/Category`)
  }
  
  getCategoryById(id:string):Observable<CategoryToDisplay>{
    return this.http.get<CategoryToDisplay>(`${environment.localApiUrl}/Category/${id}`);
  }

  updateCategory(id:string,model:UpdateCategoryRequestDto):Observable<CategoryToDisplay>{
       return this.http.put<CategoryToDisplay>(`${environment.localApiUrl}/Category/${id}`,model);
  }

  deleteCategoryById(id:string):Observable<CategoryToDisplay>{
    return this.http.delete<CategoryToDisplay>(`${environment.localApiUrl}/Category/${id}`);
  }
}
