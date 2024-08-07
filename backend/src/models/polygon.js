import { Model, DataTypes } from 'sequelize';

class Polygon extends Model {
  static init(sequelize) {
    return super.init({
      polygon_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      session_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      name: DataTypes.STRING,
      geom: DataTypes.GEOMETRY('Polygon', 4326),
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,
      modelName: 'Polygon',
      timestamps: false
    });
  }

  static associate(models) {
    Polygon.belongsTo(models.Session, {
      foreignKey: 'session_id',
      as: 'session'
    });
  }
}

export default Polygon;
