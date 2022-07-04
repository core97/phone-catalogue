import ObjectId from 'bson-objectid';

export const generateId = () => `${new ObjectId()}`;
