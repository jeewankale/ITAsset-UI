<template>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
            
<b-card
      header="ITAsset Management"
      header-tag="header"
      title="Register"
    >
    <b-card-text>
          
   <b-form method="post" @submit.prevent="register">

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Username:" label-for="input-2">
       <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          required
          placeholder="Enter Password"
          type="password"
        ></b-form-input>
      </b-form-group>
           <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
          </b-card-text>
    </b-card>
    
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>


export default {
  components: {
    
  },

  data() {
    return {
         form: {
          username: '',
          email: '',
          password: '',
          
        },
      
      error: null
    }
  },

  methods: {
    async register() {
        console.log("register..");
        console.log(JSON.stringify(this.form));
    //   try {
    //     await this.$axios.post('register', {
    //       username: this.username,
    //       email: this.email,
    //       password: this.password
    //     })

    //     await this.$auth.loginWith('local', {
    //       data: {
    //         email: this.email,
    //         password: this.password
    //       },
    //     })

    //     this.$router.push('/')
    //   } catch (e) {
    //     this.error = e.response.data.message
    //   }
    }
  }
}
</script>