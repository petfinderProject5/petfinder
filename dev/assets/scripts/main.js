var papp = {};

papp.elements = {
    $petDetails: $('#petDetails'),
    $petGallery: $('#petGallery'),
    $petInfo: $('#petInfo'),
    $petName: $('#petName'),
    $petBreed: $('#petBreed'),
    $petGender: $('#petGender'),
    $petAge: $('#petAge'),
    $petDescription: $('#petDescription'),
    $petAddress: $('#petAddress')
};

const data = {
  "@encoding": "iso-8859-1",
  "@version": "1.0",
  "petfinder": {
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "lastOffset": {
      "$t": "25"
    },
    "pets": {
      "pet": [
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {},
            "state": {
              "$t": "ON"
            },
            "address2": {},
            "email": {
              "$t": "specialspecies@torontohumanesociety.com"
            },
            "city": {
              "$t": "Toronto"
            },
            "zip": {
              "$t": "M5A 4C2"
            },
            "fax": {},
            "address1": {
              "$t": "11 River Street"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "S"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/36170186/1/?bust=1473273833&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/36170186/1/?bust=1473273833&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/36170186/1/?bust=1473273833&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/36170186/1/?bust=1473273833&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/36170186/1/?bust=1473273833&width=50&-t.jpg",
                  "@id": "1"
                }
              ]
            }
          },
          "id": {
            "$t": "36170186"
          },
          "shelterPetId": {},
          "breeds": {
            "breed": {
              "$t": "Budgie/Budgerigar"
            }
          },
          "name": {
            "$t": "Hana & Lulu (bonded)"
          },
          "sex": {
            "$t": "F"
          },
          "description": {
            "$t": "- 1 Year Old\n- Budgies\n- Female/Male\n- Apartments Ok\n- Bonded Pair\n- â\u0080\u009cAdorable Pairâ\u0080\u009d \n\nLulu and Hana are the best of friends who depend on each other for play, snuggles and preening. They are looking for a new home together where they can serenade their family with love and song. Budgies make wonderful pets; they are silly, social and can even learn a trick or two. Please ask about our adorable duo today!\n\nPlease note: to keep any bird happy, it's important to give them big cages. When picking out a cage for your future bird(s), aim for a cage with dimensions of 24\"L x 18\"W x 24\"H or larger, ideally a flight cage, with bar spacings up to half an inch."
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "ON455"
          },
          "lastUpdate": {
            "$t": "2016-09-07T18:43:53Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {},
            "state": {
              "$t": "ON"
            },
            "address2": {},
            "email": {
              "$t": "specialspecies@torontohumanesociety.com"
            },
            "city": {
              "$t": "Toronto"
            },
            "zip": {
              "$t": "M5A 4C2"
            },
            "fax": {},
            "address1": {
              "$t": "11 River Street"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "S"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/1/?bust=1471542381&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/1/?bust=1471542381&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/1/?bust=1471542381&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/1/?bust=1471542381&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/1/?bust=1471542381&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/2/?bust=1471542381&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/2/?bust=1471542381&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/2/?bust=1471542381&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/2/?bust=1471542381&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/2/?bust=1471542381&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/3/?bust=1474649460&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/3/?bust=1474649460&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/3/?bust=1474649460&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/3/?bust=1474649460&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35990623/3/?bust=1474649460&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "35990623"
          },
          "shelterPetId": {},
          "breeds": {
            "breed": {
              "$t": "Budgie/Budgerigar"
            }
          },
          "name": {
            "$t": "Bugy & Bajaro (bonded)"
          },
          "sex": {
            "$t": "F"
          },
          "description": {
            "$t": "Available for viewing at the Toronto Humane Society, 11 River St, Toronto, ON. Please find a complete list of available animals here - http://www.torontohumanesociety.com/adopt-a-pet/small-pets.\n\nIt is recommended to review the adoption process before stopping by the shelter - http://www.torontohumanesociety.com/adopt-a-pet/adoption-process. The Special Species department has a variety of food, hay and pet supplies for sale at the shelter but you will need to supply a suitable enclosure for the animal(s) you wish to adopt. \n\n- Young Adults\n- Budgies\n- Females \n- Apartments ok\n- Bonded Pair   \n- â\u0080\u009cLovely Ladiesâ\u0080\u009d                       \n\nBugy and Bajaro are a lovely pair of young ladies looking for a new forever home together. They will need a large cage with enough room for interactive toys and a few different perches. Budgies are intelligent, social animals that can learn tricks and bond with their owners. Many budgies even learn to mimic a word or two. Please email specialspecies@torontohumanesociety.com for more information today!\n\nPlease note: to keep any bird happy, it's important to give them big cages. When picking out a cage for your future bird(s), aim for a cage with dimensions of 24\"L x 18\"W x 24\"H or larger, ideally a flight cage, with bar spacings up to half an inch."
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "ON455"
          },
          "lastUpdate": {
            "$t": "2016-09-23T16:51:00Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {},
            "state": {
              "$t": "ON"
            },
            "address2": {},
            "email": {
              "$t": "specialspecies@torontohumanesociety.com"
            },
            "city": {
              "$t": "Toronto"
            },
            "zip": {
              "$t": "M5A 4C2"
            },
            "fax": {},
            "address1": {
              "$t": "11 River Street"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "S"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/2/?bust=1473274126&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/2/?bust=1473274126&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/2/?bust=1473274126&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/2/?bust=1473274126&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/2/?bust=1473274126&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/3/?bust=1473274126&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/3/?bust=1473274126&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/3/?bust=1473274126&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/3/?bust=1473274126&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/36170208/3/?bust=1473274126&width=50&-t.jpg",
                  "@id": "2"
                }
              ]
            }
          },
          "id": {
            "$t": "36170208"
          },
          "shelterPetId": {},
          "breeds": {
            "breed": {
              "$t": "Finch"
            }
          },
          "name": {
            "$t": "Zebra Finches (bonded Trio)"
          },
          "sex": {
            "$t": "U"
          },
          "description": {
            "$t": "- Adults\n- Zebra Finches\n- Females & Male\n- Apartments Okay \n- Bonded Trio\n- â\u0080\u009cBirds of a Featherâ\u0080\u009d\n\nThese little birds certainly flock together, which means they will be available for adoption as a trio.  Although quite small these birds require flight-cages so look for the largest cage you can find but make sure the bar spacing is small (donâ\u0080\u0099t want anyone escaping!).  Finches are social birds that make great companions, often acknowledging their caregiverâ\u0080\u0099s voice. \n\nPlease note: to keep any bird happy, it's important to give them big cages. When picking out a cage for your future bird(s), aim for a cage with dimensions of 24\"L x 18\"W x 24\"H or larger, ideally a flight cage, with bar spacings up to half an inch."
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "ON455"
          },
          "lastUpdate": {
            "$t": "2016-10-08T18:19:29Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "L"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/1/?bust=1464903550&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/1/?bust=1464903550&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/1/?bust=1464903550&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/1/?bust=1464903550&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/1/?bust=1464903550&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/2/?bust=1464903550&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/2/?bust=1464903550&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/2/?bust=1464903550&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/2/?bust=1464903550&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35271313/2/?bust=1464903550&width=50&-t.jpg",
                  "@id": "2"
                }
              ]
            }
          },
          "id": {
            "$t": "35271313"
          },
          "shelterPetId": {
            "$t": "24222327"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "male Pekin"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2016-06-02T16:15:17Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "35686296"
          },
          "shelterPetId": {
            "$t": "32188189"
          },
          "breeds": {
            "breed": {
              "$t": "Chicken"
            }
          },
          "name": {
            "$t": "Rooster 1"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2016-07-16T17:20:10Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "35686297"
          },
          "shelterPetId": {
            "$t": "32188193"
          },
          "breeds": {
            "breed": {
              "$t": "Chicken"
            }
          },
          "name": {
            "$t": "Rooster 2"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2016-07-16T17:20:10Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "35686298"
          },
          "shelterPetId": {
            "$t": "32188195"
          },
          "breeds": {
            "breed": {
              "$t": "Chicken"
            }
          },
          "name": {
            "$t": "Rooster 3"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2016-07-16T17:20:10Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "L"
          },
          "media": {},
          "id": {
            "$t": "37176535"
          },
          "shelterPetId": {
            "$t": "31929860"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Mila - Rouen"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:30Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "L"
          },
          "media": {},
          "id": {
            "$t": "37176536"
          },
          "shelterPetId": {
            "$t": "31929870"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Jess - Rouen"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:30Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "S"
          },
          "media": {},
          "id": {
            "$t": "37176537"
          },
          "shelterPetId": {
            "$t": "32124048"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Huey - Swedish"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:30Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "S"
          },
          "media": {},
          "id": {
            "$t": "37176538"
          },
          "shelterPetId": {
            "$t": "32124060"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Duey - Swedish"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:30Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "S"
          },
          "media": {},
          "id": {
            "$t": "37176539"
          },
          "shelterPetId": {
            "$t": "33775972"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Indian Runner"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:31Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Baby"
          },
          "size": {
            "$t": "S"
          },
          "media": {},
          "id": {
            "$t": "37176540"
          },
          "shelterPetId": {
            "$t": "33775978"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Pekin"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T21:10:31Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "37177279"
          },
          "shelterPetId": {
            "$t": "33570742"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Silver Appleyard"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-01-12T22:10:52Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Young"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "37378040"
          },
          "shelterPetId": {
            "$t": "34582477"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Khaki Campbell female 2"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-02-08T18:12:24Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Young"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "37378039"
          },
          "shelterPetId": {
            "$t": "34582475"
          },
          "breeds": {
            "breed": {
              "$t": "Duck"
            }
          },
          "name": {
            "$t": "Khaki Campbell female 1"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-02-08T18:12:24Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Senior"
          },
          "size": {
            "$t": "M"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/1/?bust=1471455677&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/1/?bust=1471455677&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/1/?bust=1471455677&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/1/?bust=1471455677&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/1/?bust=1471455677&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/2/?bust=1471455677&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/2/?bust=1471455677&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/2/?bust=1471455677&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/2/?bust=1471455677&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/2/?bust=1471455677&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/3/?bust=1471455677&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/3/?bust=1471455677&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/3/?bust=1471455677&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/3/?bust=1471455677&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/35981631/3/?bust=1471455677&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "35981631"
          },
          "shelterPetId": {
            "$t": "32004623"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Macaw"
              },
              {
                "$t": "Macaw"
              }
            ]
          },
          "name": {
            "$t": "Titan"
          },
          "sex": {
            "$t": "M"
          },
          "description": {
            "$t": "Meet Titan the Blue and Gold Macaw! This big guy is about 16 years old, and was displaced from his last home due to a new baby he wasn't getting along with. (Hey, he really enjoys the \"All About Titan Show!\")He loves a good bath, and has great taste in music (he's pretty eclectic, absolutely loves Queen, and dances to Drake!) He also very much loves his blackberries, they're the best snack around! And if you're a fan of The Simpsons, you'll get a kick out of his spot on Nelson Muntz \"Haw-haw!\" He keeps us all in stitches! Titan can be a bit of a handful, and definitely isn't shy about telling you when he's bored. While he does like to step up, be cuddled, and do lots of singing & dancing, he also likes to put people to the test and see what he's able to get away with. Since working with him, we have found that he gets frustrated fairly easily, and will need a practiced hand to help him work through it. As amazing as Titan is, these big birds require a lot of expert care and time to keep them happy; not a bird for a beginner. Only applicants with large bird experience will be considered, and he cannot go to a home with children under the age of 13. If you would like more information regarding Titan, or to set up a time to come in to meet with him, please email Birds@lollypop.org to schedule your meet and greet! All meetings must be by appointment only."
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Senior"
          },
          "size": {
            "$t": "L"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/1/?bust=1487796125&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/1/?bust=1487796125&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/1/?bust=1487796125&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/1/?bust=1487796125&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/1/?bust=1487796125&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/2/?bust=1487796125&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/2/?bust=1487796125&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/2/?bust=1487796125&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/2/?bust=1487796125&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/2/?bust=1487796125&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/3/?bust=1487796125&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/3/?bust=1487796125&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/3/?bust=1487796125&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/3/?bust=1487796125&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37481594/3/?bust=1487796125&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "37481594"
          },
          "shelterPetId": {
            "$t": "33993666"
          },
          "breeds": {
            "breed": [
              {
                "$t": "African Grey"
              },
              {
                "$t": "African Grey"
              }
            ]
          },
          "name": {
            "$t": "Sammie"
          },
          "sex": {
            "$t": "M"
          },
          "description": {
            "$t": "Say hello to Sammie! Sammie is a fun teenage Congo African Grey that needs a new home. While he has been a charmer to everyone at the shelter, he definitely is a ladies man! He loves to step up, likes to be pet, and even tries to feed some of the staff his breakfast (we're flattered, but we brought our own.) Sammie will make a nice addition to a bird savvy family with a little bird experience. African Greys are very smart, and not always the best bird to start with! You will need an appointment to meet with Sammie, but just send an email to Birds@lollypop.org to get the process started. We hope to see you soon! Adoption Fee: $800.00"
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463604"
          },
          "shelterPetId": {
            "$t": "29588003"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 2"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463621"
          },
          "shelterPetId": {
            "$t": "29588023"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 4"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463635"
          },
          "shelterPetId": {
            "$t": "29587994"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 1"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463636"
          },
          "shelterPetId": {
            "$t": "29588011"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 3"
          },
          "sex": {
            "$t": "M"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463639"
          },
          "shelterPetId": {
            "$t": "29587956"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 5"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "585-223-1330 "
            },
            "state": {
              "$t": "NY"
            },
            "address2": {},
            "email": {
              "$t": "info@lollypop.org"
            },
            "city": {
              "$t": "Fairport"
            },
            "zip": {
              "$t": "14450"
            },
            "fax": {
              "$t": "585-425-4183"
            },
            "address1": {
              "$t": "99 Victor Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "M"
          },
          "media": {},
          "id": {
            "$t": "33463598"
          },
          "shelterPetId": {
            "$t": "29587962"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Duck"
              },
              {
                "$t": "Duck"
              }
            ]
          },
          "name": {
            "$t": "Khaki Campbell male 6"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "NY494"
          },
          "lastUpdate": {
            "$t": "2017-03-08T18:09:26Z"
          },
          "animal": {
            "$t": "Bird"
          }
        },
        {
          "options": {},
          "status": {
            "$t": "A"
          },
          "contact": {
            "phone": {
              "$t": "814-835-8331"
            },
            "state": {
              "$t": "PA"
            },
            "address2": {
              "$t": "Erie, PA 16506"
            },
            "email": {
              "$t": "nwpahs@choiceonemail.com"
            },
            "city": {
              "$t": "Erie"
            },
            "zip": {
              "$t": "16508"
            },
            "fax": {
              "$t": "814-835-8341"
            },
            "address1": {
              "$t": "2407 Zimmerly Road"
            }
          },
          "age": {
            "$t": "Adult"
          },
          "size": {
            "$t": "S"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37171253/1/?bust=1484191610&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37171253/1/?bust=1484191610&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37171253/1/?bust=1484191610&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37171253/1/?bust=1484191610&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37171253/1/?bust=1484191610&width=50&-t.jpg",
                  "@id": "1"
                }
              ]
            }
          },
          "id": {
            "$t": "37171253"
          },
          "shelterPetId": {},
          "breeds": {
            "breed": {
              "$t": "Parakeet (Other)"
            }
          },
          "name": {
            "$t": "Sonny & Cher"
          },
          "sex": {
            "$t": "F"
          },
          "description": {},
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "PA162"
          },
          "lastUpdate": {
            "$t": "2017-01-12T03:26:51Z"
          },
          "animal": {
            "$t": "Bird"
          }
        }
      ]
    },
    "header": {
      "timestamp": {
        "$t": "2017-03-08T19:00:41Z"
      },
      "status": {
        "message": {},
        "code": {
          "$t": "100"
        }
      },
      "version": {
        "$t": "0.1"
      }
    },
    "@xsi:noNamespaceSchemaLocation": "http://api.petfinder.com/schemas/0.9/petfinder.xsd"
  }
};

