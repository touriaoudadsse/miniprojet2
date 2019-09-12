<template>
    <div id="chartmanager">
        <donut-chart
                id="donut"
                :data="donutData"
                colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
                resize="true">
        </donut-chart>
    </div>
</template>

<script>
    import Raphael from 'raphael/raphael';

    global.Raphael = Raphael;

    import {DonutChart} from 'vue-morris';

    export default {
        name: "ChartManager",
        data: function () {
            return {
                donutData: [
                    {label: 'Red', value: 300},
                    {label: 'Blue', value: 50},
                    {label: 'Yellow', value: 100}
                ]
            }
        },
        components: {
            DonutChart
        }
    }
</script>

<style scoped>

</style>
