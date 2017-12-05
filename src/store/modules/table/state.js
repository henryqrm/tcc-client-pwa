export default [
  {
    name: 'Salão principal',
    description: '',
    tables: [
      {
        id: 0,
        name: 'Mesa 1',
        occupations: {
          total: 10,
          current: 5,
        },
        status: 'Ocupado',
        isOccupied: true,
      }, {
        id: 1,
        name: 'Mesa 2',
        occupations: {
          total: 8,
          current: 5,
        },
        status: 'Livre',
        isOccupied: false,
      }, {
        id: 2,
        name: 'Mesa 3',
        occupations: {
          total: 8,
          current: 5,
        },
        status: 'Livre',
        isOccupied: false,
      },
    ],
  }, {
    name: 'Varanda',
    description: '',
    tables: [
      {
        id: 3,
        name: 'Mesa 4',
        occupations: {
          total: 2,
          current: 5,
        },
        status: 'Ocupado',
        isOccupied: true,
      }, {
        id: 4,
        name: 'Mesa 5',
        occupations: {
          total: 4,
          current: 5,
        },
        status: 'Livre',
        isOccupied: false,
      }, {
        id: 5,
        name: 'Mesa 6',
        occupations: {
          total: 2,
          current: 5,
        },
        status: 'Ocupado',
        isOccupied: true,
      }, {
        id: 6,
        name: 'Mesa 7',
        occupations: {
          total: 4,
          current: 5,
        },
        status: 'Livre',
        isOccupied: false,
      },
    ],
  },
];
