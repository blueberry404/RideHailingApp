import { Request, Response, NextFunction } from 'express';
import * as consumerService from '../services/consumer';
import * as driverService from '../services/drivers';
import { Consumers } from '../entities/consumers';
import { Drivers } from '../entities/drivers';
import HTTPException from '../exceptions/HttpException';

export const getAllConsumers = async (_request: Request, response: Response) => {
    const users = await consumerService.getAll();
    response.send({ success: true, result: JSON.stringify(users) });
};

export const getAllDrivers = async (_request: Request, response: Response) => {
    const users = await driverService.getAll();
    response.send({ success: true, result: JSON.stringify(users) });
};

export const createConsumer = async (request: Request, response: Response, next: NextFunction) => {
    const consumer = request.body;
    const result: any = await consumerService.saveConsumer(consumer);
    if(result instanceof Consumers) {
        response.send({ success: true, result: JSON.stringify(result) });
    }
    else {
        next(new HTTPException(400, result));
    }
};

export const createDriver = async (request: Request, response: Response, next: NextFunction) => {
    const driver = request.body;
    const result: any = await driverService.saveDriver(driver);
    if(result instanceof Drivers) {
        response.send({ success: true, result: JSON.stringify(result) });
    }
    else {
        next(new HTTPException(400, result));
    }
};

export const bookRide = async (request: Request, response: Response) => {
    response.json({ success: 'success' });
};

export const cancelRide = async (request: Request, response: Response) => {
    response.json({ success: 'success' });
};

export const acceptRide = async (request: Request, response: Response) => {
    response.json({ success: 'success' });
};

export const startRide = async (request: Request, response: Response) => {
    response.json({ success: 'success' });
};

/*
Push notifications:
- find and notify Nearby Drivers
- cancel ride to other entity
- notify consumer that ride has been accepted

HOW NOTIFY USERS FOR CHANGING STATE AND LOCATION?
*/