import * as React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import Chart from '../components/Chart';
import ErrorMssg from '../components/ErrorMssg';
import Welcome from '../components/Welcome';

// STORE
import { Store } from '../reducers/Store';

class Display extends React.Component<Store.All, {}> {

    display() {
        const { allWeathers } = this.props;
        
        let error = allWeathers[0].error;

        if (error !== 0) {
            return <ErrorMssg error={error} />;
        }

        if (allWeathers.length === 1) {
            return  <Welcome />;
            // return <Chart allWeathers={allWeathers}/>;
        }

        return <Chart allWeathers={allWeathers}/>;
        // return  <Welcome />;
    }

    render() {
        return(
            <div id="display">
                <SearchForm />
                {this.display()}
                <footer>
                    - Luis Egan -
                    <br/>
                    <a href="https://www.linkedin.com/in/luis-egan-565401127/"><i className="fa fa-linkedin-square" aria-hidden="true" /></a>
                    <a href="https://github.com/LuisEgan/"><i className="fa fa-github" aria-hidden="true" /></a>                    
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state: Store.All): Store.All => {
    return state;
};

export default connect<Store.All, {}, {}>(mapStateToProps, {})(Display);