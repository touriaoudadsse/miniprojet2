<template>

    <div class="container">
        <br>
        <br>
        <br>
        <div class="row-center-border-div" style="border:groove">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">WorkingTime : </h3>
                </div>
                <div class="panel-body">
                    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
                </div>

                <div class="table">
                    <form class="center" role="search" name="searchform" method="get" action="">
                        <input type="text" placeholder="Employee" list="cars"/>
                        <datalist id="cars">

                            <option>Jean Mercedes</option>
                            <option>Saab Lucie</option>
                            <option>Mercedes Saab</option>
                            <option>Lucie Saab</option>
                        </datalist>


                        <input type="datetime-local" placeholder="clock in" list="cars"/>
                        <datalist id="clockin">

                        </datalist>
                        <input type="datetime-local" placeholder="clock out" list="cars"/>
                        <datalist id="clockout">

                        </datalist>


                        <button class="btn-success ol-sm-2"> save</button>
                    </form>
                </div>
                <table class="table">

                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Clock in</th>
                        <th>Clock out</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <button class="btn-success ol-sm-2"> edit</button>

                            <button class="btn-danger ol-sm-2"> delete</button>
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>2019-04-02-08:12:20</td>
                        <td>2019-04-02-22:12:20</td>

                    </tr>
                    <tr>
                        <td>
                            <button class="btn-success ol-sm-2"> edit</button>

                            <button class="btn-danger ol-sm-2"> delete</button>
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>2019-04-02-08:12:20</td>
                        <td>2019-04-02-22:12:20</td>
                    </tr>
                    <tr>
                        <td>
                            <button class="btn-success ol-sm-2"> edit</button>

                            <button class="btn-danger ol-sm-2"> delete</button>
                        </td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>2019-04-02-08:12:20</td>
                        <td>2019-04-02-22:12:20</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
    @import "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/css/compiled-4.7.4.min.css";


</style>