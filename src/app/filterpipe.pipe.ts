import { Pipe, PipeTransform } from '@angular/core';
import { Application } from './application';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:Application[],filterId:number,property:number): any {
    if(value.length===0 || !filterId){
      return value;
    }
    let filteredApplications:Application[] = [];
    for(let app of value){
      console.log(property);
      
      console.log(app[property]);
      console.log(filterId);
      console.log(app[property].customerId);
      
      if(app[property].customerId == filterId || app[property]==filterId){
        
        filteredApplications.push(app);
      }
    }
    return filteredApplications;
  }

}
