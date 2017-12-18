import * as React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import Chart from '../components/Chart';
import ErrorMssg from '../components/ErrorMssg';

// INTERFACES
import * as I from '../interfaces';

class Display extends React.Component<any, any> {

    display() {
        const { weather: { weather, error } } = this.props;
        
        if (error !== 0) {
            return <ErrorMssg error={error} />;
        }

        if (weather.length === 1) {
            return  <div>hai</div>;
        }

        return <Chart data={weather}/>;
    }

    render() {
        return(
            <div id="display">
                <SearchForm />
                error: {this.props.weather.error}
                {this.display()}
            </div>
        );
    }
}

const mapStateToProps = (state: I.StoreState): I.StoreState => {
    return state;
}

export default connect(mapStateToProps, null)(Display);