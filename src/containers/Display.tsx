import * as React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import Chart from '../components/Chart';
import ErrorMssg from '../components/ErrorMssg';

// INTERFACES
import * as I from '../interfaces';

class Display extends React.Component<any, any> {

    render() {
        const { weather: { city, weathers, error } } = this.props;

        if (error !== 0) {
            return (
                <div id="display">
                    <SearchForm />
                    <ErrorMssg error={error} />
                </div>
            )
        }

        return(
            <div id="display">
                {console.log(city)}
                <SearchForm />
                <Chart data={weathers}/>
            </div>
        );
    }
}

const mapStateToProps = (state: I.StoreState): I.StoreState => (state);

export default connect(mapStateToProps, null)(Display);