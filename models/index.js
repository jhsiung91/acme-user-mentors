const conn = require('./db');
const User = require('./user');
const Award = require('./award');

// User.hasMany(Award);

const sync = function(){
  return conn.sync({force: true})
};

const seed = function(){
  let jerry, mary;
  return Promise.all([
    User.create({name:'jerry'})
    User.create({name:'mary'})
  ])
  // .then(([_jerry,_mary])=>{
  //   jerry = _jerry;
  //   mary = _mary;
  // })
}

module.exports = {
  sync,
  seed,
  models: {User, Award}
}