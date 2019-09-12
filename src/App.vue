<template>
    <div>
        <router-view/>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">TeamTimeWeb</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!-- <div>
           <b-button-group>
             <b-button>Current User</b-button>
           </b-button-group>
         </div>-->
        <div>
            <div class="mx-auto bg-info" style="width: 500px;">
            </div>
            <div>
                <b-tabs content-class="mt-3">
                    <!--Current User -->
                    <div class="mx bg-info" style="width: 8000px;">
                        <b-tab title="Current User" active>
                            <b-form-group
                                    id="input-group-1"
                                    label="Email address:"
                                    label-for="input-1"
                                    description="We'll never share your email with anyone else."
                            <b-form-group id="input-group-2" label="Email :" label-for="input-2">
                                <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="username :" label-for="input-2">
                                <b-form-input
                                        id="input-2"
                                        placeholder="Enter name"
                                ></b-form-input>
                            </b-form-group>
                            <b-button type="submit" variant="primary">Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form>


                            </b-form>


                            </b-card>
                        </b-tab>
                    </div>
                    <b-tab title="User list">
                        <p></p>
                    </b-tab>
                    <b-tab title="Working Time">
                        <p></p>
                    </b-tab>
                    <b-tab title="Clock Manager">
                        <p></p>
                    </b-tab>
                    <b-tab title="Chart Manager">
                        <p></p>
                    </b-tab>

                </b-tabs>
            </div>

        </div>

        <template>
            <div>


            </div>
        </template>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    name: ''
                },

                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''

                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

