import { Component, signal } from '@angular/core';
import links
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  
    select_color = signal(null);
    api = signal(null);
    colors = signal([]);
  
     onChange = (event) => {
      select_color.value = event.target.value;
    };
  
    setApi = (api_) => {
      api.update(api => api_);
    };
    const { toCapitalized } = useDownload();
  
    const onColorsReceived = (cl) => {
      colors.value = cl;
      select_color.value = "";
    };
  
    onBeforeMount(() => {
      const default_api = links_data.find((tab) => tab.isDefault === true).api;
      api.value = default_api;
    });
}
