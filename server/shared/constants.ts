import { HttpStatus } from 'server/shared/http-status';

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

export enum CLIENT_ERROR_CODE {
  MAX_FILE_SIZE_EXCEEDED = 'MAX_FILE_SIZE_EXCEEDED',
  PHONE_NOT_FOUND = 'PHONE_NOT_FOUND',
  UNKNOWN_ERROR_PARSING_FILES = 'UNKNOWN_ERROR_PARSING_FILES',
}

export const CLIENT_ERROR_TO_HTTP_STATUS: {
  [key in CLIENT_ERROR_CODE]: HttpStatus;
} = {
  MAX_FILE_SIZE_EXCEEDED: HttpStatus.BAD_REQUEST,
  PHONE_NOT_FOUND: HttpStatus.NOT_FOUND,
  UNKNOWN_ERROR_PARSING_FILES: HttpStatus.INTERNAL_ERROR,
};
