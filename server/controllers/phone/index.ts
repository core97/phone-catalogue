import container from 'server/shared/inversify.config';
import { DeletePhoneController } from './delete-phone';
import { GetPhoneController } from './get-phone';
import { SavePhoneController } from './save-phone';
import { GetPhonesController } from './get-phones.controller';

export const getPhoneCtrl =
  container.resolve<GetPhoneController>(GetPhoneController);

export const deletePhoneCtrl = container.resolve<DeletePhoneController>(
  DeletePhoneController
);

export const getPhonesCtrl =
  container.resolve<GetPhonesController>(GetPhonesController);
  
export const savePhoneCtrl =
  container.resolve<SavePhoneController>(SavePhoneController);
