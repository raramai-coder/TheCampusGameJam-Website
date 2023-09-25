import GameCards from "./GameCards";
import { GamePageData } from "./GamePageData";

export default class GamePage extends Component{
    render()
    {
        return(
            <article>
            
                <h1>Game Page</h1>
                <section className = "gameContainer">

                    {GamePageData.map(data => 
                               <GameCards 
                               gameTitle={data.gameTitle} 
                               link={data.link}
                               date={data.date}
                               gameSummary={data.gameSummary}
                               ></GameCards>
                               )}

                </section>
            </article>
        )
    }
}