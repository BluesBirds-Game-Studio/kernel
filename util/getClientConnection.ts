// discoverif client is connected 

import { NetworkInterfaceInfoIPv4 } from "os";

class Client {
    constructor(name: String) {
        this.name= name
        let clientOnline:Boolean = false
    }
    setState(state: Boolean) {
        this.clientOnline = state
    }
}

class ClientNetwork {

}

function isClientConnected(data: ClientNetwork)  {
    if (data.clientOnline) {
        client.setState(false)
    }
}

// This is total crap you know XD