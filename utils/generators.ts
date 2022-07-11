import ObjectId from 'bson-objectid';

export const generateId = () => `${new ObjectId()}`;

export const getSecondsInMiliseconds = (seconds: number) => {
  const oneSecInMs = 1000;
  return seconds * oneSecInMs;
};
