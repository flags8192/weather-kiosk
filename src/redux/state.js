export const state = {
  weather: {
    isLoading: false,
    isOtherLoaded: false,
    isWeatherLoaded: false,
    otherTemp: {
      home: 22,
      outdoor: 1,
      heating: 22,
      basement: 16,
    },
    fetchDataTime: 1603110530702,
    lat: 54.35,
    lon: 31.84,
    timezone: 'Europe/Moscow',
    timezone_offset: 10800,
    current: {
      dt: 1603110336,
      sunrise: 1603081741,
      sunset: 1603118746,
      temp: 7.02,
      feels_like: -0.6,
      pressure: 1014,
      humidity: 61,
      dew_point: 0.02,
      uvi: 1.17,
      clouds: 28,
      visibility: 10000,
      wind_speed: 8.05,
      wind_deg: 265,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'небольшой дождь',
          icon: '10d',
        },
      ],
      rain: {
        '1h': 0.4664,
      },
    },
    minutely: [
      {
        dt: 1603110360,
        precipitation: 0.4664,
      },
      {
        dt: 1603110420,
        precipitation: 0.5118,
      },
      {
        dt: 1603110480,
        precipitation: 0.5572,
      },
      {
        dt: 1603110540,
        precipitation: 0.6026,
      },
      {
        dt: 1603110600,
        precipitation: 0.648,
      },
      {
        dt: 1603110660,
        precipitation: 0.5730000000000001,
      },
      {
        dt: 1603110720,
        precipitation: 0.498,
      },
      {
        dt: 1603110780,
        precipitation: 0.42300000000000004,
      },
      {
        dt: 1603110840,
        precipitation: 0.34800000000000003,
      },
      {
        dt: 1603110900,
        precipitation: 0.273,
      },
      {
        dt: 1603110960,
        precipitation: 0.30260000000000004,
      },
      {
        dt: 1603111020,
        precipitation: 0.3322,
      },
      {
        dt: 1603111080,
        precipitation: 0.3618,
      },
      {
        dt: 1603111140,
        precipitation: 0.39139999999999997,
      },
      {
        dt: 1603111200,
        precipitation: 0.421,
      },
      {
        dt: 1603111260,
        precipitation: 0.5098,
      },
      {
        dt: 1603111320,
        precipitation: 0.5986,
      },
      {
        dt: 1603111380,
        precipitation: 0.6874,
      },
      {
        dt: 1603111440,
        precipitation: 0.7762,
      },
      {
        dt: 1603111500,
        precipitation: 0.865,
      },
      {
        dt: 1603111560,
        precipitation: 0.7762,
      },
      {
        dt: 1603111620,
        precipitation: 0.6874,
      },
      {
        dt: 1603111680,
        precipitation: 0.5986,
      },
      {
        dt: 1603111740,
        precipitation: 0.5098,
      },
      {
        dt: 1603111800,
        precipitation: 0.421,
      },
      {
        dt: 1603111860,
        precipitation: 0.3724,
      },
      {
        dt: 1603111920,
        precipitation: 0.3238,
      },
      {
        dt: 1603111980,
        precipitation: 0.2752,
      },
      {
        dt: 1603112040,
        precipitation: 0.2266,
      },
      {
        dt: 1603112100,
        precipitation: 0.178,
      },
      {
        dt: 1603112160,
        precipitation: 0.1424,
      },
      {
        dt: 1603112220,
        precipitation: 0.10679999999999999,
      },
      {
        dt: 1603112280,
        precipitation: 0,
      },
      {
        dt: 1603112340,
        precipitation: 0,
      },
      {
        dt: 1603112400,
        precipitation: 0,
      },
      {
        dt: 1603112460,
        precipitation: 0,
      },
      {
        dt: 1603112520,
        precipitation: 0,
      },
      {
        dt: 1603112580,
        precipitation: 0,
      },
      {
        dt: 1603112640,
        precipitation: 0,
      },
      {
        dt: 1603112700,
        precipitation: 0,
      },
      {
        dt: 1603112760,
        precipitation: 0,
      },
      {
        dt: 1603112820,
        precipitation: 0,
      },
      {
        dt: 1603112880,
        precipitation: 0,
      },
      {
        dt: 1603112940,
        precipitation: 0,
      },
      {
        dt: 1603113000,
        precipitation: 0,
      },
      {
        dt: 1603113060,
        precipitation: 0,
      },
      {
        dt: 1603113120,
        precipitation: 0,
      },
      {
        dt: 1603113180,
        precipitation: 0,
      },
      {
        dt: 1603113240,
        precipitation: 0,
      },
      {
        dt: 1603113300,
        precipitation: 0,
      },
      {
        dt: 1603113360,
        precipitation: 0,
      },
      {
        dt: 1603113420,
        precipitation: 0,
      },
      {
        dt: 1603113480,
        precipitation: 0,
      },
      {
        dt: 1603113540,
        precipitation: 0,
      },
      {
        dt: 1603113600,
        precipitation: 0,
      },
      {
        dt: 1603113660,
        precipitation: 0,
      },
      {
        dt: 1603113720,
        precipitation: 0,
      },
      {
        dt: 1603113780,
        precipitation: 0,
      },
      {
        dt: 1603113840,
        precipitation: 0,
      },
      {
        dt: 1603113900,
        precipitation: 0,
      },
      {
        dt: 1603113960,
        precipitation: 0,
      },
    ],
    hourly: [
      {
        dt: 1603108800,
        temp: 7.02,
        feels_like: -0.6,
        pressure: 1014,
        humidity: 61,
        dew_point: 0.02,
        clouds: 28,
        visibility: 10000,
        wind_speed: 8.05,
        wind_deg: 265,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03d',
          },
        ],
        pop: 0.05,
      },
      {
        dt: 1603112400,
        temp: 6.71,
        feels_like: -0.28,
        pressure: 1014,
        humidity: 63,
        dew_point: 0.17,
        clouds: 32,
        visibility: 10000,
        wind_speed: 7.18,
        wind_deg: 264,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03d',
          },
        ],
        pop: 0.05,
      },
      {
        dt: 1603116000,
        temp: 5.78,
        feels_like: -0.06,
        pressure: 1014,
        humidity: 67,
        dew_point: 0.13,
        clouds: 33,
        visibility: 10000,
        wind_speed: 5.53,
        wind_deg: 255,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03d',
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1603119600,
        temp: 4.48,
        feels_like: -1.32,
        pressure: 1014,
        humidity: 73,
        dew_point: 0.07,
        clouds: 36,
        visibility: 10000,
        wind_speed: 5.47,
        wind_deg: 251,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0.02,
      },
      {
        dt: 1603123200,
        temp: 4.01,
        feels_like: -2.23,
        pressure: 1015,
        humidity: 75,
        dew_point: -0.01,
        clouds: 36,
        visibility: 10000,
        wind_speed: 6.07,
        wind_deg: 249,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0.01,
      },
      {
        dt: 1603126800,
        temp: 3.82,
        feels_like: -2.68,
        pressure: 1015,
        humidity: 76,
        dew_point: 0.01,
        clouds: 29,
        visibility: 10000,
        wind_speed: 6.45,
        wind_deg: 249,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603130400,
        temp: 3.57,
        feels_like: -3.01,
        pressure: 1016,
        humidity: 77,
        dew_point: -0.1,
        clouds: 24,
        visibility: 10000,
        wind_speed: 6.54,
        wind_deg: 250,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'небольшая облачность',
            icon: '02n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603134000,
        temp: 3.52,
        feels_like: -3.19,
        pressure: 1016,
        humidity: 77,
        dew_point: -0.19,
        clouds: 57,
        visibility: 10000,
        wind_speed: 6.72,
        wind_deg: 253,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603137600,
        temp: 3.36,
        feels_like: -3.32,
        pressure: 1016,
        humidity: 78,
        dew_point: -0.17,
        clouds: 28,
        visibility: 10000,
        wind_speed: 6.68,
        wind_deg: 254,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603141200,
        temp: 3.15,
        feels_like: -3.45,
        pressure: 1016,
        humidity: 79,
        dew_point: 0.02,
        clouds: 19,
        visibility: 10000,
        wind_speed: 6.57,
        wind_deg: 254,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'небольшая облачность',
            icon: '02n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603144800,
        temp: 3,
        feels_like: -3.53,
        pressure: 1016,
        humidity: 81,
        dew_point: 0.19,
        clouds: 25,
        visibility: 10000,
        wind_speed: 6.51,
        wind_deg: 254,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603148400,
        temp: 2.95,
        feels_like: -3.6,
        pressure: 1017,
        humidity: 83,
        dew_point: 0.45,
        clouds: 30,
        visibility: 10000,
        wind_speed: 6.59,
        wind_deg: 255,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603152000,
        temp: 2.76,
        feels_like: -3.64,
        pressure: 1017,
        humidity: 85,
        dew_point: 0.65,
        clouds: 26,
        visibility: 10000,
        wind_speed: 6.41,
        wind_deg: 258,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603155600,
        temp: 2.59,
        feels_like: -3.69,
        pressure: 1017,
        humidity: 86,
        dew_point: 0.65,
        clouds: 0,
        visibility: 10000,
        wind_speed: 6.24,
        wind_deg: 260,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'ясно',
            icon: '01n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603159200,
        temp: 2.37,
        feels_like: -3.85,
        pressure: 1017,
        humidity: 87,
        dew_point: 0.54,
        clouds: 11,
        visibility: 10000,
        wind_speed: 6.14,
        wind_deg: 258,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'небольшая облачность',
            icon: '02n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603162800,
        temp: 2.38,
        feels_like: -4.03,
        pressure: 1017,
        humidity: 87,
        dew_point: 0.55,
        clouds: 39,
        visibility: 10000,
        wind_speed: 6.41,
        wind_deg: 258,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603166400,
        temp: 2.33,
        feels_like: -4.1,
        pressure: 1017,
        humidity: 88,
        dew_point: 0.55,
        clouds: 54,
        visibility: 10000,
        wind_speed: 6.47,
        wind_deg: 260,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603170000,
        temp: 2.08,
        feels_like: -4.2,
        pressure: 1017,
        humidity: 89,
        dew_point: 0.56,
        clouds: 50,
        visibility: 10000,
        wind_speed: 6.23,
        wind_deg: 263,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603173600,
        temp: 2.88,
        feels_like: -3.91,
        pressure: 1017,
        humidity: 85,
        dew_point: 0.76,
        clouds: 48,
        visibility: 10000,
        wind_speed: 7,
        wind_deg: 270,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'переменная облачность',
            icon: '03d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603177200,
        temp: 3.93,
        feels_like: -3.59,
        pressure: 1018,
        humidity: 78,
        dew_point: 0.57,
        clouds: 63,
        visibility: 10000,
        wind_speed: 8,
        wind_deg: 279,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603180800,
        temp: 4.4,
        feels_like: -3.23,
        pressure: 1018,
        humidity: 74,
        dew_point: 0.32,
        clouds: 78,
        visibility: 10000,
        wind_speed: 8.1,
        wind_deg: 285,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603184400,
        temp: 4.65,
        feels_like: -2.8,
        pressure: 1019,
        humidity: 72,
        dew_point: 0.07,
        clouds: 85,
        visibility: 10000,
        wind_speed: 7.81,
        wind_deg: 292,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603188000,
        temp: 4.58,
        feels_like: -2.72,
        pressure: 1020,
        humidity: 72,
        dew_point: -0.02,
        clouds: 89,
        visibility: 10000,
        wind_speed: 7.58,
        wind_deg: 295,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603191600,
        temp: 4.65,
        feels_like: -2.27,
        pressure: 1020,
        humidity: 71,
        dew_point: -0.3,
        clouds: 91,
        visibility: 10000,
        wind_speed: 7.02,
        wind_deg: 297,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603195200,
        temp: 4.91,
        feels_like: -2.05,
        pressure: 1021,
        humidity: 70,
        dew_point: -0.37,
        clouds: 89,
        visibility: 10000,
        wind_speed: 7.08,
        wind_deg: 300,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603198800,
        temp: 4.48,
        feels_like: -2.16,
        pressure: 1022,
        humidity: 71,
        dew_point: -0.69,
        clouds: 83,
        visibility: 10000,
        wind_speed: 6.59,
        wind_deg: 305,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603202400,
        temp: 4.04,
        feels_like: -1.66,
        pressure: 1022,
        humidity: 73,
        dew_point: -0.85,
        clouds: 84,
        visibility: 10000,
        wind_speed: 5.23,
        wind_deg: 299,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603206000,
        temp: 3.59,
        feels_like: -1.54,
        pressure: 1022,
        humidity: 75,
        dew_point: -1.06,
        clouds: 82,
        visibility: 10000,
        wind_speed: 4.41,
        wind_deg: 296,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603209600,
        temp: 2.38,
        feels_like: -2.07,
        pressure: 1023,
        humidity: 82,
        dew_point: -0.93,
        clouds: 76,
        visibility: 10000,
        wind_speed: 3.45,
        wind_deg: 291,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603213200,
        temp: 1.76,
        feels_like: -2.26,
        pressure: 1024,
        humidity: 87,
        dew_point: -0.71,
        clouds: 67,
        visibility: 10000,
        wind_speed: 2.87,
        wind_deg: 288,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603216800,
        temp: 1.54,
        feels_like: -2.19,
        pressure: 1024,
        humidity: 88,
        dew_point: -0.68,
        clouds: 71,
        visibility: 10000,
        wind_speed: 2.45,
        wind_deg: 283,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'облачно с прояснениями',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603220400,
        temp: 1.44,
        feels_like: -2.13,
        pressure: 1024,
        humidity: 89,
        dew_point: -0.64,
        clouds: 98,
        visibility: 10000,
        wind_speed: 2.23,
        wind_deg: 267,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603224000,
        temp: 1.36,
        feels_like: -2.4,
        pressure: 1024,
        humidity: 89,
        dew_point: -0.52,
        clouds: 99,
        visibility: 10000,
        wind_speed: 2.49,
        wind_deg: 253,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603227600,
        temp: 1.64,
        feels_like: -2.3,
        pressure: 1024,
        humidity: 88,
        dew_point: -0.09,
        clouds: 99,
        visibility: 10000,
        wind_speed: 2.76,
        wind_deg: 247,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603231200,
        temp: 2.21,
        feels_like: -1.8,
        pressure: 1024,
        humidity: 86,
        dew_point: 0.23,
        clouds: 99,
        visibility: 10000,
        wind_speed: 2.91,
        wind_deg: 246,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603234800,
        temp: 1.98,
        feels_like: -2.04,
        pressure: 1025,
        humidity: 87,
        dew_point: 0.12,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.91,
        wind_deg: 244,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603238400,
        temp: 1.83,
        feels_like: -2.13,
        pressure: 1024,
        humidity: 87,
        dew_point: -0.03,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.8,
        wind_deg: 238,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603242000,
        temp: 1.98,
        feels_like: -1.82,
        pressure: 1024,
        humidity: 86,
        dew_point: 0,
        clouds: 99,
        visibility: 10000,
        wind_speed: 2.57,
        wind_deg: 233,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603245600,
        temp: 2.18,
        feels_like: -1.45,
        pressure: 1024,
        humidity: 85,
        dew_point: -0.01,
        clouds: 99,
        visibility: 10000,
        wind_speed: 2.34,
        wind_deg: 227,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603249200,
        temp: 2.6,
        feels_like: -1.37,
        pressure: 1023,
        humidity: 83,
        dew_point: 0.04,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.84,
        wind_deg: 221,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603252800,
        temp: 2.66,
        feels_like: -0.89,
        pressure: 1023,
        humidity: 83,
        dew_point: 0.08,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.25,
        wind_deg: 203,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04n',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603256400,
        temp: 2.74,
        feels_like: -0.98,
        pressure: 1022,
        humidity: 83,
        dew_point: 0.24,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.51,
        wind_deg: 174,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603260000,
        temp: 3.34,
        feels_like: -0.89,
        pressure: 1022,
        humidity: 82,
        dew_point: 0.69,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.32,
        wind_deg: 175,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        pop: 0,
      },
      {
        dt: 1603263600,
        temp: 3.8,
        feels_like: -0.76,
        pressure: 1021,
        humidity: 87,
        dew_point: 1.86,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.09,
        wind_deg: 181,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        pop: 0.86,
        rain: {
          '1h': 0.51,
        },
      },
      {
        dt: 1603267200,
        temp: 3.92,
        feels_like: -0.59,
        pressure: 1021,
        humidity: 91,
        dew_point: 2.73,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.19,
        wind_deg: 179,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        pop: 0.99,
        rain: {
          '1h': 0.98,
        },
      },
      {
        dt: 1603270800,
        temp: 4.28,
        feels_like: 0.07,
        pressure: 1020,
        humidity: 92,
        dew_point: 3.25,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.9,
        wind_deg: 171,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        pop: 1,
        rain: {
          '1h': 0.78,
        },
      },
      {
        dt: 1603274400,
        temp: 4.52,
        feels_like: 0.05,
        pressure: 1020,
        humidity: 93,
        dew_point: 3.5,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.37,
        wind_deg: 173,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        pop: 1,
        rain: {
          '1h': 0.78,
        },
      },
      {
        dt: 1603278000,
        temp: 4.87,
        feels_like: 0.43,
        pressure: 1019,
        humidity: 92,
        dew_point: 3.76,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.38,
        wind_deg: 180,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        pop: 1,
        rain: {
          '1h': 0.32,
        },
      },
    ],
    daily: [
      {
        dt: 1603098000,
        sunrise: 1603081741,
        sunset: 1603118746,
        temp: {
          day: 5.96,
          min: 1.48,
          max: 7.02,
          night: 4.32,
          eve: 5.7,
          morn: 1.48,
        },
        feels_like: {
          day: -0.59,
          night: -2.23,
          eve: -0.11,
          morn: -3.43,
        },
        pressure: 1013,
        humidity: 74,
        dew_point: 1.85,
        wind_speed: 6.89,
        wind_deg: 254,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'небольшой дождь',
            icon: '10d',
          },
        ],
        clouds: 40,
        pop: 0.61,
        rain: 0.65,
        uvi: 1.17,
      },
      {
        dt: 1603184400,
        sunrise: 1603168258,
        sunset: 1603205009,
        temp: {
          day: 4.65,
          min: 1.54,
          max: 4.91,
          night: 1.54,
          eve: 3.59,
          morn: 2.38,
        },
        feels_like: {
          day: -2.8,
          night: -2.19,
          eve: -1.54,
          morn: -4.03,
        },
        pressure: 1019,
        humidity: 72,
        dew_point: 0.07,
        wind_speed: 7.81,
        wind_deg: 292,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        clouds: 85,
        pop: 0,
        uvi: 1.21,
      },
      {
        dt: 1603270800,
        sunrise: 1603254775,
        sunset: 1603291273,
        temp: {
          day: 4.28,
          min: 1.64,
          max: 5.43,
          night: 5.05,
          eve: 5.43,
          morn: 2.6,
        },
        feels_like: {
          day: 0.07,
          night: 2.12,
          eve: 2.25,
          morn: -1.37,
        },
        pressure: 1020,
        humidity: 92,
        dew_point: 3.25,
        wind_speed: 3.9,
        wind_deg: 171,
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'дождь',
            icon: '10d',
          },
        ],
        clouds: 100,
        pop: 1,
        rain: 3.7,
        uvi: 1.25,
      },
      {
        dt: 1603357200,
        sunrise: 1603341292,
        sunset: 1603377538,
        temp: {
          day: 8.82,
          min: 3.79,
          max: 11.25,
          night: 11.1,
          eve: 10.25,
          morn: 5.11,
        },
        feels_like: {
          day: 3.15,
          night: 6.61,
          eve: 5.94,
          morn: 1.1,
        },
        pressure: 1011,
        humidity: 82,
        dew_point: 5.95,
        wind_speed: 6.77,
        wind_deg: 225,
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'дождь',
            icon: '10d',
          },
        ],
        clouds: 94,
        pop: 1,
        rain: 3.52,
        uvi: 1.23,
      },
      {
        dt: 1603443600,
        sunrise: 1603427810,
        sunset: 1603463804,
        temp: {
          day: 12.75,
          min: 9.42,
          max: 12.75,
          night: 11.37,
          eve: 11.76,
          morn: 9.42,
        },
        feels_like: {
          day: 8.58,
          night: 7.29,
          eve: 7.2,
          morn: 5.48,
        },
        pressure: 1010,
        humidity: 84,
        dew_point: 10.25,
        wind_speed: 6.06,
        wind_deg: 230,
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'дождь',
            icon: '10d',
          },
        ],
        clouds: 100,
        pop: 1,
        rain: 5.06,
        uvi: 1.12,
      },
      {
        dt: 1603530000,
        sunrise: 1603514328,
        sunset: 1603550071,
        temp: {
          day: 8.15,
          min: 3.89,
          max: 10.23,
          night: 3.89,
          eve: 5.23,
          morn: 5.95,
        },
        feels_like: {
          day: 3.31,
          night: 1.07,
          eve: 1.88,
          morn: 1.65,
        },
        pressure: 1013,
        humidity: 74,
        dew_point: 3.82,
        wind_speed: 4.97,
        wind_deg: 291,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'ясно',
            icon: '01d',
          },
        ],
        clouds: 5,
        pop: 0.24,
        uvi: 1.02,
      },
      {
        dt: 1603616400,
        sunrise: 1603600847,
        sunset: 1603636340,
        temp: {
          day: 6.16,
          min: 2.56,
          max: 6.78,
          night: 3.5,
          eve: 5.22,
          morn: 3.29,
        },
        feels_like: {
          day: 1.61,
          night: -0.02,
          eve: 2.12,
          morn: 0.73,
        },
        pressure: 1021,
        humidity: 67,
        dew_point: 0.67,
        wind_speed: 3.77,
        wind_deg: 321,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'пасмурно',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0,
        uvi: 1.03,
      },
      {
        dt: 1603702800,
        sunrise: 1603687365,
        sunset: 1603722609,
        temp: {
          day: 4.69,
          min: -0.74,
          max: 4.69,
          night: -0.74,
          eve: 0.97,
          morn: 0.1,
        },
        feels_like: {
          day: -0.62,
          night: -5,
          eve: -3.07,
          morn: -3.48,
        },
        pressure: 1027,
        humidity: 70,
        dew_point: -0.59,
        wind_speed: 4.69,
        wind_deg: 356,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'ясно',
            icon: '01d',
          },
        ],
        clouds: 6,
        pop: 0,
        uvi: 1.04,
      },
    ],
    alerts: [
      {
        sender_name: '',
        event: 'Wind',
        start: 1603094400,
        end: 1603130400,
        description: '',
      },
    ],
  },
  errors: [],
}
