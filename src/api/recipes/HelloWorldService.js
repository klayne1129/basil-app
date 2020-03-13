// import Axios from "axios"

// class HelloWorldService {
//     executeHelloWorldService() {
//         // console.log('executed service')
//         //tell promise to get desired url we created in java and eclipse
//         return Axios.get('http://localhost:8080/hello-world'); 
//     }

//     executeHelloWorldBeanService() {
//         // console.log('executed service')
//         //tell promise to get desired url we created in java and eclipse
//         return Axios.get('http://localhost:8080/hello-world-bean'); 
//     }
// //add an additional parameter to axios get method call to make sure it sends an 
// //authorization header
//     executeHelloWorldPathVariableService(name) {
//         // console.log('executed service')
//         //tell promise to get desired url we created in java and eclipse

//         // let username = "basil"
//         // let password = "basil"

//         // let basicAuthenticationHeader = 'Basic '+ window.btoa(username + ":" + password)
//         return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
//         // ,
//         //     {
//         //         headers : {
//         //             authorization: basicAuthenticationHeader
//         //         }
//         //     }
//         ); 
//     }

// }

// export default new HelloWorldService()