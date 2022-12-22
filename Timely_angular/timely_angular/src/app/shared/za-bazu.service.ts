import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ZaBazuService {

  constructor(private HttpClient:HttpClient) { }


  posaljiBazi(createResource)
  {
    return this.HttpClient.post('https://localhost:44379/api/Tablica_podaci',createResource);
  }

public pozoviBazu()
{
  return this.HttpClient.get('https://localhost:44379/api/Tablica_podaci');
}


}
