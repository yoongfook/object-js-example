const { Model } = require("objection");

class Base extends Model {}

module.exports = {
  Model: Base
};
