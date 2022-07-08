import container from 'server/shared/inversify.config';
import { DeletePhoneController } from './delete-phone.controller';
import { GetPhoneController } from './get-phone.controller';
import { GetPhonesController } from './get-phones.controller';
import { SavePhoneController } from './save-phone.controller';

export const getPhoneCtrl =
  container.resolve<GetPhoneController>(GetPhoneController);

export const deletePhoneCtrl = container.resolve<DeletePhoneController>(
  DeletePhoneController
);

export const getPhonesCtrl =
  container.resolve<GetPhonesController>(GetPhonesController);
  
export const savePhoneCtrl =
  container.resolve<SavePhoneController>(SavePhoneController);
