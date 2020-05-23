## Express - backend API cheats
# **packages**
> 1 ( npm init -y )
>
> 2 ( npm i --save express)
>
> 3 ( mkdir src )
>
> 4 ( file "server.js" in src)
>
> 5 ( npm i --save-dev @babel/core @babel/node @babel/preset-env )
>
> 6 ( create file ".babelrc" and write 

    {
        "presets": ["@babel/preset-env"]
    }
    
>
> 7 ( npm i --save body-parser )



# **Run your server**
> *npx babel-node src/server.js*

# **extra** 
> *this will help with more automatic development*
>
> npm i --save-dev nodemon 
>
> *now you can run your server with:* 
> npx nodemon --exec npx babel-node src/server.js
