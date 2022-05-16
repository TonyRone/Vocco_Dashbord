<<<<<<< HEAD
import axios from 'axios'
import {
  SubscribeCountModel, 
  NewUsersThisWeekModel, 
  NewUsersThisMonthModel, 
  DailyUsersModel, 
  PremiumUsersByMonthModel,
  TopCategoryVocalModel,
  DownloadsByMonthModel,
  LastVocalsModel,
  UsersByCountry,
  RecordDuration
} from './_models'


//Admin Dashboard
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
//Get Subscribe Count
export function getsubscribecount() {
  return axios.get<SubscribeCountModel>(`${ADMIN_API_URL}/getsubscribeusercount`);
}

export function getnewusersthisweek() {
  return axios.get<NewUsersThisWeekModel>(`${ADMIN_API_URL}/getnewusersthisweek`);
}

export function getuserscountmonth() {
  return axios.get<NewUsersThisMonthModel>(`${ADMIN_API_URL}/getuserscountmonth`);
}

export function getusersdaily() {
  return axios.get<DailyUsersModel>(`${ADMIN_API_URL}/getusersdaily`);
}

export function getusersbycountry() {
  return axios.get<UsersByCountry>(`${ADMIN_API_URL}/getusersbycountry`);
}

export function getusersstatisticsbycountry() {
  return axios.get<UsersByCountry>(`${ADMIN_API_URL}/getusersstatisticsbycountry`);
}

export function getpremiumusersbymonth() {
  return axios.get<PremiumUsersByMonthModel>(`${ADMIN_API_URL}/getpremiumusersbymonth`);
}

export function getdevicesbymonth() {
  return axios.get<DownloadsByMonthModel>(`${ADMIN_API_URL}/getdevicesbymonth`);
}

export function getTopCategoriesVocals() {
  return axios.get<TopCategoryVocalModel>(`${ADMIN_API_URL}/getvoicebycategory`);
}

export function getLastVocals() {
  return axios.get<LastVocalsModel>(`${ADMIN_API_URL}/getlastvocals`);
}

export function getUserByCountry() {
  return axios.get<DailyUsersModel>(`${ADMIN_API_URL}/getusersdaily`);
}

export function getRecordsDuration() {
  return axios.get<RecordDuration>(`${ADMIN_API_URL}/getrecordseconds`);
}
=======
import axios from 'axios'
import {SubscribeCountModel, NewUsersThisWeekModel, NewUsersThisMonthModel} from './_models'


//Admin Dashboard
const ADMIN_API_URL = process.env.REACT_APP_ADMIN_API_URL;
console.log("ADMIN_API_URL", ADMIN_API_URL);
//Get Subscribe Count
export function getsubscribecount() {
  return axios.get<SubscribeCountModel>(`${ADMIN_API_URL}/getsubscribeusercount`);
}

export function getnewusersthisweek() {
  return axios.get<NewUsersThisWeekModel>(`${ADMIN_API_URL}/getnewusersthisweek`);
}

export function getuserscountmonth() {
  return axios.get<NewUsersThisMonthModel>(`${ADMIN_API_URL}/getuserscountmonth`);
}
>>>>>>> 7efb2ae9bfd5ff75ec627c17f0cf3af148a7c714
