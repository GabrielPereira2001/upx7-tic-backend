import { Model, DataTypes, CreationOptional } from "sequelize";
import { sequelize } from "../database/DatabaseSequelizeInstance";

export class Report extends Model {
  declare report_id: number;
  declare title: string;
  declare report_date: Date;
  declare status: boolean;
  declare description: string;
  declare location: string;
  declare photo_link: string;
  declare up_votes: number;

  declare city_id: number;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Report.init(
  {
    report_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    photo_link: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    up_votes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "City",
        key: "city_id",
      },
      allowNull: false,
    },
  },
  { sequelize, tableName: "Report", modelName: "Report", timestamps: false }
);

sequelize.sync();
