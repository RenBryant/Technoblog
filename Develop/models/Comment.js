const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

module.exports = Comment;