import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Countries from '../components/Countries';

// ACTIONS
import { fetchWeather } from '../actions';

// INTERFACES
import * as I from '../interfaces';

class SearchForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    renderField(field: any) {
        const { meta: { touched, error }, label, input} = field;
        let hadDanger = touched && error ? 'has-danger' : '';

        if (label !== 'Country') {
            return(
                <div className={`form-group ${hadDanger}`}>
                    <label htmlFor={label}>{label}</label>
                    <input
                        className="form-control"
                        type="text"
                        name={label}
                        {...input}
                    />
                    <div className="text-help">
                        {touched ? error : ''}
                    </div>
                </div>
            );
        }

        return(
            <div className={`form-group ${hadDanger}`}>
                <label htmlFor={label}>{label}</label>
                <Countries label={label} {...input}/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(searchValues: I.Search) {
        const { fetchWeather } = this.props;
    
        fetchWeather(searchValues);
    }
    
    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)} id="searchForm">
                    <Field
                        label="City"
                        name="city"
                        component={this.renderField}
                    />
                    <Field
                        label="Country"
                        name="country"
                        component={this.renderField}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary">Check the weather!</button>
                    </span>
                </form>
            </div>
        );
    }
}

const validate = (values: I.Search): object => {
    const errors: object = {};
    
    return errors;
};

const mapStateToProps = (state: I.StoreState): I.StoreState => (state);

export default reduxForm({
    form: 'searchForm',
    validate
})(
    connect<any, any, any>(mapStateToProps, { fetchWeather })(SearchForm)
);