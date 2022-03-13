# Simple Library for Angular

A Simple Angular library includes a library and demo/example

# Step to reproduce
1. Create empty workspace by run the command `ng new [simple-workspace] --no-create-application`
2. `cd` into your workspace folder, then open vs code.
3. Generate a Angular library scaffold by running the command `ng generate library [simple-core] --prefix=sim` (prefix sim-[component-name])
4. Generate Example/Demo project to test purpose before publishing to real npm by running the command `ng generate application simple-demo`

> **use [] to indicate [your-project-name]

# Build Angular library
1. Single build use `ng build [simple-core]`
2. Watch and rebuild all the time use `ng build --watch [simple-core]` (It will be built everytime when we make change)


# Serve Demo Application
`ng serve simple-demo`



