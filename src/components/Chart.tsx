import * as React from 'react';
import { Line } from 'react-chartjs-2';

// INTERFACES
import * as I from '../interfaces';

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'ayy'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1
//         },
//         {
//             label: 'Temperature',
//             data: [120, 19, 3, 5, 2, 3],
//             backgroundColor: 'rgba(25, 99, 132, 0.2)',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1
//         },
//     ]
// };

class Chart extends React.Component<any, any> {

    shortenTime(_time: string): string {
        let time = parseInt(_time, 10);
        let suffix = '';

        if (time > 12) {
            time = time - 12;
            suffix = 'PM';
        } else {
            suffix = 'AM';
        }

        return time + suffix;
    }

    render() {
        const { data } = this.props;
        console.log(data);

        const temps: number[] = data.map( (item: I.Weather) => Math.round(item.temp - 273));
        // const temps: string[] = data.map( (item: I.Weather) => (item.temp));
        // const temps: string[] = data.map( (item: I.Weather) => (item.temp));

        const _data: I.ChartData = {
            labels: data.map( (item: I.Weather) => (this.shortenTime(item.time))),
            datasets: [
                {
                    label: 'Temperature',
                    data: temps,
                    backgroundColor: 'rgba(204, 51, 0, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1
                }
            ]
        };
        
        return (
            <div>
                <h3>Starting at {data[0].date} to {data[data.length - 1].date}</h3>
                <Line
                    data={_data}
                />

            </div>
        );
    }
}

export default Chart;