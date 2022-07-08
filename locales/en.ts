import { TranslatedTexts } from 'types/language';

const EN_TRANSLATIONS: TranslatedTexts = {
  layout: {
    navbar: {
      createPhoneBtn: 'Create phone',
      logo: 'Catalogue',
    },
    footer: 'Code challenge by Juan Cortés ✌️',
  },
  globalMsg: {
    loading: 'Loading...',
    error: 'Sorry an error occurred.',
    notFoundResults: 'Not found results',
    features: 'Features'
  },
  pages: {
    home: {
      header: 'Phone list'
    },
    phoneForm: {
      creationHeader: '📱☎️ Phone',
    }
  },
  phone: {
    fields: {
      name: 'Name',
      description: 'Description',
      price: 'Price',
      color: 'Color',
      manufacturer: 'Manufacturer',
      processor: 'Processor',
      ram: 'RAM',
    },
    messages: {
      deletionLoading: 'Wait, we are deleting the phone',
      deletionSuccess: 'The phone has been deleted successfully',
      deleteBtn: 'Delete phone',
    },
  },
  forms: {
    phone: {
      loadingCreation: 'Wait, we are creating the phone.',
      successCreation: 'Congratulations, the phone has been successfully created.',
      placeholders: {
        name: 'Samsung Galaxy S9',
        description: 'Lorem ipsum',
        price: '499',
        processor: 'Qualcon',
        ram: '8',
      },
      submitCreationBtn: 'Create phone',
    },
  },
};

export default EN_TRANSLATIONS;
