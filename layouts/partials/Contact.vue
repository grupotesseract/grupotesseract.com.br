<template>
  <div class="contact">
    <v-layout wrap>
      <v-flex xs12 md6 class="title">
        <v-layout align-end justify-center column fill-height>
          <h3>QUER CRIAR</h3>
          <h2>UM PROJETO</h2>
          <h3>COM A GENTE?</h3>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="forms">
        <v-layout justify-center column fill-height>
          <h4>ENTRE EM CONTATO</h4>
          <v-form>
            <v-text-field
              v-model="name"
              v-validate="'required'"
              :error-messages="errors.collect('name')"
              label="NOME"
              data-vv-name="name"
              required
              color="#ffffff"
              dark
            ></v-text-field>
            <v-text-field
              v-model="email"
              v-validate.disable="'required|email'"
              :error-messages="errors.collect('email')"
              label="EMAIL"
              data-vv-name="email"
              required
              color="#ffffff"
              dark
            ></v-text-field>
            <v-text-field
              v-model="subject"
              v-validate="'required'"
              :error-messages="errors.collect('subject')"
              label="ASSUNTO"
              data-vv-name="subject"
              required
              color="#ffffff"
              dark
            ></v-text-field>
            <v-textarea
              v-model="message"
              v-validate="'required'"
              :error-messages="errors.collect('message')"
              label="MENSAGEM"
              data-vv-name="message"
              required
              clearable
              clear-icon="cancel"
              color="#ffffff"
              dark
            ></v-textarea>
            <v-btn class="mt-3 mx-0 mb-0" @click="submit">ENVIAR</v-btn>
          </v-form>
          <v-snackbar
            v-model="snackbar"
            color="success"
            left
            :timeout="timeout"
          >
            Mensagem enviada com sucesso!
            <v-btn dark color="success" @click="snackbar = false">
              Fechar
            </v-btn>
          </v-snackbar>
          <!-- <a class="mt-3" @click="submit">
            <h4>ENVIAR</h4>
          </a> -->
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      events: '',
      snackbar: false,
      timeout: 5000
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.$axios
            .$post('https://api.grupotesseract.com.br/api/contacts', {
              name: this.name,
              email: this.email,
              subject: this.subject,
              message: this.message
            })
            .then(response => {
              // console.log('successful')
              this.snackbar = true
            })
          // .catch(error => {
          //   console.log(error)
          // })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact {
  background-color: $blue-2;

  @media (min-width: 960px) {
    padding: 4rem 3rem;
  }

  .title {
    @media (min-width: 960px) {
      height: 500px;
    }

    @media (max-width: 959px) {
      margin-top: 3rem;
    }

    h2, h3 {
      @media (min-width: 960px) {
        margin-right: 3rem;
      }
    }

    h3 {
      color: $black-1;

      @media (max-width: 959px) {
        font-size: 2rem;
      }

      @media (min-width: 960px) and (max-width: 1263px){
        font-size: 3rem;
      }
    }

    h2 {
      -webkit-text-fill-color: $blue-2;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: $black-1;

      @media (max-width: 959px) {
        font-size: 3rem;
      }

      @media (min-width: 960px) and (max-width: 1263px){
        font-size: 4rem;
      }
    }
  }

  .forms {
    color: $gray-1;
    border-left: 3px solid $gray-1;

    @media (max-width: 959px) {
      padding: 2rem 2rem 2rem 1rem;
      margin: 2rem 0rem 2rem 1rem;
    }

    a {
      color: $gray-1;
    }

    h4, form {
      @media (min-width: 960px) {
        margin-left: 3rem;
      }
    }
  }
}
</style>
