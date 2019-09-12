<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'home' }" class="navbar-brand">GothamProject</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'user' }" class="nav-link">Current User</router-link>
                </li>
             
                <li class="nav-item">
                    <router-link :to="{ name: 'workingtime', params: { userid: 12 } }" class="nav-link">Working Time</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'clockmanager', params: { username: 'twitterpowwaaa' } }" class="nav-link">Clock Manager</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'chartmanager', params: { userid: 12 } }" class="nav-link">Chart Manager</router-link>
                </li>

            </ul>
            <b-dropdown id="right" right text="User" variant="primary" class="m-2">
            <a href='/' class="btn btn-primary">Log out</a>
  </b-dropdown>

        </div>
    </nav>
</template>

<script>

    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
