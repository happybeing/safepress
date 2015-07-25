#SAFEpress POC.

Utilises https://github.com/newtriks/generator-react-webpack, react and Alt to create the basis of a UI that could potentially operate on SAFE.

Current setup is intentionally basic. We need to figure out the read/write operations on SAFE and how collaboration might operate over actual UI creation IMO - joshuef.

## Installation

clone the repo.
`npm i` to install all package
`grunt serve` will initialise the webpack dev setup and create a server
browse to `localhost:8000/webpack-dev-server` to see this.


#TODO
- [ ] ChromeApp setup. The application should compile to be able to read/write the list of 'posts' to the filesystem; retrieving this on app init and populating our list.
- [ ] Investigate data structures re: site manifest. ( locations of posts on users' SAFEs, authorised users etc)