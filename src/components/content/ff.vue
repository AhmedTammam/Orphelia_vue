<template id="signUpForm">
		<div class="col-lg-offset-4 col-lg-4">
			<div class="panel panel-primary" id="formdiv">
				<div class="panel-heading">
					<h3 class="panel-title">Vue.js SignUp Form Validation</h3>
				</div>
				<div class="panel-body">
					<form @submit.prevent='submit'>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="text" placeholder="Email" name="email" class="form-control" v-model='email'>
							<span v-if='msg.email'>{{msg.email}}</span>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Password</label>
							<input type="password" placeholder="Password" name="password" class="form-control" v-model='password'>
							<span v-if='msg.password'>{{msg.password}}</span>
						</div>			
						<div class="form-group">
							<label for="exampleInputEmail1">Confirm Password</label>
							<input type="password" placeholder="Confirm Password" name="confirmPassword" class="form-control" v-model='confirmPassword'>
							<span v-if='msg.confirmPassword'>{{msg.confirmPassword}}</span>
						</div>
						<input type="submit" value="Sign Up" :disabled='disableSubmitButton' class="btn btn-warning">
						<small><a class="pull-right" @click='changeToTnc' href="#">Terms and Conditions</a></small>
					</form>
				</div>
			</div>
		</div>
	</template>
	
	<template id="tnc">
	<div class="col-lg-offset-4 col-lg-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Terms and Conditions</h3>
			</div>
			<div class="panel-body">
				<ul class="list-group">
					<li class="list-group-item">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
			<div class="panel-footer">
				<button class="btn btn-success" @click='back_to_signup'>Back To Login</button>
			</div>
		</div>
	</div>
	</template>

    <script>
    export default {
        data(){
		return {
			password:'',
			confirmPassword:'',
			email:'',
			msg:[],
			disableSubmitButton : true,
		}
	},
	watch:{
		email(value){
			this.eventName();
			this.email = value;
			this.check_email(value);
		},
		password(value){
			this.eventName();
			this.password = value;
			this.checkPassword(value);
		},
		confirmPassword(value){
			this.eventName();
			this.confirmPassword = value;
			this.checkConfirmPassword(value);
		}
	},
	methods:{
		changeToTnc(){
			this.$emit('change','tnc');
		},
		check_email(value){
			if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value))
			{
				this.msg[name] = '';
			}else{
				this.msg[name] = 'Keep Typing... We are waiting for correct Email';
			}
		},
		checkPassword(value){
			this.passwordLengthCheck(value);
		},
		checkConfirmPassword(value){
			if(this.passwordLengthCheck(value)){
				if (value == this.password) {
					this.msg[name]= '';
					this.disableSubmitButton = false;
				}else{
					this.msg[name] = "Password does not match, please try again";
				}
			}
		},
		passwordLengthCheck(passwordToCheck){
			remainingChars = 6 - passwordToCheck.length;
			if (passwordToCheck.length < 6) {
				this.msg[name] = 'Password must contain 6 characters. '+ remainingChars +' more to go...';
			}else{
				this.msg[name] ='';
				return true;
			}
		},
		eventName(){
			name = event.target.name;
		},
		submit(){
			alert('Great you have completed this project, keep learning.')
		}
	}
    }
    </script>
    