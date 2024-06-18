import Config from "../conf/conf.js";
import { Client, ID, Databases, Query, Storage } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(Config.appwriteUrl) 
            .setProject(Config.appwriteProjectId);
        
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);  
    }

    async createPost({title, slug, content, featureImage, status, userId}){

        try {
            
            return await this.databases.createDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }

            )

        } catch (error) {
            return error;
        }
    }

    async updatePost(slug, {title, content, featureImage, status}){

        try {
            return await this.databases.updateDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )
        } catch (error) {
            return error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
            )

            return true;
        } catch (error) {
            console.log("error in the deletePost",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("error in the get Post",error)
            return false;
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                queries, 
            )
        } catch (error) {
            console.log ("error in the gett ALL post ",error)
            return false
        }

    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Config.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("error in the upload file",error);
            return false;
            
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                Config.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            console.log("error fron delete",error)
            return false
        }
    }

    async filePreview(fileId){
        try {
             return  this.bucket.getFilePreview(
                Config.appwriteBucketId,
                fileId,
             )
            
        } catch (error) {
            console.log("error in the file preview",error)
            return false
        }
    }
}


const service = new Service();

export default service