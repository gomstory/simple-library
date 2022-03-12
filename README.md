# SimpleWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

# Step to reproduce
1. Create empty workspace by run the command `ng new [simple-workspace] --no-create-application`
2. Cd into workspace folder, then open vs code.
3. Generate Angular library scaffold by running the command `ng generate library [simple-core] --prefix=sim` (prefix sim-[component-name])
4. Generate Example project to test local before publishing by running the command `ng generate application simple-demo`

# Build Angular library
1. Single build use `ng build [simple-core]`
2. Watch and rebuild all the time use `ng build --watch [simple-core]` (It will be built everytime when we make change)


# Serve Demo Application
`ng serve simple-demo`


> use [] to indicate [your-project-name]
