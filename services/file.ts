import { v4 as uuidV4 } from 'uuid';
import { httpInstance } from 'services/http-instance';

export const uploadFile = async (
  files: File | File[],
  path?: string
): Promise<{ files: string[] }> => {
  const formData = new FormData();

  if (Array.isArray(files)) {
    Array.from(files).forEach(file => formData.append(uuidV4(), file));
  } else {
    formData.append(uuidV4(), files);
  }

  let url = '/storage/upload-files';
  if (path) {
    url = `${url}?path=${path}`;
  }

  const res = await httpInstance.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return res.data;
};

export const deleteFile = async (paths: string | string[]): Promise<void> => {
  let endpoint = '/storage/delete-files';
  let urlFiles: string[] = [];

  urlFiles = Array.isArray(paths) ? [...paths] : [paths];

  urlFiles.forEach(url => {
    endpoint += `&path=${url}`;
  });

  const res = await httpInstance.delete(endpoint);

  return res.data;
};
