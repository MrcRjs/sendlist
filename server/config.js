/**
 *
 * The server config
 * made by @dantaex
 *
 */
 
module.exports = {

	/**
	 * The app name
	 */
	app_name : 'Sendlist',

	/**
	 * The public access directory
	 */
	public_dir : '../client/public',

	/**
	 * The development port
	 */
	test_port  : 8080,

	/**
	 * The Mongodb URI (development)
	 */
	database_uri_DEV  : 'mongodb://localhost:27017/sendlist',

	/**
	 * The Mongodb URI (PRODUCTION)
	 * taken from env
	 */
	database_uri_PROD : process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
						process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
						process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
						process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
						process.env.OPENSHIFT_APP_NAME

};