
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
			out_data.push(
	 { name:'Asics',
	 image: { _url:'https://pse-robin.herokuapp.com/public/assets/images/asics-small.png'} 
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
  let out_data = [8,9,10,11,12];
  return out_data;
});

Parse.Cloud.define('compatibilityCheck', (req) => {
	let deviceInfo = req.params.deviceInfo;
	let appInfo = req.params.appInfo;
  let out_data = [];
  	out_data.push(
	 { error:0,
	   success:true,
	   action:'noAction'
});
  return out_data;
});

Parse.Cloud.define('getPodInfo', req => {
  let macAddress = req.params.macAddress;
  let out_data = [];
  	out_data.push(
	 { latestSecondsSince2000:0,
	   upsId:''
});
  
  return out_data;
});

Parse.Cloud.define('registerPod', req => {
  
  let userId = req.params.userId;
  let shoeId = req.params.shoeId;
  let shoeSize = req.params.shoeSize;
  let macAddress = req.params.macAddress;
  let initialDistance = req.params.initialDistance;
  const UserPod = Parse.Object.extend("Pods");
  const userPod = new UserPod();
  userPod.set("shoeId",shoeId);
  userPod.set("shoeSize",shoeSize);
  userPod.set("macAddress",macAddress);
  userPod.set("initialDistance",initialDistance);
  userPod.set("userId",userId);
  userPod.save();
  //set these...
  let out_data = [];
  	out_data.push(
	 { error:0,
	   success:true
});
  
  return out_data;
});

Parse.Cloud.define('getProfileInfo', async (request) => {
	let userId = request.params.userId;
	let query =  new Parse.Query(Parse.User); 
	query.equalTo("objectId",userId);
    const results = await query.find({useMasterKey: true});
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0];  
	let out_data = [];
	out_data.push(
	 { weight:user.get("weight"),
	   useMetric:user.get("useMetric"),
	   isFemale:user.get("isFemale"),
	   name:user.get("name"),
	   email:user.get("email"),
	  height:user.get("height")
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
    const results = await query.find({useMasterKey: true});
    if(results.length === 0) throw new Error('No results found!');  
    let user = results[0]; 
	user.set("weight",profileData.weight);
	user.set("isFemale",profileData.isFemale);
	user.set("email",profileData.email);
	user.set("useMetric",profileData.useMetric);
	user.set("name",profileData.name);
	user.set("height",profileData.height);
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
},{
fields : ['userId']
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

