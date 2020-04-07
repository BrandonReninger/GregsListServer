import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class CarsService {
    async create(body) {
        let car = await dbContext.Cars.create(body)
        return car
    }

    async getAll() {

    }
}

export const carsService = new CarsService();