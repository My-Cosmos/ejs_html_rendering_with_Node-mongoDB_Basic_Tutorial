1. Using ejs(template engine for js) to render dynamic data/response from the server to the HTML file with node/javascript
    1. EJS enables the injection of dynamic data into HTML templates.
    2. Templates can be reused across different parts of an application.
    3. Allows use of JavaScript for looping, conditionals, and more within HTML. <br>
    Example:- ( [More info](https://stackoverflow.com/questions/64144316/what-is-ejs-what-is-the-use-of-ejs) )<br> 
    ```
    <body>
        <h1><%= title %></h1>
        <ul>
            <% items.forEach(item => { %>
                <li><%= item %></li>
            <% }); %>
        </ul>
    </body>
    ```
