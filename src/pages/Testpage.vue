<template>
  <q-page padding>
<p v-text="msghtml"></p>
{{msghtml  }}
{{msg  }}
<p v-text="msg"></p>



<p v-for="item in days">
<button v-if="item=='Ponedeljak'"> 
{{item}}
</button>

<button v-else v-show="false">
{{ item }}
</button>
</p>
<a :href="link.url" :target="link.target"> {{link.text}} </a>

<q-input color="purple-12" v-model="text" label="Item name"> </q-input>

  </q-page>
</template>

<script setup>
import{ref} from 'vue'
  const msg="Pozz";
  const msghtml="<h1>Naslov</h1>";
  const days=['Ponedeljak','Utorak','Srijeda'];

  const link = {
  url: 'http://www.google.com',
  target: '_blank',
  text: 'Google'
}

</script>
