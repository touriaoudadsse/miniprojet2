<template>

    <div class="container">
        <br>
        <br>
        <br>
        <div class="row-center-border-div" style="border:groove">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">ClockManager : current user
                        <button class="btn btn-primary  btn-success ol-sm-3"> Refresh</button>
                    </h3>
                </div>
                <div class="panel-body">

                        <div class="alert alert-secondary" role="alert">
                            Not started yet
                        </div>
                    <div class="alert alert-success" role="alert">
                       Work in progress!
                    </div>

                </div>

                <div class="container">
                    <form class="center" role="search" name="searchform" method="get" action="">
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="clockin" class="sr-only">Clock In</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i>
                                        </div>
                                        <input type="date" id="clockin" name="clockin" class="form-control"
                                               placeholder="clockin"
                                               required autofocus>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 field-label-responsive">
                                <label for="clockout" class="sr-only">Clock Out</label>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i>
                                        </div>
                                        <input type="date" id="clockout" name="clockout" class="form-control"
                                               placeholder="Email"
                                               required autofocus>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-3"></div>

                            <div class="col-md-6">
                                <br>

                                <button class="btn btn-lg btn-primary btn-block" type="submit"> Clock In / Out
                                </button>

                                <div class="margin-top20 text-center"> Clock in to start you day
                                </div>
                                <br>

                            </div>

                        </div>


                    </form>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
    @import "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/css/compiled-4.7.4.min.css";


</style>