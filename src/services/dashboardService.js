import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/pets';

///data/pets
//?sortBy=_createdOn%20desc&distinct=name


export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (animalId) => request.get(`${baseUrl}/${animalId}`);

export const create = (data) => request.post(baseUrl, data);

export const edit = (animalId, data) => request.put(`${baseUrl}/${animalId}`, data);

export const remove = (animalId) => {
    request.del(`${baseUrl}/${animalId}`);

}

