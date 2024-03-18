import {
    getApps,
    initializeApp
} from 'firebase/app'
import {
    getStorage, 
    ref
} from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASEPROJECTID,
    storageBucket:"ezrental-79fe7.appspot.com",
    messagingSenderId: "729038797546",
    appId: "1:729038797546:web:2cf879c65e380d9ed33593",
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

  const storage = getStorage(app)
  export const storageRef = (token : string) => ref(storage, token)