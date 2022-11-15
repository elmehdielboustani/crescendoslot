'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associations(models) {
      // define association here
      this.userAssociation = this.belongsToMany(models.User, {
        through: models.Booking,
        as: 'users',
        foreignKey: 'eventId'
      });
    }
  }
  Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minAge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxAge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: true
  })
  return Event;
};