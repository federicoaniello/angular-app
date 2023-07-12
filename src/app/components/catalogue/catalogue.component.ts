import { links_data } from './../../../assets/data/data';
import { toCapitalized } from './../../../utils/utils';
import { Component, signal, OnInit, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  links_data = links_data;
  select_color: WritableSignal<string> = signal('');
  api: WritableSignal<string> = signal('');
  colors: WritableSignal<string[]> = signal([]);
  toCapitalized = toCapitalized;

  ngOnInit(): void {
    const default_api = links_data?.find((tab) => tab.isDefault)?.api ?? '';
    this.api.set(default_api);
  }

  onChange(event: any) {
    this.select_color.set(event.target.value);
  }

  setApi(api_: string) {
    console.log(api_)
    this.api.set(api_);
  }

  onColorsReceived(cl: string[]) {
    this.colors.set(cl);
    this.select_color.set('');
  }
}
