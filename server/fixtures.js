if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    email: 'stevo_parker@hotmail.com',
    password: '12345678',
    profile: {location: {lat: 22.280796, lng: 114.131592, updatedAt: Date.now()}, firstName: "Stephen", lastName: "Parker", destination: "Wanchai", about: "I really enjoy seeing naked chicks."}
  });
  Accounts.createUser({
    email: 'victorlin@hotmail.com',
    password: '12345678',
    profile: {location: {lat: 22.269518, lng: 114.130562, updatedAt: Date.now()}, firstName: "Victor", lastName: "Lin",destination: "Cyberport", about: "I really enjoy eating beef."}
  });
  Accounts.createUser({
    email: 'harryng@hotmail.com',
    password: '12345678',
    profile: {location: {lat: 22.285839, lng: 114.145325, updatedAt: Date.now()}, firstName: "Harry", lastName: "Ng",destination: "Cyberport", about: "I really need a ride dude!"}
  });
  Accounts.createUser({
    email: 'fermartin@hotmail.com',
    password: '12345678',
    profile: {location: {lat: 22.281114, lng: 114.147771, updatedAt: Date.now()}, firstName: "Fernando", lastName: "Martin",destination: "Cyberport", about: "I really enjoy murder."}
  });
  Accounts.createUser({
    email: 'pbateman@hotmail.com',
    password: '12345678',
    profile: {location: {lat: 22.261575, lng: 114.129661, updatedAt: Date.now()}, firstName: "Patrick", lastName: "Bateman",destination: "Wanchai", about: "WTF mate!"}
  });
};