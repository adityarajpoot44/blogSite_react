import Config from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{

    client = new Client()
    account;
    
    constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl) 
        .setProject(Config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccout({email, password, name}){
        try {
           const useraccount =  await this.account.create(ID.unique(),email,password,name);
           if(useraccount){
                //call other method;
                return this.login({email,password});
           }else{
            return useraccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login ({email,password}){
        try {
            await this.account.createEmailSession(email,password);
        } catch (error) {
            return error;
        }
    }

    async getCurrentUser(){
        try {
            return  await this.account.get();
        } catch (error) { 
            return error;
        }
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(error){
            return error;
        }
    }
}

const authService = new AuthService();

export default authService;