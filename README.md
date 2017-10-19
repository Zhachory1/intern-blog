# intern-blog
Blog for Evan and Zhach.

## Test Polymer App
Go into the public folder and run the following command

`polymer serve`

This will start a server on https://localhost:8081. However it will not be
attached to the Node Server and API. So this application is purely serving
components.

## Build Polymer Application
Go to the public folder and run the following command

`polymer build`

This will create a folder in the same directory called `build`. Inside the
folder there will be two other folders, `bundled` and `unbundled`. Bundled is
used for production and  unbundled is used for development or sandbox.

Remove the build folder in the parent directory, if there is one. Then move the
newly created build folder into the parent directory. Then traverse to that
parent directory. You can accomplish all of this in one command.

`rm -rf ../build/ && mv build/ ../ && cd ..`

This command must be done in the public folder.

Now, the newly built build can be served.

## Serve Production
`source run.sh`

## Serve Development/Sandbox
`source run_local.sh`
