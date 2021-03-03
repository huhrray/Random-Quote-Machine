import React, {Component} from "react"
import randomcolor from "randomcolor"
import "./Quotebox.css"

class Quotebox extends Component {
    constructor(){
        super()
        this.state = {
            quoteText: "",
            author: "",
            color:""

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        const newColor = randomcolor()
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    quoteText: data.content,
                    author: data.author,
                    color:newColor
            })
            document.body.style.backgroundColor = this.state.color;
        }) 
    }
    
    render(){
        return(
            
            <div id ="quote-box">
                <h1 id ="text" className="fade-in"style={{color:this.state.color}}>{this.state.quoteText}</h1>
                <p id ="author" style={{color:this.state.color}}>{this.state.author}</p>
                <div id ="button-box" >
                    <a href ="twitter.com/intent/tweet" id ="tweet-quote" target="_top"  style={{color:this.state.color}}><i class ="fab fa-twitter"></i></a>
                    <button id ="new-quote" onClick={this.handleClick}  style={{backgroundColor:this.state.color}}>New quote</button>
                </div>
            </div>
        )
    }
}

export default Quotebox