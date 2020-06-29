import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.scss']
})
export class CpComponent implements OnInit {


  country: any;

  countries: any[];

  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];

  listContries=
 [
        {"name": "Afghanistan", "code": "AF"},
        {"name": "Åland Islands", "code": "AX"},
        {"name": "Albania", "code": "AL"},
        {"name": "Algeria", "code": "DZ"},
        {"name": "American Samoa", "code": "AS"},
        {"name": "Andorra", "code": "AD"},
        {"name": "Angola", "code": "AO"},
        {"name": "Anguilla", "code": "AI"},
        {"name": "Antarctica", "code": "AQ"},
        {"name": "Antigua and Barbuda", "code": "AG"},
        {"name": "Argentina", "code": "AR"},
        {"name": "Armenia", "code": "AM"},
        {"name": "Aruba", "code": "AW"},
        {"name": "Australia", "code": "AU"}
    ]

  filteredBrands: any[];

  brand: string;

  constructor(
    //  private countryService: CountryService
     ) { }

  filterCountrySingle(event) {
      let query = event.query;
      // this.countryService.getCountries().then(countries => {
      //     this.filteredCountriesSingle = this.filterCountry(query, countries);
      // });
      this.filteredCountriesSingle = this.filterCountry(query, this.listContries);
  }

  filterCountryMultiple(event) {
      let query = event.query;
      // this.countryService.getCountries().then(countries => {
      //     this.filteredCountriesMultiple = this.filterCountry(query, countries);
      // });
      this.filteredCountriesSingle = this.filterCountry(query, this.listContries);
  }

  filterCountry(query, countries: any[]):any[] {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      let filtered : any[] = [];
      for(let i = 0; i < countries.length; i++) {
          let country = countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }
      return filtered;
  }


  ngOnInit(): void {
  }

}
