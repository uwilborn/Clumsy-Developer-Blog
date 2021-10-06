const User = require("./user");
const Newnote = require("./newnote");

User.hasMany(Newnote, {
  foreignKey: "user_id",
});

Newnote.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Newnote };
