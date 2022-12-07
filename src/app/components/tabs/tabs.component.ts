import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

export interface Tab {
  text: string;
  id: string;
}

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input() tabList: Tab[] = [];
  @Input() selectedTabOnInit: string = '';
  @Output() onSelectedTab: EventEmitter<any> = new EventEmitter();

  selectedTab: string = '';

  ngOnInit() {
    // Selecciono el tab elegido o el primero por defecto
    this.selectedTab = this.selectedTabOnInit || this.tabList[0].id;
    this.onSelectedTab.emit(this.selectedTabOnInit || this.tabList[0].id);
  }

  setTab(tabId: string) {
    this.selectedTab = tabId;
    if (window.innerWidth <= 500) {
      this.scrollToSelectedTab();
    }
  }

  ngAfterViewInit(): void {
    this.scrollToSelectedTab();
  }

  private scrollToSelectedTab() {
    setTimeout(() => {
      const htmlCollection = document.getElementsByClassName('selected');
      if (htmlCollection.length) {
        const elementList = Array.from(htmlCollection);
        const selectedElement = elementList[elementList.length - 1];
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, 200);
  }
}
