<template>
  <div class="hello">
    <ul>
      <li v-for="(user,i) in allUsers" :key="i">
        {{user.firstname}} - {{user.lastname}} ({{user.job.description}}) <button @click="detail(user.id)">Seleziona</button>
     </li>
    </ul>
    <button @click="getAllUsers">All users</button>
       <pre>{{fetchUser}}</pre>

  </div>
</template>

<script>
import { ALL_USERS_QUERY } from '@/graphql'
import { USER_QUERY } from '@/graphql'

export default {
  name: 'HelloWorld',
  data() {
    return{
      allUsers:[],
      fetchUser:{}
    }
  },
  mounted(){
    //this.getAllUsers()
  },
  methods:{
    getAllUsers(){
         this.$apollo.queries.allUsers.refetch()
    },
    detail(el){
      this.$apollo.query({
          query:USER_QUERY,
          variables :{
              id: el
          }
      }).then(res=>{
        this.fetchUser=res.data.fetchUser
      })
    }
  },
  apollo:{
    allUsers: {
            query: ALL_USERS_QUERY
        },
    /*fetchUser:{
       query: USER_QUERY,
        variables() {
            return {
              id: this.varia,
            }
        }
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
