<template>
    <div class="col-md-6 my-3">
        <form class="form" @submit="checkForm" action="/something" method="post">
            <div class="form-group">
                <label for="firstName">First Name <p v-if="errors.length" class="error">*</p></label>
                <input type="text" class="form-control" id="firstName" v-model="fName" name="fName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name  <p v-if="errors.length" class="error">*</p></label>
                <input type="text" class="form-control" id="lastName" v-model="lName" name="lName">
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label class="d-block">Gender</label>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline1">
                        <label class="custom-control-label" for="defaultInline1">WOMAN</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline2">
                        <label class="custom-control-label" for="defaultInline2">MAN</label>
                    </div>
                </div>
                <div class="col-md-6 my-1">
                    <label class="d-block">Date of birth</label>
                    <input type="date" >
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email  <p v-if="errors.length" class="error">*</p></label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" name="email">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary button">Register me to win a free watch</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormComp',
    data() {
        return {
            errors: [],
            fName: null,
            lName: null,
            email: null,
        }
    },
    methods:{
        checkForm: function (e) {
        if (this.fName && this.lName && this.email) {
            return true;
        }

        this.errors = [];

        if (!this.fName) {
            this.errors.push('FirstName required.');
        }
        if (!this.lName) {
            this.errors.push('Last Name required.');
        }
        if (!this.email) {
            this.errors.push('email required.');
        }

        e.preventDefault();
        }
    }
}
</script>

<style>
.error{
    color:  red;
    float: right;
    padding-left: 10px;
    font-size: 20px;
    margin: 0px;
}
</style>
