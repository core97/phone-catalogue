import { v4 as uuidV4 } from 'uuid';
import { httpInstance } from 'services/http-instance';
import { Endpoints } from 'types/endpoints';

export const uploadFile = async (files: File | File[], path?: string) => {
  const formData = new FormData();

  if (Array.isArray(files)) {
    Array.from(files).forEach(file => formData.append(uuidV4(), file));
  } else {
    formData.append(uuidV4(), files);
  }

  let url = `${Endpoints.UPLOAD_FILES}`;
  if (path) {
    url += `?path=${path}`;
  }

  const res = await httpInstance.post<{ files: string[] }>(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return res.data;
};

export const deleteFile = async (paths: string | string[]) => {
  let endpoint = `${Endpoints.DELETE_FILES}`;
  let urlFiles: string[] = [];

  urlFiles = Array.isArray(paths) ? [...paths] : [paths];

  urlFiles.forEach(url => {
    endpoint += `&path=${url}`;
  });

  const res = await httpInstance.delete(endpoint);

  return res.data;
};
