import { Pipe, PipeTransform } from '@angular/core';
import { Parfum } from './model/parfum.model'; // adapte le chemin si besoin

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Parfum[], filterText: string): Parfum[] {
    console.log("Transforming...");
  if (!list || !filterText) return [];
  return list.filter(item =>
    item.nomParfum?.toLowerCase().includes(filterText.toLowerCase())
  );
}
}