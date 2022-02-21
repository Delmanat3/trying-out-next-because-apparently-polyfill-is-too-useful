import Backendless from "backendless"
import { TopSeven } from "./coinGecko";
const axios=require("axios")
var APP_ID = '3F38703A-DA8E-8060-FFB6-857C57A93000';
var API_KEY = 'CD856A9F-DBFB-4F4D-BA6B-CB2D45010057';
Backendless.initApp(APP_ID, API_KEY);

export const Get_Seven=async()=>{
const resData= await Backendless.Data.of( "topseven" ).find()
return resData
}

export const GET_NEWS=async()=>{
  const resData= await Backendless.Data.of( "News" ).find()
  return resData
  }
export const Me=async(key,obj)=>{
 return await Backendless.Cache.put(key, obj)
  .then( function( result ) {
    console.log(result)
  })
  .catch( function( error ) {
    console.log(error.message)
  });
}

export const ADD_SEARCH=async(search)=>{

  Backendless.Data.of( "Search" ).save( search )
  .then( function( savedObject ) {
      console.log( "new Search instance has been saved" );
    })
  .catch( function( error ) {
      console.log( "an error has occurred " + error.message );
    });
}



// export const getCache = async (key)=>{
//   return await Backendless.Cache.get( key )
// }
export const LOGIN_USER=async(form)=>{
  try{
    
const user_email=form.user_email;
console.log(user_email)
const user_password=form.user_password
const url="http://localhost:3001/api/user/login"
const resData=  await axios({
  method: 'post',
  url: url,
  data: {
    user_email: user_email,
    user_password: user_password
  }
});
if(!resData){return false}

return resData

  }catch(err){
    console.error(err)
  }
}

export const ADD_USER=async(form)=>{
  try{
    return await axios({
        method: 'post',
        url:`http://localhost:3001/api/user/`,
        data: {
          user_name: form.user_name,
          user_email:form.user_email, 
          user_password:form.user_password ,          
        }
      });
    }catch(err){
      console.error(err);
    }
}

export const getUser=async()=>{
  try{
  const resData= await Backendless.UserService.getCurrentUser()
  return resData
  }catch(err){
    console.error(err)
  }

}


// const News=async()=>{
//   try{
//     const Times=async()=>{
//       try{
//         const resData= await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Crypto&api-key=ALH55qxTz4oYfouvhFQ6TKWpoUcZOpvI')
//         console.log(resData.data)
//       const {data}=resData
//       const {response}=data
//       const {docs}=response
//      const hup= docs.map((art)=>({
//         abstract:art.abstract,
//         headline:art.headline.main,
//         lead_paragraph:art.lead_paragraph,
//         section:art.section_name,
//         snippet:art.snippet,
//         type:art.type_of_material,
//         url:art.web_url,
//         words:art.word_count,
//       }))
//       await Backendless.Data.of( "News" ).bulkCreate( hup )
//       console.log("bulk create successful")
//       console.log(hup)
//         }catch(err){
//           console.log(err)
//         }
//       }
//       Times()

//   }catch(err){
//     console.error(err)
//   }


// } 

export const TopSevenRefresh=async()=>{

try{
const resData=await TopSeven();
if(!resData) return alert("your balls are tiny");

return resData;
}catch(err){
return alert(err);
}
} 
//  setInterval(TopSevenRefresh, 18000000);
//  setInterval(News, 18000000);
