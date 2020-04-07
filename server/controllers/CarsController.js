import express from "express";
import BaseController from "../utils/BaseController";
import {
    carsService
} from "../services/CarsService";

export class CarsController extends BaseController {
    constructor() {
        super("api/cars");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            let cars = await carsService.getAll()
            res.send({
                data: cars,
                message: "Here's your cars bro."
            })
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}