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
          info:
            'Iran to Bali to Auckland (Emirates EK450 on Wednesday 26 February). ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: '',
      age_bracket: '60s'
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
      age_bracket: '30s'
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
        },
        {
          info:
            'Associated with travel - Doha to Auckland (Qatar Airways QR0920 on Sunday 23 February).  ',
          source_url: ''
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
      age_bracket: '40s'
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
          info:
            'Singapore to Auckland (Air New Zealand 283 on Tuesday 25 February).  ',
          ssource_url: ''
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
          info:
            'Associated with travel - Doha to Auckland (Qatar Airways QR0920 on Sunday 23 February).  ',
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
      age_bracket: '40s'
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
          info:
            'Houston to Auckland (Air New Zealand 029 on Friday 6 March).  ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'Denmark to Doha (Qatar Airways QR160) to Auckland (Qatar Airways QR920) to Christcurch (Jetstar JQ225 on Tuesday 10 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
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
          info:
            'France to Singapore to Brisbane to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'Los Angeles to Auckland (American Airlines AA83) to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
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
          info:
            'Los Angeles to Auckland (American Airlines AA83) to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
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
          info:
            'Frankfurt to Singapore (Singapore Airlines SQ325 on Friday 6 March) to Auckland (Air New Zealand NZ283 on Saturday 7 March) to Dunedin (Air New Zealand  NZ675 on Sunday 8 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info: 'Associated with travel of case 11.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: 'Teens'
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
          info: 'Extensive travel through Europe - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          info:
            'Europe to Auckland (on Monday 9 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
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
          info:
            'San Francisco to Auckland (Air New Zealand NZ007 on Friday 13 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'Travelling from Canada (on Thursday 12 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'Travelling from the Gold Coast (on Thursday 5 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info:
            'Travelling from London (on Monday 16 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
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
          info:
            'Travelling from Sydney (on Sunday 8 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
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
          info:
            'Travelling from Europe (on Sunday 15 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
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
          info:
            'Cairo to Dubai (Emirates EK926) to Auckland (Emirates EK448) to New Plymouth (Air New Zealand NZ8041 on Monday 9 March). ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
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
          info:
            'Cairo to Frankfurt (Lufthansa LH581 on Saturday 7 March) to Vancouver (Air New Zealand NZ23) to Auckland (Air New Zealand NZ8035) to New Plymouth (on Sunday 15 March). ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info:
            'Paris to Abu Dhabi (Etihad EY38 on Saturday 14 March) to Sydney (Etihad EY450) to Auckland (Virgin Australia VA0141 on Monday 16 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
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
          info:
            'Travelling from France (on Friday 13 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: ' '
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
          info:
            'Los Angeles to Auckland (Air New Zealand NZ05 on Friday 13 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'London to Singapore (Qantas QF2 on Friday 13 March) to Melbourne (Qantas QF36 on Saturday 14 March) to Auckland (Qantas QF153 on Sunday 15 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: ' '
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
          info: 'Details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: ' ',
      age_bracket: ' '
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
          info: 'Details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: ' ',
      age_bracket: ' '
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
          info: 'Details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: ' ',
      age_bracket: ' '
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
          info:
            'Los Angeles to Auckland (American Airlines AA83 on Saturday 14 March) to Christchurch (Air New Zealand NZ535 on Sunday 15 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          info:
            'London to Singapore (Singapore Airlines SQ321 Thursday 12 March) to Melbourne to Wellington (Singapore Airlines SQ247 on Saturday 14 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info:
            'Munich to Qatar (Qatar Airways QR58 on Sunday 15 March) to Auckland (Qatar Airways QR920 Monday 16 March) to Napier (Air New Zealand NZ5021 on Tuesday 17 March).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
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
          info: 'Paris to Dubai (Emirates EK74) to Auckland (Emirates EK450).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info: 'Paris to Dubai (Emirates EK74) to Auckland (Emirates EK450).',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '70s'
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
          info: 'Los Angeles to Auckland - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
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
          info: 'Los Angeles to Auckland - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info:
            'London to Doha to Auckland (on Sunday 15 March) - flight details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
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
          info: 'Details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
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
          info: 'Details to come.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          info:
            'Travel related, however flights outside of infectious period. ',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Cruise ship travel. Domestic flights – Dunedin to Auckland on 15 March – flight NZ670.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
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
          location: 'Waikato',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Singapore to Auckland on 13 March – flight SQ0285.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
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
          location: 'Wellington',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Sydney to Wellington on 14 March – flight QF161.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          info:
            'Travel related, however international flights outside of infectious period.  omestic flights: uckland to Wellington on 8 March – flight NZ449 ellington to Hamilton on 12 March – flight NZ5810 amilton to Wellington on 13 March – flight NZ5823.',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          info:
            'Dubai to Auckland on 12 March – flight EK44 Auckland to Wellington on 12 March – flight NZ433',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
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
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dunedin to Auckland on 16 March – flight NZ674',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
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
          location: 'Taupo',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 10 March – flight EK0448',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
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
          location: 'Manawatu',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel related. Queenstown to Christchurch on 13 March – flight NZ642 Christchurch to Palmerston North on 13 March – flight details unclear',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
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
          info:
            'Doha to Auckland on 14 March – flight QR0920 uckland to Palmerston North on 16 March – flight NZ5107',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
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
          location: 'Nelson',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Under investigation',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
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
          location: 'Texas',
          description: ''
        },
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
          info:
            'Travel related, however international flights outside of infectious period. Domestic flights: Auckland to Nelson on 16 March – flight 5065',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
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
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Under investigation',
          source_url: ''
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    }
  ]
};

exports.data = data;
