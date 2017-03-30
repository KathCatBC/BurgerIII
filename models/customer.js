module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // timestamps: false,
    // The email cannot be null, and must be a proper email before creation
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    picked_up : {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
  },
  {
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Burger, {
          onDelete: "cascade"
        });
      }
    }
  }
 // }
 );

  return Customer;

};
