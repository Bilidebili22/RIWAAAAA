<template>
  <q-page padding>
<q-input v-model="input" label="Unesi ime"></q-input>
<q-btn @click="DodajIme()">Dodaj</q-btn>
<p v-for="ime in kolege" :key="ime" v-show="ime !='Ivan'">
{{ime}}
</p>
<div class="q-pa-md q-gutter-sm">
  <q-btn push color="white" text-color="primary" label="Add stuff" @click="addMail()">
    <q-badge color="orange" v-model="readmsg">{{ addmsg }}</q-badge>
  </q-btn>
  <q-btn dense color="purple" round icon="email" class="q-ml-md" @click="deMaill()">
    <q-badge color="red" v-model="delmsg" floating>{{ delmsg }}</q-badge>
  </q-btn>
</div>

<div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Nas mali Sigma</div>
          <div class="text-subtitle2">by Zoran Milanovic and Aleksandar Vucic</div>
        </q-card-section>
        <q-card-section>
          {{ lorem }}
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-btn flat @click="readMsg()">Open</q-btn>
          <q-btn flat @click="deleteMsg()">Delete</q-btn>
        </q-card-actions>
      </q-card>
    </div>



  </q-page>
</template>

<script setup>
import {ref} from 'vue'
//
const addmsg = ref(22)
const delmsg = ref(4)

const input=ref('');
input.value="ili si Gay";
const kolege = ['Luka','Dorian bez J','Ivan','Marin'];

function DodajIme(){
kolege.push(input.value);
console.log(input.value);
}

function addMail(){
addmsg.value +=1;
}

function deMaill(){
  delmsg.value -=1;
}
</script>
