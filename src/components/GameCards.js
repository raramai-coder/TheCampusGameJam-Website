import React, {Component} from "react"

export default class GameCards extends Component{

static defaultProps = {
    gameTitle: "",
    gameSummary: "",
    date: "",
    link: "",
}

render()
{
    return(
        <article>
            <h1>{this.props.gameTitle}</h1>
            <h2>{this.props.link}</h2>
            <p>{this.props.date}</p>
            <p>{this.props.gameSummary}</p>
        </article>
    )
}

}