import * as React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'ayy'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        },
        {
            label: 'Temperature',
            data: [120, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(25, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        },
    ]
};

class Chart extends React.Component<any, any> {
    render() {
        return (
            <Line
                data={data}
            />
        );
    }
}

export default Chart;