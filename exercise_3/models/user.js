// const bcrypt = require("bcrypt");
const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    // hooks: {
    //   beforeCreate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10, "a");
    //       user.password = bcrypt.hashSync(user.password, salt);
    //     }
    //   },
    //   beforeUpdate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10, "a");
    //       user.password = bcrypt.hashSync(user.password, salt);
    //     }
    //   },
    // },
    // instanceMethods: {
    //   validPassword: (password) => {
    //     return bcrypt.compareSync(password, this.password);
    //   },
    // },
  }
);

// User.prototype.validPassword = async (password, hash) => {
//   return await bcrypt.compareSync(password, hash);
// }

module.exports = User;
