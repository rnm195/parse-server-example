
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

Parse.Cloud.define('getProfileInfo', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query("User"); 
	query.equalTo("objectId",userId);
    const results = await query.find();
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0];  
	let out_data = [];
	out_data.push(
	 { weight:user.get("weight"),
	   useMetric:user.get("useMetric")
});
    return out_data;
},{
	fields : ['userId']
});

Parse.Cloud.define('getProfileTest', async (request) => {
	let userId = request.params.userId;
	//let query =  new Parse.Query("User"); 
	//query.equalTo("objectId",userId);
    //const results = await query.find();
    //if(results.length === 0) throw new Error('No results found!');  
    //let user = results[0];  
	let out_data = [];
	//out_data.push(
	// { weight:user.get("weight"),
	//   useMetric:user.get("useMetric")
//});
    return out_data;
},{
	fields : ['userId']
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

