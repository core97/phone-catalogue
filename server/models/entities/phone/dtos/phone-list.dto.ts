import { PhoneEntity } from '../phone.entity';

export type PhoneListDto = Pick<PhoneEntity, 'id' | 'name' | 'imageFileName'>;
