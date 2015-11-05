import declare from 'dojo/_base/declare';
import Base from './Base';
import _OfflineModelBase from 'argos/Models/_OfflineModelBase';
import Manager from 'argos/Models/Manager';
import MODEL_TYPE from 'argos/Models/Types';
import MODEL_NAMES from '../Names';

const __class = declare('crm.Models.OpportunityContact.Offline', [Base, _OfflineModelBase], {
  entityName: 'OpportunityContact',
  entityDisplayName: 'OpportunityConctact',
  entityDisplayNamePlural: 'OpportunityContacts',
  resourceKind: 'opportunityContacts',
  modelName: MODEL_NAMES.OPPORTUNITY_CONTACT,
});

Manager.register(MODEL_NAMES.OPPORTUNITY_CONTACT, MODEL_TYPE.OFFLINE, __class);
export default __class;
