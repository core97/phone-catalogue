import { Container } from 'inversify';
import { PhoneRepository } from 'server/models/entities/phone/phone.repository';
import { PhoneSchema } from 'server/models/entities/phone/phone.schema';
import { PhoneService } from 'server/models/entities/phone/phone.service';
import { DeletePhoneController } from 'server/controllers/phone/delete-phone.controller';
import { GetPhoneController } from 'server/controllers/phone/get-phone.controller';
import { GetPhonesController } from 'server/controllers/phone/get-phones.controller';
import { SavePhoneController } from 'server/controllers/phone/save-phone.controller';
import { TYPES } from './container-types';

const DIContainer = new Container();
DIContainer.bind(TYPES.PhoneRepository).to(PhoneRepository);
DIContainer.bind(TYPES.PhoneSchema).to(PhoneSchema);
DIContainer.bind(TYPES.PhoneService).to(PhoneService);
DIContainer.bind(TYPES.DeletePhoneController).to(DeletePhoneController);
DIContainer.bind(TYPES.GetPhoneController).to(GetPhoneController);
DIContainer.bind(TYPES.GetPhonesController).to(GetPhonesController);
DIContainer.bind(TYPES.SavePhoneController).to(SavePhoneController);

export default DIContainer;
