# create db with initial collections
mongo -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} --eval "
db = db.getSiblingDB('heroes');
db.createCollection('heroes');
db.createCollection('crisises');
db.createCollection('missions');
db.createUser({user: 'alfred',pwd: 'goodman',roles: [{role: 'readWrite',db: 'heroes'}]});
db.heroes.insertMany([{
  name: 'Wolverine',
  age: 50,
  superPower: 'Healing, super-human strengh and agility'
},{
  name: 'Magneto',
  age: 75,
  superPower: 'Magnetic field manipulation'
}]);
db.crisises.insertMany([{
  name: 'Kent Street Squabble',
  location: 'Sydney, Kent Street',
  severity: 7,
  description: 'A squabble broke out between former members of S.H.I.E.L.D. about waste of take away coffee cups. It is reported that punches have been thrown.'
},{
  name: 'Aldi Dutch Week Sale',
  location: 'North Sydney, Miller Street',
  severity: 10,
  description: 'Aldi is selling Dutch articles again, and crowds are flooding the small Aldi store to get a change of buying some of these delicious articles. Mob like behaviour has been reported.'
}]);"
