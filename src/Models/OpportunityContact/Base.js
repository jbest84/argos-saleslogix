import declare from 'dojo/_base/declare';
import _ModelBase from 'argos/Models/_ModelBase';
import MODEL_NAMES from '../Names';

const resource = window.localeContext.getEntitySync('opportunityContactModel').attributes;
const opportunityResource = window.localeContext.getEntitySync('opportunityModel').attributes;
const contactResource = window.localeContext.getEntitySync('contactModel').attributes;

const __class = declare('crm.Models.OpportunityContact.Base', [_ModelBase], {
  entityName: 'OpportunityContact',
  entityDisplayName: resource.entityDisplayName,
  entityDisplayNamePlural: resource.entityDisplayNamePlural,
  resourceKind: 'opportunityContacts',
  modelName: MODEL_NAMES.OPPORTUNITY_CONTACT,

  createRelationships: function createRelationships() {
    let rel;
    rel = this.relationships || (this.relationships = [{
      name: 'Opportunity',
      displayName: opportunityResource.entityDisplayName,
      type: 'ManyToOne',
      parentProperty: 'Opportunity',
      parentPropertyType: 'object',
      relatedEntity: 'Opportunity',
      relatedPropertyType: 'object',
    }, {
      name: 'Contact',
      displayName: contactResource.entityDisplayName,
      type: 'ManyToOne',
      parentProperty: 'Contact',
      parentPropertyType: 'object',
      relatedEntity: 'Contact',
      relatedPropertyType: 'object',
    }]);
    return rel;
  },
});
export default __class;
