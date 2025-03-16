/* eslint-disable no-undef */
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

db.createCollection('people')

db.people.insert({ name: 'John Doe', number: '123-456789' })
db.people.insert({ name: 'Harry Don', number: '89-456789' })
db.people.insert({ name: 'George Washington', number: '098-4567898' })
