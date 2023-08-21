const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Note = db.define("notes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: {
        type: Sequelize.TIME,
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.TIME,
        allowNull: true
    }
},{
    freezeTableName: true
});

module.exports = Note;