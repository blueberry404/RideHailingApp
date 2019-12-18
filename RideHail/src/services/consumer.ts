import Joi from '@hapi/joi';

import * as repo from '../repositories/consumer';
import { IConsumer } from '../interfaces/user';
import { validateSignUp } from '../validations/user';
import { Consumers } from '../entities/consumers';
import Auth from '../utils/Auth';

export const getAll = async () => {
    return repo.getAll();
};

export const saveConsumer = async (consumerReq: IConsumer) => {

    const error = validateSignUp(consumerReq);
    if(error) {
        return error;
    }
    else {
        const consumer = new Consumers(consumerReq);
        const hash = await Auth.hashPassword(consumerReq.password);
        if(hash instanceof Error) {
            return hash;
        }
        else {
            consumer.passwordHash = hash;
            repo.save(consumer);
        }
    }

    //TODO: work on validations and seeding
    //https://github.com/mattwelke/example-typeorm-postgres
   //https://dev.to/jacqueline/using-hapi-joi-version-16-1-7-to-validate-a-request-body-in-a-restful-api-bje
};