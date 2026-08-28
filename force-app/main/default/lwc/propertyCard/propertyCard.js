import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import PRICE_FIELD from '@salesforce/schema/Property__c.Price__c';
import CITY_FIELD from '@salesforce/schema/Property__c.City__c';
import TYPE_FIELD from '@salesforce/schema/Property__c.Property_Type__c';
import BEDROOMS_FIELD from '@salesforce/schema/Property__c.Bedrooms__c';
import BATHROOMS_FIELD from '@salesforce/schema/Property__c.Bathrooms__c';
import STATUS_FIELD from '@salesforce/schema/Property__c.Status__c';
import IMAGE_FIELD from '@salesforce/schema/Property__c.Image_URL__c';

const FIELDS = [NAME_FIELD, PRICE_FIELD, CITY_FIELD, TYPE_FIELD, BEDROOMS_FIELD, BATHROOMS_FIELD, STATUS_FIELD, IMAGE_FIELD];

export default class PropertyCard extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    property;

    get propertyName() { return getFieldValue(this.property.data, NAME_FIELD); }
    get price() { return getFieldValue(this.property.data, PRICE_FIELD); }
    get city() { return getFieldValue(this.property.data, CITY_FIELD); }
    get propertyType() { return getFieldValue(this.property.data, TYPE_FIELD); }
    get bedrooms() { return getFieldValue(this.property.data, BEDROOMS_FIELD); }
    get bathrooms() { return getFieldValue(this.property.data, BATHROOMS_FIELD); }
    get status() { return getFieldValue(this.property.data, STATUS_FIELD); }
    get imageUrl() { return getFieldValue(this.property.data, IMAGE_FIELD); }
}