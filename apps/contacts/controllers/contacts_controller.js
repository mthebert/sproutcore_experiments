// ==========================================================================
// Project:   Contacts.contactsController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Contacts.contactsController = SC.ArrayController.create(
/** @scope Contacts.contactsController.prototype */ {

  contentBinding: 'Contacts.groupController.contacts',

});
