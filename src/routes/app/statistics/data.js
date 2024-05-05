export const data = {
	reasonReturnData: {
		labels: ['Refund', 'Recycle', 'Repair'],
		datasets: [
			{
				// label: ['My First Dataset'],
				data: [300, 50, 100],
				backgroundColor: ['rgb(31, 119, 180)', 'rgb(44, 160, 44)', 'rgb(255, 153, 0)'],
				hoverOffset: 4
			}
		]
	},
	productConditionData: {
		labels: ['Poor', 'Good', 'Very Good', 'Like New'],
		datasets: [
			{
				data: [300, 50, 100, 25],
				backgroundColor: [
					'rgb(31, 119, 180)',
					'rgb(44, 160, 44)',
					'rgb(255, 153, 0)',
					'rgb(220, 245, 30)'
				],
				hoverOffset: 4
			}
		]
	}
};
