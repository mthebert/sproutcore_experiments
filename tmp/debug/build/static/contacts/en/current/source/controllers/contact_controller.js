// ==========================================================================
// Project:   Contacts.contactController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Contacts.contactController = SC.ObjectController.create(
/** @scope Contacts.contactController.prototype */ {

  contentBinding: 'Contacts.contactsController.selection'

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');