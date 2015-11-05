import declare from 'dojo/_base/declare';
import Base from './Base';
import _SDataModelBase from 'argos/Models/_SDataModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPE from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('crm.Models.OpportunityContact.SData', [Base, _SDataModelBase], {
  createQueryModels: function createQueryModels() {
    return [{
      name: 'detail',
      querySelect: [
        'Opportunity',
        'Contact',
      ],
    }];
  },
});

Manager.register(MODEL_NAMES.OPPORTUNITY_CONTACT, MODEL_TYPE.SDATA, __class);
export default __class;
