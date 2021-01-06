(this["webpackJsonpbasil-app"]=this["webpackJsonpbasil-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo2.7518cefc.png"},57:function(e,t,a){e.exports=a(88)},62:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(46),l=a.n(s),i=(a(62),a(4)),c=a(5),o=a(7),m=a(6),u=a(8),d=a(13),h=a(22),p=a(14),g=a.n(p),E="https://basil-full-stack-backend.azurewebsites.net",b="".concat(E,"/jpa"),f=new(function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"executeJWTAuthenticationService",value:function(e,t){return g.a.post("".concat(E,"/authenticate"),{username:e,password:t})}},{key:"registerSuccessfulLoginForJwt",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createJWTToken(t))}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUser",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}},{key:"getAdminUser",value:function(){var e=sessionStorage.getItem("authenticatedUser");return"basil"===e?e:""}},{key:"setupAxiosInterceptors",value:function(e){var t=this;g.a.interceptors.request.use((function(a){return t.isUserLoggedIn()&&(a.headers.authorization=e),a}))}},{key:"executeBasicAuthenticationService",value:function(e,t){return g.a.get("".concat(E,"/basicauth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"registerSuccessfulLogin",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),this.setupAxiosInterceptors(this.createBasicAuthToken(e,t))}}]),e}()),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return f.isUserLoggedIn()?r.a.createElement(h.b,this.props):r.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component);var k=function(){return r.a.createElement("div",null,"An Error has occured. Page not found.")},y=a(21),w=a.n(y),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=f.isUserLoggedIn(),t=f.getAdminUser();return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark navbar-custom"},r.a.createElement("a",{className:"navbar-brand",href:"https://github.com/klayne1129",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:w.a,width:"70",alt:"github.com/klayne1129"})),r.a.createElement("ul",{className:"navbar-nav"},e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/welcome/Basil",className:"nav-link"},"Home")),e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/recipes",className:"nav-link"},"Recipes")),e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/search",className:"nav-link"},"Search"))),r.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contact",className:"nav-link"},"Contact")),e&&t&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/userList",className:"nav-link"},"Users")),!e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login")),!e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/register",className:"nav-link"},"Register")),e&&r.a.createElement("li",null,r.a.createElement(d.b,{to:"/logout",className:"nav-link",onClick:f.logout},"Logout")))))}}]),t}(n.Component),C=Object(h.g)(O),j=a(3),N=new(function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"retrieveAllRecipes",value:function(e){return g.a.get("".concat(b,"/users/").concat(e,"/recipes"))}},{key:"retrieveRecipe",value:function(e,t){return g.a.get("".concat(b,"/users/").concat(e,"/recipes/").concat(t))}},{key:"deleteRecipe",value:function(e,t){return g.a.delete("".concat(b,"/users/").concat(e,"/recipes/").concat(t))}},{key:"updateRecipe",value:function(e,t,a){return g.a.put("".concat(b,"/users/").concat(e,"/recipes/").concat(t),a)}},{key:"createRecipe",value:function(e,t){return g.a.post("".concat(b,"/users/").concat(e,"/recipes"),t)}}]),e}()),T=a(94),S=a(89),L=a(92),R=a(90),U=function(e){return r.a.createElement(d.b,{to:"/view/"+e.recipe.id,className:"link"},r.a.createElement(T.a,{className:"shadow grow",bg:"light",style:{marginTop:10}},r.a.createElement(T.a.Img,{variant:"top",src:e.recipe.image}),r.a.createElement(T.a.Header,{className:"h5"},e.recipe.title," ",r.a.createElement(S.a,{variant:"secondary"},e.recipe.mealType)),r.a.createElement(L.a,{variant:"flush"})))},F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={recipes:[]},a.refreshRecipes=a.refreshRecipes.bind(Object(j.a)(a)),a.addRecipeClicked=a.addRecipeClicked.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("component did Mount"),this.refreshRecipes()}},{key:"refreshRecipes",value:function(){var e=this,t=f.getLoggedInUser();N.retrieveAllRecipes(t).then((function(t){e.setState({recipes:t.data})}))}},{key:"recipeList",value:function(){return this.state.recipes.map((function(e,t){return r.a.createElement(U,{recipe:e,key:t})}))}},{key:"addRecipeClicked",value:function(){this.props.history.push("/recipes/-1")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container pt-4",role:"main"},r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-dark",onClick:this.addRecipeClicked},"Add Recipe")),r.a.createElement("br",null),r.a.createElement("img",{src:w.a,width:"200",alt:"github.com/klayne1129"}),r.a.createElement("br",null),r.a.createElement("br",null),0===this.state.recipes.length&&r.a.createElement("p",{className:"lead"},'Looks pretty empty in here! Click "Add Recipe" to create a new recipe.'),0!==this.state.recipes.length&&r.a.createElement("p",{className:"lead"},"Click on the recipe card for ingredients and steps!"),r.a.createElement("br",null),r.a.createElement(R.a,null,this.recipeList()))}}]),t}(n.Component),M=a(27),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e){"Enter"===e.key&&f.executeJWTAuthenticationService(a.state.username,a.state.password).then((function(e){f.registerSuccessfulLoginForJwt(a.state.username,e.data.token),a.props.history.push("/welcome/".concat(a.state.username))})).catch((function(){a.setState({showSuccessMessage:!1}),a.setState({hasLoginFailed:!0})}))},a.state={username:"",password:"",hasLoginFailed:!1,showSuccessMessage:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.loginClicked=a.loginClicked.bind(Object(j.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){var e=this;f.executeJWTAuthenticationService(this.state.username,this.state.password).then((function(t){f.registerSuccessfulLoginForJwt(e.state.username,t.data.token),e.props.history.push("/welcome/".concat(e.state.username))})).catch((function(){e.setState({showSuccessMessage:!1}),e.setState({hasLoginFailed:!0})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"container"},this.state.hasLoginFailed&&r.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials"),this.state.showSuccessMessage&&r.a.createElement("div",null,"Login Successful"),"Username: ",r.a.createElement("input",{type:"text",name:"username",placeholder:"current username",value:this.state.username,onChange:this.handleChange}),"Password: ",r.a.createElement("input",{type:"password",name:"password",placeholder:"current password",value:this.state.password,onChange:this.handleChange,onKeyPress:this.handleKeyPress}),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:this.loginClicked},"Login")))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"You are logged out."),r.a.createElement("div",{className:"container"},"Thanks for using Basil!"))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSuccessfulResponse=a.handleSuccessfulResponse.bind(Object(j.a)(a)),a.handleError=a.handleError.bind(Object(j.a)(a)),a.welcomeClicked=a.welcomeClicked.bind(Object(j.a)(a)),a.state={welcomeMessage:"",errorMessage:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"welcomeClicked",value:function(){console.log("welcome clicked"),this.props.history.push("/recipes")}},{key:"handleError",value:function(e){console.log(e.response);var t="";t&&(t+=e.message),e.response&&e.response.data&&(t+=e.response.data.message),this.setState({errorMessage:t})}},{key:"handleSuccessfulResponse",value:function(e){this.setState({welcomeMessage:e.data.message})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron my-4"},r.a.createElement("img",{src:w.a,width:"300",alt:"github.com/klayne1129"}),r.a.createElement("h1",{className:"display-3"},"Welcome ",f.getLoggedInUser(),"!"),r.a.createElement("p",{className:"lead"},"Hey there! Basil is designed to be your own personal recipe database. Whether its from your favorite food blog or your family's recipe book, all recipes can be stored here. Click the button below to get started."),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.welcomeClicked},"View my recipes!")),r.a.createElement("div",{className:"container"},this.state.welcomeMessage),r.a.createElement("div",{className:"container"},this.state.errorMessage)))}}]),t}(n.Component),P=a(11),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={id:a.props.match.params.id,title:"",directions:"",ingredients:"",notes:"",mealType:"selectOne",image:"",tags:"",prepTime:"",cookTime:"",servings:"",webLink:""},a.onSubmit=a.onSubmit.bind(Object(j.a)(a)),a.validate=a.validate.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id){var t=f.getLoggedInUser();N.retrieveRecipe(t,this.state.id).then((function(t){return e.setState({title:t.data.title,directions:t.data.directions,ingredients:t.data.ingredients,notes:t.data.notes,mealType:t.data.mealType,image:t.data.image,tags:t.data.tags,prepTime:t.data.prepTime,cookTime:t.data.cookTime,servings:t.data.servings,webLink:t.data.webLink})}))}}},{key:"validate",value:function(e){var t={};return e.title?e.title.length<2&&(t.title="Title must be at least 2 characters in length"):t.title="Enter title",e.directions?e.directions.length<5&&(t.directions="Directions must be at least 5 characters in length"):t.directions="Enter directions",e.ingredients?e.ingredients.length<2&&(t.ingredients="Ingredients must be at least 2 characters in length"):t.ingredients="Enter ingredients","selectOne"===e.mealType&&(t.mealType="Select a meal type"),t}},{key:"onSubmit",value:function(e){var t=this,a=f.getLoggedInUser(),n={id:this.state.id,title:e.title,directions:e.directions,ingredients:e.ingredients,notes:e.notes,mealType:e.mealType,image:e.image,tags:e.tags,prepTime:e.prepTime,cookTime:e.cookTime,servings:e.servings,webLink:e.webLink};-1===this.state.id?N.createRecipe(a,n).then((function(){return t.props.history.push("/recipes")})):N.updateRecipe(a,this.state.id,n).then((function(){return t.props.history.push("/recipes")}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.directions,n=e.ingredients,s=e.notes,l=e.mealType,i=e.image,c=e.tags,o=e.prepTime,m=e.cookTime,u=e.servings,d=e.webLink;return r.a.createElement("div",null,r.a.createElement("h1",null,"My Recipe"),r.a.createElement("div",{className:"container"},r.a.createElement(P.d,{initialValues:{title:t,directions:a,ingredients:n,notes:s,mealType:l,image:i,tags:c,prepTime:o,cookTime:m,servings:u,webLink:d},onSubmit:this.onSubmit,validateOnChange:!1,validateonBlur:!1,validate:this.validate,enableReinitialize:!0},(function(e){return r.a.createElement(P.c,null,r.a.createElement(P.a,{name:"title",component:"div",className:"alert alert-warning"}),r.a.createElement(P.a,{name:"directions",component:"div",className:"alert alert-warning"}),r.a.createElement(P.a,{name:"ingredients",component:"div",className:"alert alert-warning"}),r.a.createElement(P.a,{name:"mealType",component:"div",className:"alert alert-warning"}),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Title"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"title",placeholder:"Mama Freddie's Spaghetti"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Serving Size (Optional)"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"servings",placeholder:"8 servings"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Prep Time (Optional)"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"prepTime",placeholder:"5 mins"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Cook Time (Optional)"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"cookTime",placeholder:"20 mins"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Ingredients"),r.a.createElement(P.b,{as:"textarea",className:"form-control",type:"text",name:"ingredients",id:"textBox",placeholder:"pasta sauce\nspaghetti noodles\n"}),r.a.createElement("p",null,"Please press enter after each ingredient except the last one. Each ingredient should be on it's own line.")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Directions"),r.a.createElement(P.b,{as:"textarea",className:"form-control",type:"text",name:"directions",id:"textBox",placeholder:"First boil water\nPlace dry spaghetti noodles into boiling water\n"}),r.a.createElement("p",null,"Please press enter after each step except the last step. Each step should be on it's own line.")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Notes (Optional)"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"notes",id:"textBox",placeholder:"Can freeze for meal prep."})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Meal Type"),r.a.createElement(P.b,{as:"select",name:"mealType"},r.a.createElement("option",{selected:!0,value:"selectOne"},"Select One"),r.a.createElement("option",{value:"entree"},"Entree"),r.a.createElement("option",{value:"drink"},"Drink"),r.a.createElement("option",{value:"snack"},"Snack"),r.a.createElement("option",{value:"dessert"},"Dessert"),r.a.createElement("option",{value:"side"},"Side"),r.a.createElement("option",{value:"app"},"Appetizer"))),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Tags (Optional)"),r.a.createElement(P.b,{className:"form-control",type:"text",name:"tags",placeholder:"easy,itallian,pasta"}),r.a.createElement("p",null,"Please seperate each tag with a comma.")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Image URL (Optional)"),r.a.createElement(P.b,{type:"text",className:"form-control",name:"image",placeholder:"https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4.jpg"}),r.a.createElement("p",null,'If you see an image online you would like to use, right click image and hit "open image in new tab". Copy the url in your browser and paste it here.')),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Website URL (Optional)"),r.a.createElement(P.b,{type:"text",className:"form-control",name:"webLink",placeholder:"www.Freddie'sAwesomeSpaghetti.com"}),r.a.createElement("p",null,"Copy the desired website's url and paste it here.")),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Save"))}))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={id:a.props.match.params.id,title:"",directions:"",ingredients:"",notes:"",mealType:"",image:"",tags:"",prepTime:"",cookTime:"",servings:"",webLink:""},a.refreshRecipe=a.refreshRecipe.bind(Object(j.a)(a)),a.printRecipeClicked=a.printRecipeClicked.bind(Object(j.a)(a)),a.updatrecipeClicked=a.updateRecipeClicked.bind(Object(j.a)(a)),a.deleteRecipeClicked=a.deleteRecipeClicked.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("component did Mount"),this.refreshRecipe()}},{key:"refreshRecipe",value:function(){var e=this;if(-1!==this.state.id){var t=f.getLoggedInUser();N.retrieveRecipe(t,this.state.id).then((function(t){return e.setState({title:t.data.title,directions:t.data.directions,ingredients:t.data.ingredients,notes:t.data.notes,mealType:t.data.mealType,image:t.data.image,tags:t.data.tags,prepTime:t.data.prepTime,cookTime:t.data.cookTime,servings:t.data.servings,webLink:t.data.webLink})}))}}},{key:"refreshRecipes",value:function(){var e=this,t=f.getLoggedInUser();N.retrieveAllRecipes(t).then((function(t){e.setState({recipes:t.data})}))}},{key:"printRecipeClicked",value:function(){console.log("print"),window.print()}},{key:"updateRecipeClicked",value:function(e){console.log("update "+e),this.props.history.push("/recipes/".concat(this.state.id))}},{key:"deleteRecipeClicked",value:function(e){var t=this,a=f.getLoggedInUser();N.deleteRecipe(a,e).then((function(e){t.refreshRecipes(),t.props.history.push("/recipes")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container pt-4",role:"main"},r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-dark",value:"Print",onClick:function(){return e.printRecipeClicked()}},"Print"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.updateRecipeClicked(e.state.id)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteRecipeClicked(e.state.id)}},"Delete")),r.a.createElement("div",null,r.a.createElement("div",null,""!==this.state.title&&r.a.createElement("h1",null,this.state.title),""!==this.state.image&&r.a.createElement("img",{className:"recipelistimage",src:this.state.image,alt:"recipe"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("h5",null,r.a.createElement("pre",null,"Servings: ")),""!==this.state.servings&&r.a.createElement("p",null,this.state.servings),r.a.createElement("hr",{width:"1",size:"1000%"}),r.a.createElement("h5",null,r.a.createElement("pre",null,"Prep Time: ")),""!==this.state.prepTime&&r.a.createElement("p",null,this.state.prepTime),r.a.createElement("hr",{width:"1",size:"1000%"}),r.a.createElement("h5",null,r.a.createElement("pre",null,"Cook Time: ")),""!==this.state.cookTime&&r.a.createElement("p",null,this.state.cookTime),r.a.createElement("hr",{width:"1",size:"1000%"})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h2",null,"Ingredients:"),""!==this.state.ingredients&&r.a.createElement("p",{className:"lead"},r.a.createElement("ul",null,this.state.ingredients.split("\n").map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("hr",null),r.a.createElement("h2",null,"Steps:"),""!==this.state.directions&&r.a.createElement("p",{className:"lead"},r.a.createElement("ol",null,this.state.directions.split("\n").map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h5",null,"Notes:"),""!==this.state.notes&&r.a.createElement("p",{className:"lead"},r.a.createElement("ul",null,this.state.notes)),r.a.createElement("hr",null),r.a.createElement("h5",null,"Website URL:"),r.a.createElement("a",{href:this.state.webLink,target:"_blank",rel:"noopener noreferrer"},this.state.webLink),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("hr",{width:"1",size:"100%"}),r.a.createElement("h5",null,"Tags:"),""!==this.state.tags&&r.a.createElement("p",{className:"lead"},r.a.createElement("ul",null,this.state.tags.split(",").map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("hr",{width:"1",size:"100%"}),r.a.createElement("h5",null,"Meal Type:"),r.a.createElement("p",{className:"lead"},r.a.createElement("ul",null,this.state.mealType)),r.a.createElement("hr",{width:"1",size:"100%"})))),r.a.createElement("div",null))}}]),t}(n.Component),z=a(91),W=a(93),J=function(e){return r.a.createElement(d.b,{to:"/view/"+e.recipe.id,className:"link"},r.a.createElement(T.a,{className:"shadow grow",bg:"light",style:{marginTop:10}},r.a.createElement(T.a.Img,{variant:"top",src:e.recipe.image}),r.a.createElement(T.a.Header,{className:"h5"},e.recipe.title," ",r.a.createElement(S.a,{variant:"secondary"},e.recipe.mealType)),r.a.createElement(L.a,{variant:"flush"})))},K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={recipes:[],filterByField:"all",filterByTerm:""},a.refreshRecipes=a.refreshRecipes.bind(Object(j.a)(a)),a.handleFilter=a.handleFilter.bind(Object(j.a)(a)),a.handleTerm=a.handleTerm.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("component did Mount"),this.refreshRecipes()}},{key:"refreshRecipes",value:function(){var e=this,t=f.getLoggedInUser();N.retrieveAllRecipes(t).then((function(t){e.setState({recipes:t.data})}))}},{key:"recipeList",value:function(){var e=this.state.filterByField,t=this.state.filterByTerm.replace(/^\s+|\s+$/g,"");return this.state.recipes.map((function(a,n){if("all"===e&&(a.title.toLowerCase().includes(t.toLowerCase())||a.ingredients.toLowerCase().includes(t.toLowerCase())||a.tags.toLowerCase().includes(t.toLowerCase())||a.mealType.toLowerCase().includes(t.toLowerCase()))||"title"===e&&a.title.toLowerCase().includes(t.toLowerCase())||"ingredients"===e&&a.ingredients.toLowerCase().includes(t.toLowerCase())||"tags"===e&&a.tags.toLowerCase().includes(t.toLowerCase())||"mealType"===e&&a.mealType.toLowerCase().includes(t.toLowerCase()))return r.a.createElement(J,{recipe:a,key:n})}))}},{key:"handleFilter",value:function(e){this.setState({filterByTerm:"",filterByField:e.target.value})}},{key:"handleTerm",value:function(e){this.setState({filterByTerm:e.target.value})}},{key:"render",value:function(){var e;return e="mealType"===this.state.filterByField?r.a.createElement("div",{className:"form-group row"},r.a.createElement(z.a,{toggle:!0,className:"mt-1 ml-3"},r.a.createElement(W.a,{type:"radio",name:"radio",value:"entree",checked:"entree"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Entrees"),r.a.createElement(W.a,{type:"radio",name:"radio",value:"dessert",checked:"dessert"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Desserts"),r.a.createElement(W.a,{type:"radio",name:"radio",value:"snack",checked:"snack"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Snacks"),r.a.createElement(W.a,{type:"radio",name:"radio",value:"drink",checked:"drink"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Drinks"),r.a.createElement(W.a,{type:"radio",name:"radio",value:"side",checked:"side"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Sides"),r.a.createElement(W.a,{type:"radio",name:"radio",value:"app",checked:"app"===this.state.filterByTerm,onChange:this.handleTerm,variant:"dark"},"Appetizers"))):r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("input",{placeholder:"SearchTerm",value:this.state.filterByTerm,className:"inputmargin form-control",type:"text",onChange:this.handleTerm}))),r.a.createElement("div",{className:"container pt-4",role:"main"},r.a.createElement("br",null),r.a.createElement("img",{src:w.a,width:"200",alt:"github.com/klayne1129"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container "},r.a.createElement("h5",null,"Search by:"),r.a.createElement(z.a,{toggle:!0,className:""},r.a.createElement(W.a,{type:"radio",name:"radio",defaultChecked:!0,value:"all",checked:"all"===this.state.filterByField,onChange:this.handleFilter,variant:"dark"},"All"),r.a.createElement(W.a,{type:"radio",name:"radio",defaultChecked:!0,value:"title",checked:"title"===this.state.filterByField,onChange:this.handleFilter,variant:"dark"},"Name"),r.a.createElement(W.a,{type:"radio",name:"radio",defaultChecked:!0,value:"ingredients",checked:"ingredients"===this.state.filterByField,onChange:this.handleFilter,variant:"dark"},"Ingredients"),r.a.createElement(W.a,{type:"radio",name:"radio",defaultChecked:!0,value:"mealType",checked:"mealType"===this.state.filterByField,onChange:this.handleFilter,variant:"dark"},"Meal Type"),r.a.createElement(W.a,{type:"radio",name:"radio",defaultChecked:!0,value:"tags",checked:"tags"===this.state.filterByField,onChange:this.handleFilter,variant:"dark"},"Tags")),e),r.a.createElement(R.a,null,this.recipeList()))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSuccessfulResponse=a.handleSuccessfulResponse.bind(Object(j.a)(a)),a.handleError=a.handleError.bind(Object(j.a)(a)),a.state={welcomeMessage:"",errorMessage:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement("br",null),r.a.createElement("img",{src:w.a,width:"200",alt:"github.com/klayne1129"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"You can contact me here:"),r.a.createElement("div",{id:"list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/klayne1129",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/katie-layne-5892031a2/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))),r.a.createElement("p",null,"Or, you can send me an email ",r.a.createElement("a",{href:"mailto:klayne1129@gmail.com",target:"_blank",rel:"noopener noreferrer"},"here"),".")),r.a.createElement("div",{className:"container"},this.state.welcomeMessage))}},{key:"handleSuccessfulResponse",value:function(e){this.setState({welcomeMessage:e.data.message})}},{key:"handleError",value:function(e){console.log(e.response);var t="";t&&(t+=e.message),e.response&&e.response.data&&(t+=e.response.data.message),this.setState({errorMessage:t})}}]),t}(n.Component),H=new(function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"retrieveUser",value:function(e){return g.a.get("".concat(b,"/users/").concat(e))}},{key:"createUser",value:function(e){return g.a.post("".concat(b,"/users"),e)}},{key:"retrieveAllUsers",value:function(){return g.a.get("".concat(b,"/users"))}},{key:"deleteUser",value:function(e){return g.a.delete("".concat(b,"/users/").concat(e))}}]),e}()),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={users:[],message:null},a.deleteUserClicked=a.deleteUserClicked.bind(Object(j.a)(a)),a.refreshUsers=a.refreshUsers.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("component did Mount"),this.refreshUsers()}},{key:"refreshUsers",value:function(){var e=this;H.retrieveAllUsers().then((function(t){e.setState({users:t.data})}))}},{key:"deleteUserClicked",value:function(e){var t=this;H.deleteUser(e).then((function(a){t.setState({message:"Deletion of user ".concat(e," successful.")}),t.refreshUsers()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Active User List"),this.state.message&&r.a.createElement("div",{className:"alert alert-success"},this.state.message),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.username),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteUserClicked(t.id)}},"Delete")))}))))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e){if("Enter"===e.key){var t={username:a.state.username,password:a.state.password,role:"ROLE_USER"};a.state.password===a.state.verifyPassword?(H.createUser(t),a.setState({showSuccessMessage:!0}),a.setState({hasSignUpFailed:!1})):(a.setState({showSuccessMessage:!1}),a.setState({hasSignUpFailed:!0}))}},a.state={username:"",password:"",verifyPassword:"",role:"ROLE_USER",hasSignUpFailed:!1,showSuccessMessage:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.signUpClicked=a.signUpClicked.bind(Object(j.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(j.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"signUpClicked",value:function(){var e={username:this.state.username,password:this.state.password,role:"ROLE_USER"};this.state.password===this.state.verifyPassword?(H.createUser(e),this.setState({showSuccessMessage:!0}),this.setState({hasSignUpFailed:!1})):(this.setState({showSuccessMessage:!1}),this.setState({hasSignUpFailed:!0}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Registration"),this.state.hasSignUpFailed&&r.a.createElement("div",{className:"alert alert-warning"},"Passwords do not match!"),this.state.showSuccessMessage&&r.a.createElement("div",{className:"alert alert-success"},"Registration successful. Return to login page."),r.a.createElement("div",{className:"container"},r.a.createElement("label",null,"Username: ",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("label",null,"Password: ",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("label",null,"Verify Password: ",r.a.createElement("input",{type:"password",name:"verifyPassword",value:this.state.verifyPassword,onChange:this.handleChange,onKeyPress:this.handleKeyPress})),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:this.signUpClicked},"Sign Up")))}}]),t}(n.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"RecipeApp"},r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:x}),r.a.createElement(h.b,{path:"/login",component:x}),r.a.createElement(h.b,{path:"/register",component:Y}),r.a.createElement(v,{path:"/welcome/:name",component:I}),r.a.createElement(v,{path:"/recipes/:id",component:A}),r.a.createElement(v,{path:"/recipes",component:F}),r.a.createElement(v,{path:"/logout",component:B}),r.a.createElement(v,{path:"/view/:id",component:D}),r.a.createElement(v,{path:"/search",component:K}),r.a.createElement(v,{path:"/contact",component:_}),r.a.createElement(v,{path:"/userList",component:V}),r.a.createElement(h.b,{component:k})))))}}]),t}(n.Component),q=(a(86),a(87),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2aed9aeb.chunk.js.map