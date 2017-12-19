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
        let isInvalid = touched && error ? 'is-invalid' : '';

        if (label !== 'Country') {
            return(
                <div className="col-sm-6">
                    <label htmlFor={label}>{label}</label>
                    <input
                        className={`form-control ${isInvalid}`}
                        type="text"
                        name={label}
                        id={label}
                        required
                        {...input}
                    />
                    <div className="invalid-feedback">
                        {touched ? error : ''}
                    </div>
                </div>
            );
        }

        return(
            <div className="col-sm-6">
                <label htmlFor={label}>{label}</label>
                <Countries label={label} isinvalid={isInvalid} {...input}/>
                <div className="invalid-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(searchValues: I.City) {
        const { fetchWeather } = this.props;
    
        fetchWeather(searchValues);
    }
    
    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit)} id="" noValidate>
                    <div className="row">
                        <Field label="City" name="name" component={this.renderField} />
                        <Field label="Country" name="country" component={this.renderField} />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 cc btn-container">
                            <button className="btn btn-outline-success">Check the weather!</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = (values: I.City): object => {
    const errors: object = {};

    if (!values.name) {
        let _i = 'name';
        errors[_i] = 'You must specify a city!';
    }

    if (!values.country) {
        let _i = 'country';
        errors[_i] = 'You must specify a country!';
    }
    
    return errors;
};

const mapStateToProps = (state: I.StoreState): I.StoreState => (state);

export default reduxForm({
    form: 'searchForm',
    validate
})(
    connect<any, any, any>(mapStateToProps, { fetchWeather })(SearchForm)
);