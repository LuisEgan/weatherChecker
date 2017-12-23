import * as React from 'react';

export default class Welcome extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Welcome!</h1>
                <hr/>
                <p>
                    This is an example app made with <a href="https://reactjs.org/">React</a>  + <a href="https://redux.js.org/">Redux</a> using <a href="https://www.typescriptlang.org/">Typescript</a> made by me, <a href="https://www.linkedin.com/in/luis-egan-565401127/">Luis Egan.</a>
                </p>
                <br/>
                <p>
                    Here you can look for any city in any country in the world and I'll graph its weather for you using <a href="http://www.chartjs.org/">ChartJs.</a>
                </p>
                <br/>
                <p>
                    It's likely you came here from my github page, but just in case, you can see my other projects <a href="https://github.com/LuisEgan/">here.</a>
                </p>
                
            </div>
        );
    }
}