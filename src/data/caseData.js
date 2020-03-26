const data = {
  date: '24 Mar 16:45',
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
          date: '25 Feb, 2020 02:16',
          location: 'Dubai International Airport',
          description: 'EK450'
        },
        {
          date: '25 Feb, 2020 16:34',
          location: 'Denpasar International Airport',
          description: 'EK450'
        },
        {
          date: '26 Feb, 2020 05:10',
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
          date: '24 Feb, 2020 18:34',
          location: 'Singapore Changi Airport',
          description: 'NZ283'
        },
        {
          date: '25 Feb, 2020 09:36',
          location: 'Auckland Airport',
          description: 'NZ283'
        },
        {
          date: '2 Mar, 2020 08:20',
          location: 'Auckland Airport',
          description: 'NZ5103'
        },
        {
          date: '2 Mar, 2020 09:31',
          location: 'Palmerston North Airport',
          description: 'NZ5103'
        },
        {
          date: '2 Mar, 2020 14:33',
          location: 'Palmerston North Airport',
          description: 'NZ 8114'
        },
        {
          date: '2 Mar, 2020 15:50',
          location: 'Auckland Airport',
          description: 'NZ 8114'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: '',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 4,
          relation: 'Spouse',
          source_url:
            'https://www.stuff.co.nz/national/health/120049083/coronavirus-mum-with-virus-says-her-husband-is-nzs-fourth-diagnosed-case'
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
          date: '22 Feb, 2020 02:06',
          location: 'Doha Hamad International Airport ',
          description: 'QR920'
        },
        {
          date: '23 Feb, 2020 04:34',
          location: 'Auckland Airport',
          description: 'QR920'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'he likely contracted the virus from his father who had returned to Auckland from Iran',
          source_url:
            'https://www.stuff.co.nz/national/health/120025480/coronavirus-third-confirmed-case-for-new-zealand'
        },
        {
          info:
            'Associated with travel - Doha to Auckland (Qatar Airways QR0920 on Sunday 23 February).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 5,
          relation: 'Partner',
          source_url:
            'https://www.stuff.co.nz/national/health/120093774/ministry-of-health-to-give-an-update-on-coronavirus-situation-in-nz'
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
          date: '24 Feb, 2020 18:34',
          location: 'Singapore Changi Airport ',
          description: 'NZ0283'
        },
        {
          date: '25 Feb, 2020 09:36',
          location: 'Auckland Airport ',
          description: 'NZ0283'
        },
        {
          date: '28 Feb 2020',
          location: 'Spark Arena Auckland',
          description: 'Tool concert, general admission standing area'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Singapore to Auckland (Air New Zealand 283 on Tuesday 25 February).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 2,
          relation: 'spouse',
          source_url: ''
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
          date: '7 Mar 2020',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url:
        'https://www.health.govt.nz/news-media/news-items/covid-19-novel-coronavirus-update-7-march',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Associated with travel - Doha to Auckland (Qatar Airways QR0920 on Sunday 23 February).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 3,
          relation: 'partner',
          source_url:
            'https://www.stuff.co.nz/national/health/120093774/ministry-of-health-to-give-an-update-on-coronavirus-situation-in-nz'
        }
      ],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 6,
      case_number: 6,
      status: 'active',
      date_confirmed: '14 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '4 Mar, 2020 20:14',
          location: 'Houston Intercontinental Airport',
          description: 'NZ 029 '
        },
        {
          date: '6 Mar, 2020 05:57',
          location: 'Auckland Airport',
          description: 'NZ 029'
        },
        {
          date: '8 Mar 2020 8:30',
          location: 'Papakura Parish',
          description: '8.30am Sunday Service '
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Houston to Auckland (Air New Zealand 029 on Friday 6 March).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        },
        {
          info: 'Patient six shared communion chalice at south Auckland church',
          source_url:
            'https://www.stuff.co.nz/national/health/coronavirus/120317684/coronavirus-patient-six-shared-communion-chalice-at-south-auckland-church'
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
      date_confirmed: '15 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '9 Mar, 2020 15:33',
          location: 'Copenhagen Airport',
          description: 'QR160'
        },
        {
          date: '9 Mar, 2020 23:39',
          location: 'Doha Hamad International Airport',
          description: 'QR160'
        },
        {
          date: '9 Mar, 2020 02:29',
          location: 'Doha Hamad International Airport',
          description: 'QR920'
        },
        {
          date: '10 Mar 2020, 04:50',
          location: 'Auckland Airport ',
          description: 'QR920'
        },
        {
          date: '10 Mar, 2020 06:27',
          location: 'Auckland Airport',
          description: 'JQ225'
        },
        {
          date: '10 Mar, 2020 07:43',
          location: 'Christchurch International Airport',
          description: 'JQ225'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '15 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'France',
          description: ''
        },
        {
          date: '',
          location: 'Singapore',
          description: ''
        },
        {
          date: '13 Mar, 2020 17:30',
          location: 'Brisbane Airport',
          description: 'NZ 828'
        },
        {
          date: '14 Mar, 2020 00:00',
          location: 'Wellington International Airport',
          description: 'NZ 828'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'France to Singapore to Brisbane to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        },
        additional_info: [
          {
            info:
              'The Australian man with coronavirus stayed QT Wellington Hotel and visited the Milk Crate cafe.',
            source_url:
              'https://www.stuff.co.nz/national/health/coronavirus/120308271/wellington-cafe-milk-crate-confirms-australian-man-with-coronavirus-visited-over-the-weekend'
          },
          additional_info: [
            {
              info:
                'Australian man says he visited Wellington with the best of intentions',
              source_url:
                'https://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&objectid=12317101'
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
      date_confirmed: '17 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 23:01',
          location: 'Los Angeles International Airport',
          description: 'AA83'
        },
        {
          date: '14 Mar, 2020 08:36',
          location: 'Auckland Airport',
          description: 'AA83'
        },
        {
          date: '14 Mar, 2020 10:32',
          location: 'Auckland Airport',
          description: 'NZ419'
        },
        {
          date: '14 Mar, 2020 11:35',
          location: 'Wellington International Airport',
          description: 'NZ419'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Los Angeles to Auckland (American Airlines AA83) to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 10,
          relation: 'son',
          source_url: ''
        }
      ],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 10,
      case_number: 10,
      status: 'active',
      date_confirmed: '17 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 23:01',
          location: 'Los Angeles International Airport',
          description: 'AA83'
        },
        {
          date: '14 Mar, 2020 08:36',
          location: 'Auckland Airport',
          description: 'AA83'
        },
        {
          date: '14 Mar, 2020 10:32',
          location: 'Auckland Airport',
          description: 'NZ419'
        },
        {
          date: '14 Mar, 2020 11:35',
          location: 'Wellington International Airport',
          description: 'NZ419'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Los Angeles to Auckland (American Airlines AA83) to Wellington (Air New Zealand 828 on Saturday 14 March).  ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 9,
          relation: 'father',
          source_url: ''
        }
      ],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 11,
      case_number: 11,
      status: 'active',
      date_confirmed: '17 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '5 Mar, 2020 21:52',
          location: 'Frankfurt Airport',
          description: 'SQ325'
        },
        {
          date: '6 Mar, 2020 16:56',
          location: 'Singapore Changi Airport',
          description: 'SQ325'
        },
        {
          date: '6 Mar 2020 18:40',
          location: 'Singapore Changi Airport',
          description: 'NZ283'
        },
        {
          date: '7 Mar 2020 09:35',
          location: 'Auckland Airport',
          description: 'NZ283'
        },
        {
          date: '8 Mar 2020 12:25',
          location: 'Auckland Airport',
          description: 'NZ675'
        },
        {
          date: '8 Mar 2020 14:20',
          location: 'Dunedin International Airport',
          description: 'NZ675'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Frankfurt to Singapore (Singapore Airlines SQ325 on Friday 6 March) to Auckland (Air New Zealand NZ283 on Saturday 7 March) to Dunedin (Air New Zealand  NZ675 on Sunday 8 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 11,
          relation: 'father',
          source_url:
            'https://www.stuff.co.nz/national/health/coronavirus/120336762/live-ministry-of-health-coronavirus-press-conference'
        }
      ],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 12,
      case_number: 12,
      status: 'active',
      date_confirmed: '17 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Logan Park High School',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Associated with travel of case 11.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        },
        {
          info: 'Test results negative for all Logan Park High School contacts',
          source_url:
            'https://www.health.govt.nz/news-media/media-releases/covid-19-test-results-negative-all-logan-park-high-school-contacts'
        }
      ],
      related_cases: [
        {
          case_number: 11,
          relation: 'son',
          source_url: ''
        }
      ],
      gender: 'Male',
      age_bracket: 'Teens'
    },
    {
      id: 13,
      case_number: 13,
      status: 'active',
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '21 Mar, 2020 10:13',
          location: 'Dubai International Airport',
          description: 'EK448 '
        },
        {
          date: '22 Mar, 2020 10:32',
          location: 'Auckland Airport',
          description: 'EK448 '
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 14 March – flight EK448.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Europe',
          description: 'flights details to come'
        },
        {
          date: '9 Mar 2020',
          location: 'Auckland',
          description: 'flights details to come'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Europe to Auckland (on Monday 9 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '11 mar 2020 19:40',
          location: 'San Francisco International Airport',
          description: 'NZ 007'
        },
        {
          date: '13 mar 2020 05:45',
          location: 'Auckland Airport',
          description: 'NZ 007'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'San Francisco to Auckland (Air New Zealand NZ007 on Friday 13 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '11 Mar 2020',
          location: 'Canada',
          description: 'flights details to come'
        },
        {
          date: '12 Mar 2020',
          location: 'Auckland Airport',
          description: 'flights details to come'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelling from Canada (on Thursday 12 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Gold Coast, Australia',
          description: 'flight details to come'
        },
        {
          date: '10 Mar 2020',
          location: 'Invercargill',
          description: 'flight details to come'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelling from the Gold Coast (on Thursday 5 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        },
        {
          date: "19 mar 2020",
          info:
            'The man behind Invercargills first coronavirus case has been identified.', 
          source_url:
            'https://www.stuff.co.nz/national/health/coronavirus/120411265/the-man-behind-invercargills-first-covid19-case-has-been-identified'
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
      date_confirmed: '18 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'London',
          description: 'flight details to come'
        },
        {
          date: '15 Mar, 2020 19:42',
          location: 'Singapore Changi Airport',
          description: 'SQ297'
        },
        {
          date: '16 Mar, 2020 10:18',
          location: 'Christchurch International Airport',
          description: 'SQ297'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelling from London (on Monday 16 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '8 Mar 2020',
          location: 'Sydney',
          description: 'NZ112.'
        },
        {
          date: '8 Mar 2020',
          location: 'Auckland Airport',
          description: 'NZ112.'
        },
        {
          date: '8 Mar 2020',
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '18 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Europe',
          description: 'flight details to come.'
        },
        {
          date: '15 Mar 2020',
          location: 'Waikato',
          description: 'flight details to come.'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelling from Europe (on Sunday 15 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '19 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Cairo International Airport',
          description: 'EK926'
        },
        {
          date: '8 Mar 2020',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '9 Mar, 2020 13:55',
          location: 'Auckland Airport',
          description: 'NZ8041'
        },
        {
          date: '9 Mar, 2020 14:49',
          location: 'Taranaki',
          description: 'NZ8041'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Cairo to Dubai (Emirates EK926) to Auckland (Emirates EK448) to New Plymouth (Air New Zealand NZ8041 on Monday 9 March). ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '19 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '7 Mar, 2020 01:55',
          location: 'Cairo International Airport',
          description: 'LH581 '
        },
        {
          date: '7 Mar, 2020 05:27',
          location: 'Frankfurt Airport',
          description: 'LH581'
        },
        {
          date: 'date unknown',
          location: 'Vancouver International Airport ',
          description: 'Flight unknown'
        },
        {
          date: '13 Mar, 2020 19:36',
          location: 'Vancouver International Airport ',
          description: 'NZ23'
        },
        {
          date: '15 Mar, 2020 05:25',
          location: 'Auckland Airport',
          description: 'NZ23'
        },
        {
          date: '15 Mar, 2020 08:15',
          location: 'Auckland Airport',
          description: 'NZ8035'
        },
        {
          date: '15 Mar, 2020 08:59',
          location: 'New Plymouth Airport',
          description: 'NZ8035'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Cairo to Frankfurt (Lufthansa LH581 on Saturday 7 March) to Vancouver (Air New Zealand NZ23) to Auckland (Air New Zealand NZ8035) to New Plymouth (on Sunday 15 March). ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 21:00',
          location: 'Paris Charles de Gaulle Airport',
          description: 'EY 38'
        },
        {
          date: '15 Mar, 2020 06:23',
          location: 'Abu Dhabi International Airport',
          description: 'EY 38'
        },
        {
          date: '15 Mar, 2020 10:19',
          location: 'Abu Dhabi International Airport',
          description: 'EY 450'
        },
        {
          date: '16 Mar, 2020 06:31',
          location: 'Sydney Airport',
          description: 'EY 450'
        },
        {
          date: '16 Mar, 2020 10:08',
          location: 'Sydney Airport',
          description: 'VA 141'
        },
        {
          date: '16 Mar, 2020 15:05',
          location: 'Auckland Airport',
          description: 'VA 141'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 22:20',
          location: 'Singapore Changi Airport',
          description: 'SQ285'
        },
        {
          date: '13 Mar, 2020 13:20',
          location: 'Auckland Airport',
          description: 'SQ285'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 25,
      case_number: 25,
      status: 'active',
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '11 Mar, 2020 21:18',
          location: 'Los Angeles International Airport',
          description: 'NZ 5'
        },
        {
          date: '13 Mar, 2020 06:11',
          location: 'Auckland Airport',
          description: 'NZ 5'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Los Angeles to Auckland (Air New Zealand NZ05 on Friday 13 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 12:17',
          location: 'Melbourne Airport',
          description: 'QF153'
        },
        {
          date: '15 Mar, 2020 17:54',
          location: 'Auckland Airport',
          description: 'QF153'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'London to Singapore (Qantas QF2 on Friday 13 March) to Melbourne (Qantas QF36 on Saturday 14 March) to Auckland (Qantas QF153 on Sunday 15 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 27,
      case_number: 27,
      status: 'active',
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 15:17',
          location: 'London Heathrow Airport',
          description: 'NZ 1'
        },
        {
          date: '15 Mar, 2020 21:55',
          location: 'Los Angeles International Airport',
          description: 'NZ 1'
        },
        {
          date: '17 Mar, 2020 06:44',
          location: 'Auckland Airport',
          description: 'NZ 1'
        },
        {
          date: '17 Mar, 2020 08:35',
          location: 'Auckland Airport',
          description: 'NZ525'
        },
        {
          date: '17 Mar, 2020 09:56',
          location: 'Christchurch International Airport',
          description: 'NZ525'
        },
        {
          date: '17 Mar, 2020 11:50',
          location: 'Christchurch International Airport',
          description: 'NZ5749'
        },
        {
          date: '17 Mar, 2020 12:48',
          location: 'Dunedin International Airport',
          description: 'NZ5749'
        },
        {
          date: '',
          location: 'Southland NZ',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female ',
      age_bracket: '30s'
    },
    {
      id: 28,
      case_number: 28,
      status: 'active',
      date_confirmed: '19 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '13 Mar, 2020 09:10',
          location: 'Sydney Airport',
          description: 'EK412'
        },
        {
          date: '13 Mar, 2020 13:55',
          location: 'Christchurch International Airport',
          description: 'EK412'
        },
        {
          date: '',
          location: 'Southland NZ',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Singapore',
          description: ''
        },
        {
          date: '11 mar 2020',
          location: 'Auckland',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 23:01',
          location: 'Los Angeles International Airport',
          description: 'AA83'
        },
        {
          date: '14 Mar, 2020 08:36',
          location: 'Auckland Airport',
          description: 'AA83'
        },
        {
          date: '15 Mar, 2020 11:08',
          location: 'Auckland Airport',
          description: 'NZ535'
        },
        {
          date: '15 Mar, 2020 12:29',
          location: 'Christchurch International Airport',
          description: 'NZ535'
        },
        {
          date: '',
          location: 'Canterbury NZ',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Los Angeles to Auckland (American Airlines AA83 on Saturday 14 March) to Christchurch (Air New Zealand NZ535 on Sunday 15 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 07:46',
          location: 'Melbourne Airport',
          description: 'SQ 247'
        },
        {
          date: '14 Mar, 2020 13:00',
          location: 'Wellington International Airport',
          description: 'SQ 247'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'London to Singapore (Singapore Airlines SQ321 Thursday 12 March) to Melbourne to Wellington (Singapore Airlines SQ247 on Saturday 14 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 02:20',
          location: 'Doha Hamad International Airport',
          description: 'QR920'
        },
        {
          date: '16 Mar, 2020 04:51',
          location: 'Auckland Airport',
          description: 'QR920'
        },
        {
          date: '17 Mar, 2020 13:53',
          location: 'Auckland Airport',
          description: 'NZ5021'
        },
        {
          date: '17 Mar, 2020 14:58',
          location: 'Hawkes Bay Airport',
          description: 'NZ5021'
        },
        {
          date: '',
          location: 'Hawkes Bay NZ',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Munich to Qatar (Qatar Airways QR58 on Sunday 15 March) to Auckland (Qatar Airways QR920 Monday 16 March) to Napier (Air New Zealand NZ5021 on Tuesday 17 March).',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 16:38',
          location: 'Denpasar International Airport',
          description: 'EK450'
        },
        {
          date: '16 Mar, 2020 05:03',
          location: 'Auckland Airport',
          description: 'EK450'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 34,
          relation: 'same flight',
          source_url: ''
        }
      ],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 34,
      case_number: 34,
      status: 'active',
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 16:38',
          location: 'Denpasar International Airport',
          description: 'EK450'
        },
        {
          date: '16 Mar, 2020 05:03',
          location: 'Auckland Airport',
          description: 'EK450'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [
        {
          case_number: 33,
          relation: 'same flight',
          source_url: ''
        }
      ],
      gender: 'Female',
      age_bracket: '70s'
    },
    {
      id: 35,
      case_number: 35,
      status: 'active',
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Los Angeles',
          description: ''
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Los Angeles',
          description: ''
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'London',
          description: 'flight details to come'
        },
        {
          date: '',
          location: 'Doha',
          description: 'flight details to come'
        },
        {
          date: '15 Mar 2020',
          location: 'Auckland',
          description: 'flight details to come'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'London to Doha to Auckland (on Sunday 15 March) - flight details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        },
        {
          info:
          'Jenene Crossan is one of the 155 people diagnosed with Covid-19',
          source_url:
          'https://www.magic.co.nz/home/news/2020/03/coronavirus--patient-on-ryan-bridge-drive.html'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '20 Mar 2020',
          location: 'Lake Wairarapa',
          description: 'Wairarapa Region'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Under investigation.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '20 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Los Angeles',
          description: 'flight unknown'
        },
        {
          date: '18 Mar 2020',
          location: 'Auckland Airport',
          description: 'flight unknown'
        },
        {
          date: '18 Mar, 2020 09:27',
          location: 'Auckland Airport',
          description: 'NZ615'
        },
        {
          date: '18 Mar, 2020 11:22',
          location: 'Queenstown Airport',
          description: 'NZ615'
        },
        {
          date: '',
          location: 'Otago',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 40,
      case_number: 40,
      status: 'active',
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'Wellington',
          description: 'Wellington Region'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel related, however flights outside of infectious period. ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 11:22',
          location: 'Dunedin International Airport',
          description: 'NZ670'
        },
        {
          date: '15 Mar, 2020 13:06',
          location: 'Auckland Airport',
          description: 'NZ670'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Cruise ship travel. Domestic flights – Dunedin to Auckland on 15 March – flight NZ670.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 22:20',
          location: 'Singapore Changi Airport',
          description: 'SQ285'
        },
        {
          date: '13 Mar, 2020 13:20',
          location: 'Auckland Airport',
          description: 'SQ285'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 09:36',
          location: 'Sydney Airport',
          description: 'QF161'
        },
        {
          date: '14 Mar, 2020 14:57',
          location: 'Wellington International Airport',
          description: 'QF161'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Sydney to Wellington on 14 March – flight QF161.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '8 Mar, 2020 18:15',
          location: 'Auckland Airport',
          description: 'NZ449'
        },
        {
          date: '8 Mar, 2020 19:03',
          location: 'Wellington International Airport',
          description: 'NZ449'
        },
        {
          date: '12 Mar, 2020 06:10',
          location: 'Wellington International Airport',
          description: 'NZ5810'
        },
        {
          date: '12 Mar, 2020 07:16',
          location: 'Hamilton International Airport',
          description: 'NZ5810'
        },
        {
          date: '13 Mar, 2020 17:15',
          location: 'Hamilton International Airport',
          description: 'NZ5823'
        },
        {
          date: '13 Mar, 2020 18:22',
          location: 'Wellington International Airport',
          description: 'NZ582'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel related, however international flights outside of infectious period.  Domestic flights: Auckland to Wellington on 8 March – flight NZ449 Wellington to Hamilton on 12 March – flight NZ5810 Hamilton to Wellington on 13 March – flight NZ5823.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '11 Mar, 2020 10:21',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '12 Mar, 2020 10:43',
          location: 'Auckland Airport',
          description: 'EK448'
        },
        {
          date: '12 Mar, 2020 13:54',
          location: 'Auckland Airport',
          description: 'NZ433'
        },
        {
          date: '12 Mar, 2020 14:56',
          location: 'Wellington International Airport',
          description: 'NZ433'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Dubai to Auckland on 12 March – flight EK44 Auckland to Wellington on 12 March – flight NZ433',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '16 Mar, 2020 15:10',
          location: 'Dunedin International Airport',
          description: 'NZ674'
        },
        {
          date: '16 Mar, 2020 17:01',
          location: 'Auckland Airport',
          description: 'NZ674'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Under investigation. Took internal flight when symptomatic. Dunedin to Auckland on 16 March – flight NZ674',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '9 Mar, 2020 10:26',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '10 Mar, 2020 10:46',
          location: 'Auckland Airport',
          description: 'EK448'
        },
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
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '13 Mar, 2020 06:58',
          location: 'Queenstown Airport',
          description: 'NZ642'
        },
        {
          date: '13 Mar, 2020 07:57',
          location: 'Christchurch International Airport',
          description: 'NZ642'
        },
        {
          date: '13 Mar 2020',
          location: 'Christchurch International Airport',
          description: ' '
        },
        {
          date: '13 Mar 2020',
          location: 'Palmerston North Airport',
          description: ' '
        },
        {
          date: '',
          location: 'Manawatu District',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel related. Queenstown to Christchurch on 13 March – flight NZ642 Christchurch to Palmerston North on 13 March – flight details unclear',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '13 Mar, 2020 02:53',
          location: 'Doha Hamad International Airport',
          description: 'QR920'
        },
        {
          date: '14 Mar, 2020 04:56',
          location: 'Auckland Airport',
          description: 'QR920'
        },
        {
          date: '16 Mar, 2020 10:45',
          location: 'Auckland Airport',
          description: 'NZ5107'
        },
        {
          date: '16 Mar, 2020 11:52',
          location: 'Palmerston North Airport',
          description: 'NZ5107'
        },
        {
          date: '',
          location: 'Manawatu District',
          description: ''
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Doha to Auckland on 14 March – flight QR0920 uckland to Palmerston North on 16 March – flight NZ5107',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
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
          info: 'Contact with traveller. Further investigations continue.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '16 Mar, 2020 08:35',
          location: 'Auckland Airport ',
          description: 'NZ5065'
        },
        {
          date: '16 Mar, 2020 10:00',
          location: 'Nelson Airport',
          description: 'NZ5065'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel related, however international flights outside of infectious period. Domestic flights: Auckland to Nelson on 16 March – flight 5065',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
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
      date_confirmed: '21 mar 2020',
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
          info: 'Contact with probable case.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 53,
      case_number: 53,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '12 Mar, 2020 22:14',
          location: 'Los Angeles International Airport',
          description: 'NZ 1'
        },
        {
          date: '14 Mar, 2020 07:02',
          location: 'Auckland Airport',
          description: 'NZ 1'
        },
        {
          date: '14 Mar, 2020 09:33',
          location: 'Auckland Airport',
          description: 'NZ 615'
        },
        {
          date: '14 Mar, 2020 11:22',
          location: 'Queenstown Airport',
          description: 'NZ 615'
        },
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
            'LA to Auckland on 14 March – flight NZ1\nAuckland to Queenstown on 14 March – flight NZ615',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 54,
      case_number: 54,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waikato', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Contact with a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 55,
      case_number: 55,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 13:31',
          location: 'Honolulu International Airport',
          description: 'HA445'
        },
        {
          date: '15 Mar, 2020 21:49',
          location: 'Auckland Airport',
          description: 'HA445'
        },
        { date: '', location: 'Waikato', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Honolulu to Auckland on 14 March – flight HA445 (arrived 15 March)',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 56,
      case_number: 56,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '',
          location: 'United States of America',
          description: 'details to come'
        },
        { date: '', location: 'Bay of Plenty', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel history to the United States of America – details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 57,
      case_number: 57,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Ireland', description: 'Details to come' },
        { date: '', location: 'Dubai', description: 'Details to come' },
        { date: '', location: 'Australia', description: 'Details to come' },
        { date: '', location: 'Hamilton NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travel history to Ireland, Dubai and Australia. Details to come.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 58,
      case_number: 58,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 15:03',
          location: 'Dunedin International Airport',
          description: 'NZ674'
        },
        {
          date: '15 Mar, 2020 16:50',
          location: 'Auckland Airport',
          description: 'NZ674'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'No international travel history – exposed at World Herefords Conference in Queenstown. Domestic travel history:\nDunedin to Auckland on Sunday 15 March – flight NZ674',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 59,
      case_number: 59,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'No international travel history – exposed at World Herefords Conference in Queenstown.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 60,
      case_number: 60,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '15 Mar, 2020 10:26',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '16 Mar, 2020 10:38',
          location: 'Auckland Airport',
          description: 'EK448'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on Monday 16 March – flight EK448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 61,
      case_number: 61,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Africa', description: 'details to come' },
        { date: '', location: 'Auckland', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Travel to Africa – details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 62,
      case_number: 62,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 18:52',
          location: 'Bangkok Suvarnabhumi Airport',
          description: 'TG491'
        },
        {
          date: '15 Mar, 2020 11:52',
          location: 'Auckland Airport',
          description: 'TG491'
        },
        {
          date: '16 Mar, 2020 13:54',
          location: 'Auckland Airport',
          description: 'NZ8041'
        },
        {
          date: '16 Mar, 2020 14:36',
          location: 'New Plymouth Airport',
          description: 'NZ8041'
        },
        { date: '', location: 'Taranaki', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Bangkok to Auckland on Sunday 15 March – flight TG0491\nAuckland to New Plymouth on 16 March – flight NZ8041',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 63,
      case_number: 63,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '16 Mar, 2020 10:11',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '17 Mar, 2020 11:09',
          location: 'Auckland Airport',
          description: 'EK448'
        },
        {
          date: '18 Mar, 2020 13:53',
          location: 'Auckland Airport',
          description: 'NZ8041'
        },
        {
          date: '18 Mar, 2020 13:53',
          location: 'New Plymouth Airport',
          description: 'NZ8041'
        },
        { date: '', location: 'Taranaki', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Dubai to Auckland on Tuesday 17 March – flight EK448\nAuckland to New Plymouth on 18 March – flight NZ8041',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 64,
      case_number: 64,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 20:40',
          location: 'San Francisco International Airport',
          description: 'NZ7'
        },
        {
          date: '16 Mar, 2020 05:36',
          location: 'Auckland Airport',
          description: 'NZ7'
        },
        {
          date: '17 Mar, 2020 08:07',
          location: 'Auckland Airport',
          description: 'NZ523'
        },
        {
          date: '17 Mar, 2020 09:28',
          location: 'Christchurch International Airport',
          description: 'NZ523'
        },
        { date: '', location: 'Canterbury NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'San Francisco to Auckland on Monday 16 March – flight NZ7\nAuckland to Christchurch on Tuesday 17 March – flight NZ523 ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 65,
      case_number: 65,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 23:43',
          location: 'Melbourne Airport',
          description: 'JQ217'
        },
        {
          date: '15 Mar, 2020 05:19',
          location: 'Auckland Airport',
          description: 'JQ217'
        },
        { date: '', location: 'Northland', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Melbourne to Auckland on Sunday 15 March – flight JQ217',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 66,
      case_number: 66,
      status: 'active',
      date_confirmed: '22 Mar 2020',
      date_suspected: '',
      location_history: [
        {
          date: '14 Mar, 2020 10:55',
          location: 'Dubai International Airport',
          description: 'EK448'
        },
        {
          date: '15 Mar, 2020 10:52',
          location: 'Auckland Airport',
          description: 'EK448'
        }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 15 March - flight EK448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 67,
      case_number: 67,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Wellington to Auckland on 15 March – flight JQ256',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 68,
      case_number: 68,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Dunedin', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'San Francisco to Auckland on 17 March – flight NZ07, Auckland to Dunedin on 19 March – flight JQ285',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 69,
      case_number: 69,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 15 March – flight EK448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 70,
      case_number: 70,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 71,
      case_number: 71,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'LA to Auckland on 18 March – flight NZ05',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 72,
      case_number: 72,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Canterbury NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Singapore to Christchurch on 18 March – flight SQ297',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 73,
      case_number: 73,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: 'Teens'
    },
    {
      id: 74,
      case_number: 74,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Travel to USA – flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 75,
      case_number: 75,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waikato', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Relative of a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 76,
      case_number: 76,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Hong Kong to Auckland on 13 March – flight CX2191',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 77,
      case_number: 77,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Kuala Lumpur to Auckland on 19 March – flight MH0133',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 78,
      case_number: 78,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Manawatu District', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Sydney to Wellington on 19 March – flight NZ842',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 79,
      case_number: 79,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Tasman', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'International travel – flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 80,
      case_number: 80,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Marlborough NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Sydney to Auckland on 18 March – flight QF143, Auckland to Blenheim on 18 March – flight NZ8205',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 81,
      case_number: 81,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 18 March – flight EK0448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 82,
      case_number: 82,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Linked to two confirmed cases',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 83,
      case_number: 83,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Doha to Auckland on 18 March – flight QR920',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 84,
      case_number: 84,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Doha to Auckland on 18 March – flight QR920',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 85,
      case_number: 85,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Relative of a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: 'Child'
    },
    {
      id: 86,
      case_number: 86,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 87,
      case_number: 87,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Canterbury NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 88,
      case_number: 88,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Nelson', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '70s'
    },
    {
      id: 89,
      case_number: 89,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Nelson', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Related to case 88, details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 90,
      case_number: 90,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'LA to New Zealand on 15 March – flight NZ1',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 91,
      case_number: 91,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'LA to New Zealand on 15 March – flight NZ1',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 92,
      case_number: 92,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Doha to Auckland on 22 March – flight QR920',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 93,
      case_number: 93,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 94,
      case_number: 94,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Dubai to Auckland on 19 March – flight EK448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 95,
      case_number: 95,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 96,
      case_number: 96,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 97,
      case_number: 97,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 98,
      case_number: 98,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Kapiti Coast', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 99,
      case_number: 99,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Nelson', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Linked to a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 100,
      case_number: 100,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: 'Teens'
    },
    {
      id: 101,
      case_number: 101,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Upper Hutt', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 102,
      case_number: 102,
      status: 'active',
      date_confirmed: '23 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 103,
      case_number: 103,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'USA to Auckland, arrived 18 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 104,
      case_number: 104,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 105,
      case_number: 105,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'South Canterbury NZ', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Departed Switzerland 16 March, flew via Abu Dhabi to New Zealand – flight EY0052',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 106,
      case_number: 106,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Otago', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'No international travel history – exposed at World Herefords Conference in Queenstown.',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 107,
      case_number: 107,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Dunedin', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'No international travel history – exposed at World Herefords Conference in Queenstown',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    },
    {
      id: 108,
      case_number: 108,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Queenstown', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Dubai to Auckland on 18 March – flight EK448, Auckland to Queenstown on 19 March – flight EK7563',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: 'Teens'
    },
    {
      id: 109,
      case_number: 109,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Christchurch', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Relative of a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 110,
      case_number: 110,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Christchurch', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Relative of a confirmed case',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 111,
      case_number: 111,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waikato', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Departed on 16 March – flight EK0448',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 112,
      case_number: 112,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    },
    {
      id: 113,
      case_number: 113,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Arrived in Auckland 18 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '40s'
    },
    {
      id: 114,
      case_number: 114,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: 'Teens'
    },
    {
      id: 115,
      case_number: 115,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    },
    {
      id: 116,
      case_number: 116,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Arrived in Auckland on 20 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 117,
      case_number: 117,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Arrived in Auckland on 18 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    },
    {
      id: 118,
      case_number: 118,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: 'Teens'
    },
    {
      id: 119,
      case_number: 119,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waikato', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'No international travel history – exposed at World Herefords Conference in Queenstown',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 120,
      case_number: 120,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Dunedin', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'London to LA on 14 March, then LA to Auckland on flight NZ5, Auckland to Dunedin on 16 March – flight NZ671',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 121,
      case_number: 121,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Dunedin', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Dubai to Auckland, arrived on 19 March – flight EK447, Auckland to Dunedin on 19 March – flight JQ285',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 122,
      case_number: 122,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '20s'
    },
    {
      id: 123,
      case_number: 123,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Nelson', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '80s'
    },
    {
      id: 124,
      case_number: 124,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 125,
      case_number: 125,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelled from USA to New Zealand, arrived on 19 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 126,
      case_number: 126,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Travelled from USA to New Zealand, arrived on 19 March, flight details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 127,
      case_number: 127,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 128,
      case_number: 128,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 129,
      case_number: 129,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    },
    {
      id: 130,
      case_number: 130,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 131,
      case_number: 131,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Hawke’s Bay', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Barcelona via Dubai to Auckland, arrived on 18 March, flight EK448, Auckland to Napier on 19 March – flight NZ5021',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 132,
      case_number: 132,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Hawke’s Bay', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info:
            'Barcelona via Dubai to Auckland, arrived on 18 March, flight EK448, Auckland to Napier on 19 March – flight NZ5021',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '70s'
    },
    {
      id: 133,
      case_number: 133,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 134,
      case_number: 134,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 135,
      case_number: 135,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '70s'
    },
    {
      id: 136,
      case_number: 136,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 137,
      case_number: 137,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Marlborough NZ', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '30s'
    },
    {
      id: 138,
      case_number: 138,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Marlborough NZ', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 139,
      case_number: 139,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '64'
    },
    {
      id: 140,
      case_number: 140,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wairarapa', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '20s'
    },
    {
      id: 141,
      case_number: 141,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'New Plymouth', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 142,
      case_number: 142,
      status: 'active',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waitemata', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Details to come',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '30s'
    }
  ],
  probable_cases: [
    {
      id: 1,
      case_number: 1,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Not provided',
      age_bracket: '50s'
    },
    {
      id: 2,
      case_number: 2,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: 'Teens'
    },
    {
      id: 3,
      case_number: 3,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Dunedin', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 4,
      case_number: 4,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Hamilton NZ', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '40s'
    },
    {
      id: 5,
      case_number: 5,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Arrived in Auckland from Qatar',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '70s'
    },
    {
      id: 6,
      case_number: 6,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: 'Arrived in New Zealand from USA',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '70s'
    },
    {
      id: 7,
      case_number: 7,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Canterbury NZ', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: 'Teens'
    },
    {
      id: 8,
      case_number: 8,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Waikato', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '50s'
    },
    {
      id: 9,
      case_number: 9,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Auckland', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '50s'
    },
    {
      id: 10,
      case_number: 10,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '80s'
    },
    {
      id: 11,
      case_number: 11,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Wellington', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: '60s'
    },
    {
      id: 12,
      case_number: 12,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [{ date: '', location: 'Wellington', description: '' }],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Female',
      age_bracket: '60s'
    },
    {
      id: 13,
      case_number: 13,
      status: 'probable',
      date_confirmed: '24 Mar 2020',
      date_suspected: '',
      location_history: [
        { date: '', location: 'Wellington', description: '' }
      ],
      media_release_url: '',
      media_release_description: '',
      additional_info: [
        {
          info: ' ',
          source_url:
            'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
        }
      ],
      related_cases: [],
      gender: 'Male',
      age_bracket: 'Teens'
    },
  ],
};

exports.data = data;
