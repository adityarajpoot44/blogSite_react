
import Config from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

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

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {

            await this.databases.createDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            return console.log("created doc");
        } catch (error) {
            console.log("Appwrite Serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite Serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite Serive :: deletePost :: error", error);
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
            console.log("Appwrite Serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Config.appwriteDatabaseId,
                Config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {

            const data = await this.bucket.createFile(
                Config.appwriteBucketId,
                ID.unique(),
                file
            )
            console.log ("file created");
            return data;

        } catch (error) {
            console.log("Appwrite Serive :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                Config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            Config.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service