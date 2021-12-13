
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
		let out_data = [];
		let im1 = new image;
		im1._url = 'https://pse-robin.herokuapp.com/public/assets/images/asics-small.png';
			out_data.push(
	 { name:'Asics',
	 image: im1}
});
   return out_data;
});

Parse.Cloud.define('getShoeModel', () => {
			let out_data = [];
			out_data.push(
	 { name:'Kayano 27'
});
  return out_data;
});

Parse.Cloud.define('getShoeSize', () => {
  let out_data = [8,9,10,11];
  return out_data;
});

Parse.Cloud.define('getProfileInfo', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query(Parse.User); 
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

Parse.Cloud.define('setProfileInfo', async (request) => {
	let userId = request.params.userId;
	let profileData = request.params.data;
	let query =  new Parse.Query(Parse.User); 
	query.equalTo("objectId",userId);
    const results = await query.find();
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0]; 
	user.set("profileData",profileData);
	let out_data = [];
	out_data.push(
	 { error:0,
	   success:true
});
    return out_data;
},{
	fields : ['userId']
});

Parse.Cloud.define('getDashboard', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query(Parse.User); 
	query.equalTo("objectId",userId);
    const results = await query.find();
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0];  
	let out_data = [];
	//out_data.push(
	// { weight:user.get("weight"),
	//   useMetric:user.get("useMetric")
//});
    return out_data;
},{
	fields : ['userId']
});

Parse.Cloud.define('getUser', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query(Parse.User); 
	query.equalTo("objectId",userId);
    const results = await query.find();
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0];  
	let out_data = [];
	//out_data.push(
	// { weight:user.get("weight"),
	//   useMetric:user.get("useMetric")
//});
    return out_data;
},{
	fields : ['userId']
});

Parse.Cloud.define('getUserStatistics', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query(Parse.User); 
	query.equalTo("objectId",userId);
    const results = await query.find();
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0];  
	let out_data = [];
	//out_data.push(
	// { weight:user.get("weight"),
	//   useMetric:user.get("useMetric")
//});
    return out_data;
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

