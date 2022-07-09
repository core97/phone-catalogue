export const COLLECTION_NAME = {
  PHONE: 'phones',
};

export const SCHEMA_NAMES = {
  PHONE: 'phone-schema',
};

export const INTERNAL_ERROR_MSG = {
  CONNECTION_ERROR_WITH_DATABASE: (error: unknown) =>
    `[mongo-database]: an error ocurred when make connection with database.\n${JSON.stringify(
      error
    )}`,
  INVALID_AGGREATE_ROOT: (collectionName: string, error: unknown) =>
    `[repository]: Aggregate root from ${collectionName} collection is invalid when the document is created or updated.\n${JSON.stringify(
      error
    )}}`,
  INVALID_VALIDATION_SCHEMA: (schemaName: string, errorMsg?: string) =>
    `[schema]: an error ocurred when validate value in ${schemaName}.${
      errorMsg ? `\n${errorMsg}` : ''
    }`,
  NOT_FOUND_ENVIRONMENTAL_VARIABLE: (environmentalvariable: string) =>
    `Define the ${environmentalvariable} environmental variable`,
  UNEXPECTED_ERROR_CONTROLLER: ({
    error,
    method,
    url,
  }: {
    url?: string;
    method?: string;
    error: unknown;
  }) =>
    `[controller]: an unexpected error occurred${
      url && method ? ` in ${method} ${url}` : ''
    }.\n${JSON.stringify(error)}`,
};

export enum CLIENT_ERROR_MESSAGE {
  BAD_REQUEST = 'BAD_REQUEST',
  CONFLICT = 'CONFLICT',
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  MAX_FILE_SIZE_EXCEEDED = 'MAX_FILE_SIZE_EXCEEDED',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZATED = 'UNAUTHORIZATED',
  UNKNOWN_ERROR_PARSING_FILES = 'UNKNOWN_ERROR_PARSING_FILES',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
}

export const HTTP_CODE: { [key in CLIENT_ERROR_MESSAGE]: number } = {
  [CLIENT_ERROR_MESSAGE.BAD_REQUEST]: 400,
  [CLIENT_ERROR_MESSAGE.CONFLICT]: 409,
  [CLIENT_ERROR_MESSAGE.FORBIDDEN]: 403,
  [CLIENT_ERROR_MESSAGE.INTERNAL_ERROR]: 500,
  [CLIENT_ERROR_MESSAGE.MAX_FILE_SIZE_EXCEEDED]: 400,
  [CLIENT_ERROR_MESSAGE.NOT_FOUND]: 404,
  [CLIENT_ERROR_MESSAGE.UNAUTHORIZATED]: 401,
  [CLIENT_ERROR_MESSAGE.UNKNOWN_ERROR_PARSING_FILES]: 500,
  [CLIENT_ERROR_MESSAGE.UNPROCESSABLE_ENTITY]: 422,
};
