import { EscoClass } from './esco.class';


export const ESCOS: EscoClass[] = [

  { 
    name: 'Think Energy',
    url: 'https://www.mythinkenergy.com/signup/index.php?type=resi+&s=viewPlans&utilInfo%5B0%5D%5BUtility%5D=CONEd&utilInfo%5B0%5D%5BUtilityName%5D=Consolidated+Edison&utilInfo%5B0%5D%5BMarket%5D=&utilInfo%5B0%5D%5BCommodity%5D=Electric&utilInfo%5B0%5D%5BState%5D=NY&utilInfo%5B0%5D%5BStateName%5D=New+York&utilInfo%5B0%5D%5BAccountNumberFormat%5D=&utilInfo%5B0%5D%5BUtilityDunsNum%5D=006982359&PromoCode=&enrollstep=0&isdualenrollment=0&Channel=WEB&ContractType=NEW&ZipCode=11206&StartDate=26-Oct-2016&BillAmount=100&iscommercial=0&v=false',
    img: 'assets/think.png',
    cpk: 0.069,
    time: 12,  
    source: 'non-renewable',
    reviews: 'The most cost-savings. Standard New York State mix of hydro, gas and coal, but leading pricing and no known shady customer acquisition practices. No rate fraud.'
  },


  { 
    name: 'Green Mountain Energy Inc',
    url: 'https://www.greenmountainenergy.com/nyptc/',
    img: 'assets/greenmountain.png',
    cpk: 0.084,
    time: 12, 
    source: '100% Wind', 
    reviews: 'The most renewable. Took 2 tries until they accepted our ConEd number and showed up on our utility bill, but one of the most established green ESCOs around. Customer service picks up and reacts but is not the best around. Based in Texas. ConEd by way of Brooklyn Solarworks researched that their energy is mislabeled as green – 5% wind and less then 1% solar.',
  },


  { 
    name: 'Public Power',
    url: 'https://www.ppandu.com',
    img: 'assets/publicpower.png',
    cpk: 0.085,
    time: 12, 
    source: 'Gas 38%, Nuclear 32%, Hydro 14%, Coal 6%, Oil 1%',
    reviews: '',
  },

  
  { 
    name: 'Constellation',
    url: 'https://shop.constellation.com/#/11206/CONED_CONED',
    img: 'assets/constellation.png',
    cpk: 0.087,
    time: 12,  
    source: 'Renewable Energy Credits, not renewable power', 
    reviews: '',
  },


  { 
    name: 'Con Edison Solutions Standard',
    url: 'http://www.conedsolutions.com',
    img: 'assets/coned.png',
    cpk: 0.0875,
    time: 12,
    source: 'Fossil Fuels, Nuclear, Gas',
    reviews: '',
  },

  { 
    name: 'Clearview Energy',
    url: 'https://www.clearviewenergy.com/signup?zipcode=11206#pricing',
    img: 'assets/clearview.png',
    cpk: 0.088,
    time: 12,  
    source: '100% renewable, mostly wind, details unclear', 
    reviews: '100$ cancellation fee! Customer service is based in Texas and terrible – only picked up in the evenings EST. If I had a problem I am not confident they would be any support.'
  },


  { 
    name: 'East Coast Power & Gas',
    url: 'https://www.ecpowerandgas.com/residential/electricity/',
    img: 'assets/eastcoast.png',
    cpk: 0.089,
    time: 12,  
    source: '100% renewable, not clear', 
    reviews: '',
  },

  { 
    name: 'Xoom Energy Inc.',
    url: 'https://xoomenergy.com/en/residential/new-york/con-edison-electricity?dez=11206&depz=J',
    img: 'assets/xoom.png',
    cpk: 0.090,
    time: 12, 
    source: 'Gas 38%, Nuclear 32%, Hydro 14%, Coal 6%, Oil 1%',
    reviews: '',
  },

  { 
    name: 'Spark Energy',
    url: 'https://www.sparkenergy.com/en/products-and-services/product-list/?zip=11206&commodity=Electric&utilityId=13&utility=Consolidated%20Edison%20of%20New%20York&market=CONED&promoCode=',
    img: 'assets/spark.png',
    cpk: 0.095,
    time: 12, 
    source: '100% renewable, sources unclear', 
    reviews: '',
  },

  { 
    name: 'Con Edison Solutions Green',
    url: 'http://www.conedsolutions.com',
    img: 'assets/coned.png',
    cpk: 0.0975,
    time: 12,
    source: '65% Hydro, 35% Wind',
    reviews: '',
  },

  { 
    name: 'Direct Energy Inc.',
    url: 'https://www.directenergy.com/ny/electricity-plans',
    img: 'assets/direct.png',
    cpk: 0.099,
    time: 12, 
    source: 'Renewable Energy Credits, not renewable power',
    reviews: '', 
  },
  
  { 
    name: 'Just Energy Inc.',
    url: 'https://www.justenergy.com/products-and-rates/',
    img: 'assets/just.png',
    cpk: 0.102,
    time: 12, 
    source: '30% renewables, sources unclear', 
    reviews: '',
  },

  { 
    name: 'Greenlight Energy Inc.',
    url: 'https://gogreenlightenergy.com',
    img: 'assets/greenlight.png',
    cpk: 0.105,
    time: 12, 
    source: 'not clear', 
    reviews: '',
  },


  { 
    name: 'Ethical Electric',
    url: 'http://ethicalelectric.com',
    img: 'assets/ethical.png',
    cpk: 0.113,
    time: 12, 
    source: '99% Wind, 1% Solar',
    reviews: '', 
  },

    { 
    name: 'Oasis Energy Inc.',
    url: 'https://frontend.oasisenergy.com/Enrollment/Index?zipcode=11206',
    img: 'assets/oasis.png',
    cpk: 0.135,
    time: 12, 
    source: '100% renewable, sources unclear', 
    reviews: '',
  },
  
];