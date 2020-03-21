const data = {
  date: '2020-03-19T07:27:06.075Z',
  cases: [
    {
      id: 1,
      case_number: 1,
      status: 'active',
      date_confirmed: '28 Feb 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Tehran ',
          description: ''
        },
        {
          date: '25 Feb 2020',
          location: 'Dubai International Airport',
          description: 'EK450'
        },
        {
          date: '25 Feb 2020',
          location: 'Denpasar International Airport',
          description: 'EK450'
        },
        {
          date: '26 Feb, 2020',
          location: 'Auckland Airport',
          description: 'EK450'
        },
        {
          date: '28 Feb, 2020',
          location: 'Auckland Hospital',
          description: ''
        }
      ],
      media_release_url:
        'https://www.health.govt.nz/news-media/media-releases/single-case-covid-19-confirmed-new-zealand',
      media_release_description: `The first case of COVID-19 is now confirmed in New Zealand in a person in their 60s recently returned from Iran.

      The results of the test were formally reported to the Ministry at around 4.15pm this afternoon.
      
      Although we have our first case of COVID-19, the chances of community outbreak remain low.
      
      The Ministry of Health is confident the public risk from this new infection is being well managed because of the public messaging, awareness of COVID-19 disease and our public health response to managing cases and contacts.
      
      The patient confirmed with COVID-19 is being treated in Auckland City Hospital. They are in an improving condition in isolation, in a negative pressure room to prevent any spread of the disease.
      
      Household contacts are in isolation as a precautionary measure. Public health officials have begun tracing the patient’s other close contacts to ensure appropriate protection measures are in place, including on the flight involved which originated in Tehran and came via Bali.
      
      Anyone who was on the final leg of the flight, Emirates EK450 arriving Auckland on Wednesday 26 February, and is concerned should contact the COVID-19 Healthline number 0800 358 5453.
      
      The person arrived in Auckland on 26 February and travelled home in a private car. Their family became concerned about their condition and called Healthline.
      
      They were advised to seek medical attention and attended Auckland City Hospital emergency department that same day. All were wearing masks on arrival. As a result of the individual's symptoms and travel history they were admitted and tested.
      
      Two earlier tests were negative for COVID-19. A further test today using a more specific sample proved positive.
      
      Contact tracing has started and close contacts are in isolation. Other close family contacts will also now be tested for COVID-19.
      
      Hospital staff involved in the patient's care are using with appropriate personal protection. District health boards have been preparing for managing cases of COVID-19.`,
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: '',
      age_bracket: 60
    },
    {
      id: 2,
      case_number: 2,
      status: 'active',
      date_confirmed: '4 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '24 Feb 2020',
          location: 'Singapore Changi Airport',
          description: 'NZ283'
        },
        {
          date: '25 Feb 2020',
          location: 'Auckland Airport',
          description: 'NZ283'
        },
        {
          date: '2 Mar 2020',
          location: 'Auckland Airport',
          description: 'NZ5103'
        },
        {
          date: '2 Mar 2020',
          location: 'Palmerston North Airport',
          description: 'NZ5103'
        },
        {
          date: '2 Mar 2020',
          location: 'Palmerston North Airport',
          description: 'NZ 8114'
        },
        {
          date: '2 Mar 2020',
          location: 'Auckland Airport',
          description: 'NZ 8114'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
        {
          case_number: 4,
          relation: 'Spouse',
          source_url: 'https://www.stuff.co.nz/national/health/120049083/coronavirus-mum-with-virus-says-her-husband-is-nzs-fourth-diagnosed-case',
        }
      ],
      gender: 'Female',
      age_bracket: 30
    },
    {
      id: 3,
      case_number: 3,
      status: 'active',
      date_confirmed: '5 Mar, 2020',
      date_suspected: '',
      location_history: [
        {
          date: '22 Feb 2020',
          location: 'Doha Hamad International Airport ',
          description: 'QR920'
        },
        {
          date: '23 Feb 2020',
          location: 'Auckland Airport',
          description: 'QR920'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'he likely contracted the virus from his father who had returned to Auckland from Iran',
          source_url: 'https://www.stuff.co.nz/national/health/120025480/coronavirus-third-confirmed-case-for-new-zealand'
        }
      ],
      related_cases: [
        {
          case_number: 5,
          relation: 'Partner',
          source_url:'https://www.stuff.co.nz/national/health/120093774/ministry-of-health-to-give-an-update-on-coronavirus-situation-in-nz',
        }
      ],
      gender: 'Male',
      age_bracket: 40
    },
    {
      id: 4,
      case_number: 4,
      status: 'active',
      date_confirmed: '6 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '24 Feb 2020',
          location: 'Singapore Changi Airport ',
          description: 'NZ0283'
        },
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
        {
          case_number: 0,
          relation: 'infected | infected by'
        }
      ],
      gender: 'male',
      age_bracket: 40
    },
    {
      id: 5,
      case_number: 5,
      status: 'active',
      date_confirmed: '7 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '19 Mar 2020 8:43',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
        {
          case_number: 3,
          relation: 'infected | infected by'
        }
      ],
      gender: 'Female',
      age_bracket: 40
    },
    {
      id: 53,
      case_number: 53,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 52,
      case_number: 52,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Nelson',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 51,
      case_number: 51,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Nelson',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 50,
      case_number: 50,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Manawatu',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 49,
      case_number: 49,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Manawatu',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 48,
      case_number: 48,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Taupo',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 47,
      case_number: 47,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 46,
      case_number: 46,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 45,
      case_number: 45,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 44,
      case_number: 44,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 43,
      case_number: 43,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 42,
      case_number: 42,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 41,
      case_number: 41,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Taranaki',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 40,
      case_number: 40,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington Region',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 39,
      case_number: 39,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 38,
      case_number: 38,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 37,
      case_number: 37,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 36,
      case_number: 36,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 35,
      case_number: 35,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 34,
      case_number: 34,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 33,
      case_number: 33,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 32,
      case_number: 32,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Hawkes Bay',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 31,
      case_number: 31,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 30,
      case_number: 30,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Canterbury',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 29,
      case_number: 29,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 28,
      case_number: 28,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Southern DHB',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 27,
      case_number: 27,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Southern DHB',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 26,
      case_number: 26,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 25,
      case_number: 25,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 24,
      case_number: 24,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Rotorua',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 23,
      case_number: 23,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Northland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 22,
      case_number: 22,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Taranaki',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 21,
      case_number: 21,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Taranaki',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 20,
      case_number: 20,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 19,
      case_number: 19,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 18,
      case_number: 18,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Canterbury',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 17,
      case_number: 17,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Invercargill',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 16,
      case_number: 16,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 15,
      case_number: 15,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 14,
      case_number: 14,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 13,
      case_number: 13,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 12,
      case_number: 12,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Dunedin',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 11,
      case_number: 11,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Dunedin',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 10,
      case_number: 10,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 9,
      case_number: 9,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 8,
      case_number: 8,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 7,
      case_number: 7,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Dunedin',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 6,
      case_number: 6,
      status: 'active',
      date_confirmed: '',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url: ''
        }
      ],
      related_cases: [
      ],
      gender: '',
      age_bracket: 0
    },
  ]
};

exports.data = data;
