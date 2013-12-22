// ==========================================================================
// Project:   Contacts.Group Fixtures
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*global Contacts */
sc_require('models/group_model');


Contacts.Group.FIXTURES = [

  {
    guid: 'family',
    name: 'Family',
    contacts: ['tyler', 'juanjuan', 'linnea', 'fjola', 'sylvie', 'terry', 'hanna', 'trevor', 'aruna', 'tim', 'lana', 'heather']
  },

  {
    guid: 'friends',
    name: 'Friends',
    contacts: ["7a113023-3830-4d2f-af57-1ae1e322af3e", "b26e1056-e696-46dc-8724-cb78800338a3", "36740516-8605-42ce-96bc-2b1584b1d807", "a00e0a8f-5832-492f-8593-5cb1e63e3c7e", "3bdede73-5517-4758-a54d-9dcdff5a94fd", "20500516-94ba-4403-a2ba-91c376ee8dbe", "57a3fa92-228e-44a5-9efc-a7900275f0b1", "10d08c4d-c5a9-43a3-98c8-d9cf9e6f949f", "5c4b5ced-4421-4306-8ed3-2d96419e36fb", "7ed826fd-a8c7-4282-9031-954a1f279c52", "25a3c677-964b-479d-aa95-8e8e15097030", "b4a4af5e-d611-440e-9f08-6d0ceecb7ebf", "04eac4fb-70ab-4e34-b490-291983f06249", "bef1e543-1881-48b7-8ae2-8f85e524d20b", "58d847a0-8758-411b-b230-2462bc230402", "ffec524d-c1b5-4c40-afe6-7c985602fdd7", "e2059018-55b7-4f88-8c81-24684a6e31d2", "a6110387-bfc3-41a3-a90f-c8618ad190ff", "2274aa4b-66f7-49dd-bb0d-2abf2c1a34ad", "63e7f376-f2bb-41e8-aebd-bc50b3883338", "75639498-2965-40ff-9ea6-7855b8008803", "48b0961d-e1b5-4053-a2fd-cb55bbc8e00e", "4f305aa4-a8f5-4277-b874-6c715468c334", "493f0e3c-2485-4519-a2d3-019c90cd2152", "184ab06b-3e7f-4de8-824c-7f68c02c248f", "0d0e90bd-418e-4055-91bf-751907afe802", "9700a3ba-9916-4a9b-adbe-bce9ae0ea02d", "fc951be5-5280-420b-bc32-09e381b80ef7", "fdcf5232-b1b6-4a4d-9d52-79a1f8c0c423", "866d1821-7442-41d1-87cc-d8f1bc85504b", "9bcf4bdf-8529-494e-b3b4-c12869676758", "5a8f534b-a196-440d-97fd-69cfd842af97", "a58c82f7-25fe-44cf-8f34-31a14c3e0e37", "b3f17621-6b73-4a8e-9f87-7c97159cd5d6", "473b448e-dcfc-457c-ab21-0bd53294195c", "f325bf78-bbea-4331-a82c-95485566e740", "c881b4d3-2fb0-4e94-a10e-c00e7e727dac", "763ea65b-c602-47a1-86ad-41ff2f44c028", "e5d01e7f-2674-4632-9905-a97658186d67", "a21d5fe6-c315-496e-8915-582f7672e4bb", "0aad8f17-bc83-48be-87a0-4f8baf227cb4", "aa3009f3-35b4-4892-ac51-bbcf98e08ea1", "afcadebd-b018-4e55-ae15-bae42ce42baa", "2fa91014-9cb7-441f-b314-afb298d25c3f", "f4ba3035-0601-4f23-a1b8-a283f5b177de", "68d5cd04-bf77-4881-bc29-ac710a87e51e", "3c701e1e-f886-4834-8a9a-0c1b77674ab1", "66e56a0e-fb1b-439c-aeae-b396eae94674", "50960ec4-31a5-4792-befb-7928c9fcae6c", "b55a1191-e6cc-4a93-ab97-c3d1cf9ff373", "f9ac2a12-253f-4e26-831a-3b2f1740c32e", "04782951-49dc-4869-9456-cab2b665c18c", "871835b8-a309-41da-9191-33dec2f46128", "492715ac-a35e-4a1f-a205-223fd524c81a", "def0cbff-c8ad-4ef9-a4ce-cda60d7c0ec9", "877fc1b7-4f69-492b-89c5-7ffba843089c", "4094d7c1-da82-4afe-8b0a-be51fcb7ae7c", "b0605bb7-268b-44da-bdea-44099803dafc", "3612c101-40d7-4b21-8f8a-60e586ac29ce", "e5920e11-ae20-4e35-839e-dd165ece7bd0", "c96fe137-e4c7-47a0-a8eb-480fe011bd39", "ba4b8eee-cc9b-4728-98de-c5351d5868e4", "d524b675-52b9-42db-a5dd-a67a38030491", "e30e1cdf-7ec5-46d8-9a6d-a681ce28c1a8", "fb744721-9a4b-40a9-a152-57a117de46ee", "5f8239bf-2bc9-4112-bf66-1f3e916528e8", "f0d876f9-be33-4d80-8c89-d0e3e05880c5", "cf655a3d-6207-430c-868c-cab4b30f09df", "4b7805d6-7fc9-4a63-890d-29f8fc5c1be1", "d11a871b-4c1e-4b8a-9a16-58dcb9f55027", "f3e4c3cf-a483-4d71-ac32-ffbc9b75c56f", "86c1635b-8970-49eb-87a3-20b4c946f56b", "0c0a6eb2-fa5a-4b39-8f5e-c0e3d690a530", "89847844-80c7-4989-9538-369f5992b0a4", "7c77315a-98dd-48ca-84b8-9cc5f2ae9f2f", "d0232786-9900-45d0-9938-b98e6356f132", "2fd5fc35-8dc8-4fc8-aac2-37127d516ebc", "b65c61b2-ef8c-4467-98d3-4d640fb31753", "76e48ac1-21c4-4cb8-bc51-a3e7c9e3bbbc", "d15cd0f7-2f57-4532-9a32-df6d9c685400", "e9a628d3-27cf-4acc-86d8-d3312dd60a14", "076556a3-adc7-477a-8aa9-270da0c224a4", "b7503d39-ea67-4cff-8b85-750776025694", "20d3924e-3f03-4431-becd-8bab092c5dc9", "397e7167-8dcc-43a9-8aa6-fddec332de86", "db503ae4-1b4a-4531-aa3e-10ef1ac75766", "9f76cd31-c064-4220-99f4-21d69e1490bd", "365a79b6-85f7-4bbe-b1f3-b73a094cea68", "350ea1d1-5999-4c12-8dce-ebc66a1b58f1", "7a26111b-f28d-407c-8438-44c3b3fbb882", "e8c5e3e9-2581-45af-addd-67a85d9af5d5", "d80f0e76-6848-4aa7-98cc-68e6989e8b53", "f38784bd-980f-44ef-a840-6644e011bb76", "adcbf157-ccc0-4a48-998e-466fd02f551e"]
  },

  {
    guid: 'work',
    name: 'Work',
    contacts: ["7d71709e-d4ea-46bf-bbc6-91d90c39828f", "d633e6ee-e282-44ee-b024-36e104658e96", "f752ec34-bb70-43fb-84c5-c10695a0f84f", "f14aa401-9b3e-418a-a5a1-18598c9aa722", "2bfc87b4-78cc-4902-b0bc-7033643ab150", "86f1e3b1-8efa-4823-ac46-2533762309ed", "9e84f66a-41c5-4a66-ada1-3573707a4579", "3deaafb6-83d1-420f-8cd5-ca2c4af62e06", "a9dd0dc6-5cf5-4942-9191-c267785a5720", "5682b5f9-94fd-4ab5-a675-69186b635395", "863d3138-4176-4aff-965c-b125b9cb3e87", "1a68be6a-3d64-4497-84f8-c700f00f2e93", "f20d370b-be31-449e-86fd-f623a614c8b9", "6bacdd6c-72e2-4435-8846-67bdc6aa9b32", "442951f6-3032-4a8d-b8fb-1929960fe185", "07f48fcb-eef4-442d-baed-4a9d888077b0", "27fba628-1f7e-4655-9e6d-76b7a7ff107d", "4d3b3ce5-09e3-428e-8e2a-3dde47f21c8a", "376763b2-a967-43ef-a125-80046c0ef4dd", "b33878c0-4e91-4c7b-8d85-884720d76a9a", "dc029f9b-a046-4ed0-96dd-48df9306ca03", "a6305ac0-df53-4bf6-a315-7adb21cae2b1", "0739918e-3834-4c01-a185-7e7643e6f68b", "82ff288b-a7c6-43a3-9026-97b6e9d33079", "ff7fecea-456d-483d-8e2e-e829bf51cad6", "e0c91931-0768-4d18-b213-00b699ecb209", "16761c01-be90-4dd9-923d-ec5ec6431c08", "651fcb6d-4139-43db-8e7b-57d9f51fcb9f", "296b9de7-589e-4383-941c-e948db8c6946", "f029bb2e-6d5a-4065-9d87-a2ec9f2c2e5a", "f44617b0-d639-4549-a38b-532578c0cd1e", "fbb79430-7794-45b5-b540-a5aec369f567", "c545c433-10df-4d5b-bc7f-0508a7a631bc", "b481b9d3-0d92-465a-a5d3-80873678c835", "63809b9a-3281-4aa9-86e5-426621673616", "e6267002-996c-41c8-b5fc-6d18c49ce464", "f36f0cfa-d0fc-436e-8a3e-575a5f1db3c5", "5d9655e3-c42b-4bd4-8e0c-4b1762dbbfe0", "895578ce-0c02-4b67-8e3a-1aa6d43c73db", "4899433b-b7e7-4772-a0d2-f3984fec83ef", "626c0369-6ac5-44c8-83fc-8827d540a155", "44786664-c9b8-4f8c-a727-5bee5b600de3", "20bf6e1e-22de-4464-91b1-fc519a9b999a", "6b596e9e-505e-4295-b6eb-4a08133ad3e5", "e854d51c-34ab-43e6-b7b8-b9a2e72510ac", "6b712007-469a-4d92-8f49-a7101cd9e2aa", "11536af9-65b1-44ab-b093-2b9ae9608b09", "43cf5db6-c3ee-431a-bf04-a42177f1d316", "951dc72b-42d9-4b22-8e19-c3644a6d5d10", "303483be-c295-4a84-8e19-85f71b7648d5", "382184c2-8137-48ab-8989-d389bb8b19e9", "69872ee3-542e-4afe-89a0-13c7547c6f35", "afaf570f-5f29-43f0-a313-437240949753", "e031aefb-2a98-4662-8645-67288369e582", "313049f1-e705-404d-82e7-905c566b3044", "a5a0e6be-24a2-4e9c-bf2b-2fc7cddc94bb", "a43fa5bd-fa8e-490f-9945-456f5adf7465", "d7059e1c-9245-4ccc-90fa-b88ae9fb16e0", "869b8abb-0456-4f86-8266-fca82303d074", "86d85e82-609f-458a-a71f-9e1f6cafa343", "e9972d1e-0f59-4e5d-ac12-6b0428e49601", "7b2be8fc-5b4d-434c-85f4-8444c8579aa9", "1402520d-641a-4e67-8ed3-245341ad1039", "5f4fe03c-ded8-487f-9e88-ce8b51de8aef", "3879f31f-1c67-4f62-a558-585f0e957fba", "3a466d24-983c-4671-9bd2-771456a6783c", "f41e8a04-8aed-491c-b0be-ffe1d5611555", "ece9d666-60a1-43a1-b3e4-bb59db149440", "27898e86-ba79-426e-8355-308170f27ef9", "ae2a7f11-28bb-4165-a098-42391a824b2c", "afca88ae-51fb-4dc6-8210-d91cfee7dc6c", "cd404ce1-9d59-40f9-a2ed-b4b07b341926", "2226c869-8e07-476e-80a6-6ad69798e0ab", "e509fa55-2191-4b58-b78e-33e4a27aadf7", "ad85b776-d54a-4138-97f3-e78bba9cf001", "5a3d0128-ec4f-4bac-a515-7129b933fd36", "7ef4693d-ae98-4087-8cb8-ff76fa34571d", "06aec81f-ccd7-41a1-87f0-ab59308b3199", "98dd66e8-e750-434b-ae56-58fe8dc3b1a9", "68932921-71c2-40ae-a795-899e156eccc4", "12c2ff18-fa6c-418b-b1e6-fa8522674aaf", "4fda9bf3-9044-418b-81f4-c8ae98baf668", "a5d36d98-80d1-4a6f-a788-096c8d1d4c5c", "a073eb00-a28f-444d-b266-aedcbad14494", "046ec67c-ecbf-46d7-9a20-2c4b559c7f22", "fc831b34-5adf-444a-a4d6-4947780b4070", "9dd3d7dc-1445-44f8-ab60-527578d3bbff", "08ac3eaa-1378-4c5d-b9d2-ca5f650c4162", "1d205d0e-151e-4e48-b978-12aa6f0fcbf2", "cf93037c-4086-4a13-981d-f81f936b0982", "c3d2a2e1-d09b-4238-9558-d13208e3b7f9", "2615439a-582f-44ba-a769-e4b5134262c2", "060ab2d6-80df-41ab-ad1c-214befe49dc0", "483850f6-bcdb-4770-b212-c0066a6950c6", "86830c95-6270-41ee-9760-b88deb90348a", "26d34cc9-6b60-42e8-9df2-3ef67a6137c8", "0dfa2d1c-6cb7-4e79-8b64-789d5a7dc220"]
  },

  {
    guid: 'school',
    name: 'School',
    contacts: ["3040b1b8-fc39-4b23-a2da-966a6349f0cd", "2e3bd2aa-2db8-4d5f-96c2-de08e59027f2", "de60e055-74e3-4a26-9524-85731cb62f76", "87498297-876e-477d-b1fa-5a42e183b06f", "091aaee9-790a-4534-b013-7ca57badd957", "ba828a8e-4ef9-499b-a7c0-d60a3d4eca63", "1a6a3752-7dec-4f54-9a88-4503ad4ef5d1"]
  }

];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');