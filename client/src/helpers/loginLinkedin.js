import axios from "axios";


export const loginLinkedin = async() =>{
    const auth_endpoint = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=771nnb1spod0vm&redirect_uri=http://localhost:5173/&state=foobar&scope=profile%20email%20w_member_social`
    try{
        const authLinkedinLogin = await axios.get(auth_endpoint)
        console.log(authLinkedinLogin);
        
        const url = new URL(window.location.href);
        const urlParams = new URLSearchParams(url.search);
        const code = urlParams.get('code');
        console.log(code)

    }
    catch(error){
        console.error('Error redirecting to LinkedIn Login verification:', error);
        throw error;
    }
}



const url = "https://www.linkedin.com/oauth/v2/accessToken"
export const appToken= () =>{

}

