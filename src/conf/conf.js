const Config ={

    appwriteUrl : String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId : String(process.env.REACT_APP_PROJECT_ID),
    appwriteDatabaseId : String(process.env.REACT_APP_DATABASE_ID),
    appwriteCollectionId : String(process.env.REACT_APP_COLLECTION_URL),
    appwriteBucketId : String(process.env.REACT_APP_BUCKET_URL),
}
export default Config;