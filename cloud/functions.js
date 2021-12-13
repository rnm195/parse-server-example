
Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.define('getShoeMake', () => {
return {name:'Asics' };
});

Parse.Cloud.define('getProfileInfo', async req => {
	var userId = req.params.userId;
	var query =  new Parse.Query("User"); 
	query.equalTo("objectId",userId);
    const user = await query.first();
	var weight = user.get("weight");
	var useMetric = user.get("useMetric");

	
return {['weight': weight, 'useMetric': useMetric };
},{
	fields : ['userId']
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

