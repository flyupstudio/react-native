const STAGE_API = 'http://static.bidflyer.com.s3.amazonaws.com';
const LOCAL_API = 'http://static.bidflyer.com.s3.amazonaws.com';
const apiV1 = '';
export const isLocal = false;//location.hostname === 'localhost';
export const getApiUrl = () => isLocal ? LOCAL_API : STAGE_API;

export const API_URL = `${getApiUrl()}/${apiV1}`;

export const config = {};