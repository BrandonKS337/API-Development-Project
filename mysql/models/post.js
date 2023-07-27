const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }
//Sequelize will create this table if it doesn't exist on startup

Post.init({
    id: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
    autoIncrement: true, 
    primaryKey: true
    },

    postTitle: {
    type: DataTypes.STRING, 
    allowNull: false, 
    required: true
    },

    postDescription: {
    type: DataTypes.STRING, 
    allowNull: false, 
    required: true
    },

    postImage: {
    type: DataTypes.STRING, 
    allowNull: false, 
    required: false,
    unique: true
    },
},

    {
    sequelize: sequelizeInstance, 
    modelName: 'post', 
    //use lowercase plural format
    timestamps: true, 
    freezeTableName: true
    }
)


module.exports = Post;