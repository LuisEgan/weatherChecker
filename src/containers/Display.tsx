import * as React from 'react';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import Chart from '../components/Chart';

// INTERFACES
import * as I from '../interfaces';

class Display extends React.Component<any, any> {
    render() {
        const { weather: { city, weathers, error } } = this.props;
        return(
            <div id="display">
                {console.log(city)}
                {error}
                <SearchForm />
                <Chart data={weathers}/>
            </div>
        );
    }
}

const mapStateToProps = (state: I.StoreState): I.StoreState => (state);

export default connect(mapStateToProps, null)(Display);