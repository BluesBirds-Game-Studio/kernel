## This will be the kernel for the BluesBirds gaming server.

The core functionalities can be found in `core` directory and it contains all the necessary functions to handle connection, loading, throttling and load balancing functionality. 
The Kernel is built ontop of Node JS runtime - this is as such in order to be able to run on a _Non-dedicated_ cloud server throughpu the testing phase and is as a proof of concept of having a running gaming kernel instance based on node in production.

### Get started
fork and or clone the repo to your local environment and run `npm install` to install the necesary dependencies. Also make sure to install ts-node (if you want to run the typescript files directly).

In the root of the project, run `tsc`. This will compile all the files to plain ES5 js and enable you to run without issues.

Bluesbirds will be hosting web-compiled games made in serveral game engines. 

Our target is `Godot` as out main game engine.

cc: Josias Aurel and team