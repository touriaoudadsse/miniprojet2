<template>


    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

        <a class="navbar-brand">Gotham</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-white-50" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link">Home <span class="sr-only">(current)</span></a>

                </li>
                <a class="nav-link text-muted font-weight-bold"  > </a>
            </ul>

            <form class="form-inline my-2 my-lg-0" role="form" method="POST">
                <router-link to="{name :'WorkingTime'}" class="nav-link text-muted font-weight-bold">WorkingTime </router-link>
                <router-link to="{name :'WorkingTimes'}" class="nav-link text-muted font-weight-bold">WorkingTimes</router-link>

                <input class="form-control mr-sm-2" type="text" placeholder="Recherche" id="search1" name="search"
                       aria-label="Search">

                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
            </form>

        </div>


    </nav>


</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style scoped>
@import "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/css/compiled-4.7.4.min.css";
</style>