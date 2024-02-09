const {User,Shipment,Company} = require("../models/associations");
const { sequelize } = require("./connection");

const shipments = [
  {
    address: '123 Main St, Cityville, USA',
    status: 'Pending',
    price: 50,
    userId: 7,
    companyId: 4,
  },
  {
    address: '456 Oak Ln, Townsville, USA',
    status: 'In Transit',
    price: 75,
    userId: 7,
    companyId: 4,
  },
  {
    address: '789 Pine Ave, Villagetown, USA',
    status: 'Delivered',
    price: 100,
    userId: 1,
    companyId: 2,
  },
  {
    address: '101 Elm Dr, Hamletsville, USA',
    status: 'Pending',
    price: 60,
    userId: 3,
    companyId: 3,
  },
  {
    address: '202 Maple Ct, Suburbia, USA',
    status: 'In Transit',
    price: 80,
    userId: 8,
    companyId: 5,
  },
];

const companies = [
    {
      name: "TechNova Solutions",
      address: "123 Main Street, Suite 456, Cyber City, Digitaland"
    },
    {
      name: "GreenGrove EcoTech",
      address: "789 Green Avenue, Sustainability Plaza, Ecotopia"
    },
    {
      name: "ByteCraft Innovations",
      address: "456 Tech Lane, Silicon Valley, Circuit City"
    },
    {
      name: "Skyline Dynamics",
      address: "101 Cloud Boulevard, Sky High Tower, Datacenter City"
    },
    {
      name: "Fusion Innovators Inc.",
      address: "555 Quantum Street, Fusion Park, Innovationville"
    }
  ];  

const users = [
    {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'bananas'
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@email.com',
      password: 'passionFruit'
    },
    {
      name: 'Robert Johnson',
      email: 'rjohnson@email.com',
      password: 'smokedGouda'
    },
    {
      name: 'Emily Davis',
      email: 'emilydavis@email.com',
      password: 'TurkeyWins2020'
    },
    {
      name: 'David Williams',
      email: 'davidwilliams@email.com',
      password: '1234notjoking'
    },
    {
      name: 'Sarah Brown',
      email: 'sarahbrown@email.com',
      password: 'fAkepassword!',
    },
    {
      name: 'Michael Green',
      email: 'michaelgreen@email.com',
      password: 'chzeus'
    },
    {
      name: 'Jessica Johnson',
      email: 'jessicajohnson@email.com',
      password: 'spookymovie'
    },
    {
      name: 'William Taylor',
      email: 'williamtaylor@email.com',
      password: 'misterandmisses'
    },
    {
      name: 'Samantha Lee',
      email: 'samanthalee@email.com',
      password: 'jokingIamNot'
    }
  ];

const seedDatabase = async () => {

    // try {
    //     await Company.bulkCreate(companies);
    //     console.log('Able to create company data');
    // } catch (err) {
    //     console.log('Unable to add companies', err);
    // }

    await sequelize.sync({force: true})

    const models = [Company,User,Shipment];
    const data = [companies,users,shipments];

    for (let x = 0; x < models.length; x++) {
        try {
            await models[x].bulkCreate(data[x]);
            console.log('Added data for ', models[x])
        } catch (error) {
            console.log('Data', error);
        }
    }


}

module.exports = seedDatabase;