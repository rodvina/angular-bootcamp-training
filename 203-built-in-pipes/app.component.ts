import { Component } from '@angular/core';

const recordList = [
  { empName: 'Cynthia Cunningham', units:     75.29879815, totalRevenue:    46739.8278   },
  { empName: 'Peter Clark',        units:    100,          totalRevenue:     8675.309    },
  { empName: 'Theresa Soto',       units:     10.89,       totalRevenue: 67439820.3498   },
  { empName: 'Russell Fisher',     units:      0.3892,     totalRevenue:  5789230.9843   },
  { empName: 'Elizabeth Hudson',   units:     89.2979879,  totalRevenue:   789709.834098 },
  { empName: 'Heather Spencer',    units: 148098,          totalRevenue:  9879873.40598  },
  { empName: 'Barbara Tran',       units:   1038.6829,     totalRevenue: 90855398.2987   },
  { empName: 'Julia Anderson',     units:  83928.593,      totalRevenue:   678098.979998 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  reportDate = new Date('Dec 25, 2058');
  expirationDate = new Date('Jan 01, 2059');
  records = recordList;
  showJSON = false;
}
