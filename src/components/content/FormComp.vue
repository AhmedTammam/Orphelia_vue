<template>
    <div class="col-md-6 my-3">
        <form class="form"  @submit.prevent="validateBeforeSubmit">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input class="form-control" name="name" type="text"
                    v-model="name"
                    v-validate="'required'">
                <div class="help-block alert alert-danger" v-show="errors.has('name')">{{errors.first('name')}}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" name="lName">
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
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email">
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
    data: () => ({
        name: '',
        lName: ''
    }),
    methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
}
</script>

<style>

</style>
