<template>
    <div class="col-lg-6 col-md-12">
        <form class="form"  @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="firstName">First Name<span class="err" v-show="errors.has('fName')">*</span></label>
                <input class="form-control" id="firstName" name="fName" type="text"
                    v-model="fName"
                    v-validate="'required|alpha'"
                    :class="{'input': true, 'is-danger': errors.has('fName') }">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name<span class="err" v-show="errors.has('lName')">*</span></label>
                <input type="text" class="form-control" id="lastName" name="lName"
                    v-model="lName"
                    v-validate="'required|alpha'"
                    :class="{'input': true, 'is-danger': errors.has('lName') }">
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label class="d-block">Gender<span class="err" v-show="errors.has('radio_group_1')">*</span></label>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline1"
                        name="radio_group_1" v-validate="'required|included:1,2'" value="1">
                        <label class="custom-control-label" for="defaultInline1">WOMAN</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline2"
                        name="radio_group_1" value="2">
                        <label class="custom-control-label" for="defaultInline2">MAN</label>
                    </div>
                </div>
                <div class="col-md-6 my-1">
                    <label class="d-block" for="date">Date of birth
                        <span class="err" v-show="errors.has('date_format_field')">*</span>
                    </label>
                    <masked-input
                        type="text"
                        id="date"
                        name="date"
                        class="form-control"
                        v-model="date_format_field"
                        :mask="[/[0-3]/, /[0-9]/,'/',/[0-1]/,/[1-9]/,'/',/\d/, /\d/, /\d/, /\d/]"
                        :class="{'input': true, 'is-danger': errors.has('date_format_field') }"
                        :guide="false"
                        placeholderChar="#"
                        placeholder="DD/MM/YY">
                    </masked-input>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email<span class="err" v-show="errors.has('email')">*</span></label>
                <input id="email" name="email" v-model="email" type="email" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary button">I want to win!</button>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from 'vee-validate';
import MaskedInput from 'vue-text-mask'

Vue.use(VeeValidate);

export default {
  name: 'FormComp',
  components: {
      MaskedInput
    },
  data: () => ({
    fName: '',
    lName: '',
    email: '',
    radio_group_1: '',
    date_format_field: ''
  }),
  methods: {
    onSubmit() {
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
.err{
    margin-left: 10px;
    color:red;
    font-size: 18px;
    text-align: center;
}
</style>
