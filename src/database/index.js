import { Model, Sequelize } from "sequelize";
import mongoose from "mongoose";
import configDatabase from "../config/database";
import User from "../app/crontrollers/models/User";
import Product from "../app/crontrollers/models/Product";
import Category from "../app/crontrollers/models/Category";
const models = [User,Product,Category];

class Database {

    constructor(){
    this.init();
    this.mongo();
    }
    init() {
    this.connection = new Sequelize(configDatabase)
    models.map(Model => Model.init(this.connection))
          .map(Model => Model.associate && Model.associate(this.connection.models)
        );

    }
    mongo() {
        this.mongoConnection = mongoose.connect(
            "mongodb://localhost:27017/devburger",
        );
    }
}

export default new Database();