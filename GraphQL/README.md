### install this package with windows 10
npm install postgraphile --save
npm install postgraphile-plugin-connection-filter --save
npm install --global yarn
yarn add postgraphile postgraphile-plugin-connection-filter


### run API GRAPQL

    - This comand run in cmd 
        postgraphile --append-plugins postgraphile-plugin-connection-filter -c postgres://postgres:Desarrollo@localhost:5432/API_cities --watch --enhance-graphiql --dynamic-json -p 4000
    - alternative: 
        run Postgres API Server.bat


### rute to access
http://localhost:4000/graphiql