papp.pets = data.petfinder.pets.pet;


papp.displayPetMedia = function(media) {
    papp.elements.$petGallery.empty();
    const $imageCarousel = $('<div>')
        .addClass('mainCarousel')
        .appendTo(papp.elements.$petGallery);

    if(media.photos !== undefined) {
        media.photos.photo.forEach(function(photo){
            // Only show the largest version of the photo
            if(photo['@size'] === 'x') {

                // Build carousel and it's items
                $('<img/>')
                    .addClass('petImage carouselItem')
                    .attr('src', photo.$t)
                    .appendTo($imageCarousel);
            }
        }); 
    }
    else {
        $('<img/>')
            .addClass('petImage carouselItem')
            .attr('src', 'assets/images/no_images_found.jpg')
            .appendTo($imageCarousel);
    }

    $('.mainCarousel').flickity({
        contain: true,
        groupCells: true,
        groupCells: 1,
        setGallerySize: false,
        imagesLoaded: true
    });
};

papp.displayPetInfo = function(petIndex) {

    const name = papp.pets[petIndex].name.$t;
    const age = papp.pets[petIndex].age.$t;
    const gender = papp.pets[petIndex].sex.$t;
    const media = papp.pets[petIndex].media;
    const streetAddress = papp.pets[petIndex].contact.address1.$t;
    const city = papp.pets[petIndex].contact.city.$t;
    const state = papp.pets[petIndex].contact.state.$t;
    const zip = papp.pets[petIndex].contact.zip.$t;
    const email = papp.pets[petIndex].contact.email.$t;
    const address = `${streetAddress}, ${city}, ${state}, ${zip}, ${email}`;

    papp.displayPetMedia(media);

    let description = 'No description availible for this pet.'
    if(papp.pets[petIndex].description.$t !== undefined) {
        description = papp.pets[petIndex].description.$t;
    }

    papp.elements.$petName.html(name);
    papp.elements.$petGender.html(gender);
    papp.elements.$petAge.html(age);
    papp.elements.$petDescription.html(description);
    papp.elements.$petAddress.html(address);

    // papp.elements.$petDetails
    // papp.elements.$petInfo
    // papp.elements.$petBreed
};

papp.events = function() {
    $('button').on('click', function() {
        const buttonClicked = $(this);
        if(buttonClicked.val() === 'pet1') {
            papp.displayPetInfo(0);
        }
        else if(buttonClicked.val() === 'pet2') {
            papp.displayPetInfo(1);
        }
        else if(buttonClicked.val() === 'pet3') {
            papp.displayPetInfo(2);
        }
        else if(buttonClicked.val() === 'pet4') {
            papp.displayPetInfo(15);
        }
    });
};

papp.init = function() {
    papp.events();
}

$(function() {
    papp.init();
});