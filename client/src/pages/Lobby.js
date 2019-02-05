import React, {Component} from 'react'
const io = require("socket.io-client")

export default class Lobby extends Component {
    constructor(){
        super()
        this.socket = io()
        this.state = {
            response : false,
            endpoint : 'http://localhost:3000'
        }
    }

    componentDidMount() {
        const {endpoint} = this.state
        const socket = io(endpoint)
        socket.on("connection", data => {
            console.log(data)
        })
    }

    render() {
       return(
           <div>
               Hello World
           </div>
       ) 
    }
}