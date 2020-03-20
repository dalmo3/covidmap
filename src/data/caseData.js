const data = {
  date: '2020-03-19T07:27:06.075Z',
  cases: [
    {
      id: 1,
      case_number: 1,
      status: 'active',
      date_confirmed: new Date('28 Feb 2020'),
      date_suspected: '',
      location_history: [
        {
          date: '26 Feb, 2020',
          location: 'Denpasar International Airport',
          // lat: -37.0082,
          // lon: 174.785,
          description: 'EK450'
        },
        {
          date: '27 Feb, 2020',
          location: 'Auckland Airport',
          lat: -37.0082,
          lon: 174.785,
          description: 'EK450'
        },
        {
          date: '28 Feb, 2020',
          location: 'Auckland Hospital',
          // lat: -37.0082,
          // lon: 174.785,
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
      date_confirmed: '2020-03-19T07:27:06.075Z',
      date_suspected: '',
      location_history: [
        {
          date: '2020-03-19T07:27:06.075Z',
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
        {
          case_number: 4,
          relation: 'Same Flight',
          source_url: '',
        }
      ],
      gender: 'Female',
      age_bracket: 30
    },
    {
      id: 3,
      case_number: 3,
      status: 'active',
      date_confirmed: '2020-03-19T07:27:06.075Z',
      date_suspected: '',
      location_history: [
        {
          date: '2020-03-19T07:27:06.075Z',
          location: 'Wellington',
          lat: -41.3276,
          lon: 174.8076,
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
          case_number: 5,
          relation: 'Partner'
        }
      ],
      gender: 'Male',
      age_bracket: 40
    },
    {
      id: 4,
      case_number: 4,
      status: 'active',
      date_confirmed: '2020-03-19T07:27:06.075Z',
      date_suspected: '',
      location_history: [
        {
          date: '2020-03-19T07:27:06.075Z',
          location: 'Wellington',
          lat: -41.3276,
          lon: 174.8076,
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
          case_number: 0,
          relation: 'infected | infected by'
        }
      ],
      gender: '',
      age_bracket: 0
    },
    {
      id: 5,
      case_number: 5,
      status: 'active',
      date_confirmed: '2020-03-19T07:27:06.075Z',
      date_suspected: '',
      location_history: [
        {
          date: '19 Mar 2020 8:43',
          location: 'Wellington',
          lat: -41.3276,
          lon: 174.8076,
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
    }
  ]
};

exports.data = data;
