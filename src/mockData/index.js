/* eslint-disable */

export const mockHouse = [
{  
   url:"https://www.anapioficeandfire.com/api/houses/81",
   name:"House Corbray of Heart's Home",
   region:"",
   coatOfArms:"Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
   words:"",
   titles:[  
   "Lord of Heart's Home",
   "King of the Fingers (historical)"
   ],
   seats:[  
   "Heart's Home"
   ],
   currentLord:"https://www.anapioficeandfire.com/api/characters/681",
   heir:"https://www.anapioficeandfire.com/api/characters/677",
   overlord:"https://www.anapioficeandfire.com/api/houses/7",
   founded:"",
   founder:"https://www.anapioficeandfire.com/api/characters/256",
   diedOut:"",
   ancestralWeapons:[  
   "Lady Forlorn"
   ],
   cadetBranches:[  

   ],
   swornMembers:[  
   "https://www.anapioficeandfire.com/api/characters/255"
   ]
}
];

export const swornMember = {  
   "url":"https://www.anapioficeandfire.com/api/characters/255",
   "name":"Corwyn Corbray",
   "gender":"Male",
   "culture":"",
   "born":"",
   "died":"In 134 AC, at Runestone",
   "titles":[  
      "Ser",
      "Lord Regent"
   ],
   "aliases":[  
      ""
   ],
   "father":"",
   "mother":"",
   "spouse":"https://www.anapioficeandfire.com/api/characters/871",
   "allegiances":[  
      "https://www.anapioficeandfire.com/api/houses/81"
   ],
   "books":[  
      "https://www.anapioficeandfire.com/api/books/11"
   ],
   "povBooks":[  

   ],
   "tvSeries":[  
      ""
   ],
   "playedBy":[  
      ""
   ]
};

export const houseWithSwornMember = {...mockHouse[0], swornMembers: [swornMember]};

