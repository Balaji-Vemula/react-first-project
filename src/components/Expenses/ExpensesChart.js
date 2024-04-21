import Chart from "../Chart/Chart";

const ExpensesChart = props => {

    // let totalMax=0;

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // stating at 0-jan to 11-dec
        chartDataPoints[expenseMonth].value +=expense.amount;
        // if(expense.amount > totalMax)
        // {
        //     totalMax=expense.amount;
        // }
    }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
