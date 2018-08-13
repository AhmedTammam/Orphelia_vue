<template>
    <div class="col-lg-6 col-md-12">
        <Message v-if="isSubmit" />
            
        <form class="form" v-else  @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="firstName">First Name<span class="err" v-show="errors.has('firstName')">*</span></label>
                <input class="form-control" id="firstName" name="firstName" type="text"
                    v-model="user.firstName"
                    v-validate="'required|alpha'"
                    :class="{'input': true, 'is-danger': errors.has('firstName') }">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name<span class="err" v-show="errors.has('lastName')">*</span></label>
                <input type="text" class="form-control" id="lastName" name="lastName"
                    v-model="user.lastName"
                    v-validate="'required|alpha'"
                    :class="{'input': true, 'is-danger': errors.has('lastName') }">
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label class="d-block">Gender<span class="err" v-show="errors.has('gender')">*</span></label>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline1"
                        name="gender" v-validate="'required|included:woman,man'" value="woman" @click="setGenderToWoman">
                        <label class="custom-control-label" for="defaultInline1">WOMAN</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline2"
                        name="gender" value="man" @click="setGenderToMan">
                        <label class="custom-control-label" for="defaultInline2">MAN</label>
                    </div>
                </div>
                <div class="col-md-6 my-1">
                    <label class="d-block" for="date">Date of birth
                        <span class="err" v-show="errors.has('dateOfBirth')">*</span>
                    </label>
                    <masked-input
                        type="text"
                        id="date"
                        name="date"
                        class="form-control"
                        v-model="user.dateOfBirth"
                        :mask="[/[0-3]/, /[0-9]/,'/',/[0-1]/,/[1-9]/,'/',/[1-2]/, /[0-9]/, /\d/, /\d/]"
                        :class="{'input': true, 'is-danger': errors.has('dateOfBirth') }"
                        :guide="false"
                        placeholderChar="#"
                        placeholder="DD/MM/YY">
                    </masked-input>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email<span class="err" v-show="errors.has('email')">*</span></label>
                <input id="email" name="email" v-model="user.email" type="email" class="form-control" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary button" data-toggle="modal" data-target="#exampleModal">I want to win!</button>
            </div>
        </form>
    </div>
</template>

<script>
import Vue from "vue";
import VeeValidate from 'vee-validate'
import MaskedInput from 'vue-text-mask'
import Message from './Message.vue'

Vue.use(VeeValidate);

export default {
  name: 'FormComp',
  components: {
      MaskedInput,
      Message
    },
  data: () => ({
      user: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        dateOfBirth: ''
      },
      isSubmit: false
  }),
  methods: {
    setGenderToMan() {
        this.gender = 'man'
    },
    setGenderToWoman() {
        this.gender = 'woman'
    },
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$http.post('https://jsonplaceholder.typicode.com/posts', this.user )
            .then( res => {
                this.isSubmit = true
            }, err => {
                console.log(err);
            })
          
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
