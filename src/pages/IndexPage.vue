<template>
    <q-page class="flex p-4">
      <div v-if="$q.platform.is.desktop" class="grid grid-cols-4 gap-5">
        <q-card v-for="card in cards" class="my-card">
          <img :src=card.thumbnail_img>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src=card.channel_owner_avatar>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ card.channel_name_description }}</q-item-label>
              <q-item-label caption>{{card.subsciber}} subscribers</q-item-label>
            </q-item-section>
          </q-item>
          <q-card-section>
            <div class="text-h6">{{card.title}}</div>
            <div class="text-[#0000008a]">{{card.views}}</div>
          </q-card-section>
      </q-card>
      </div>
      <div v-if="$q.platform.is.mobile">
          <q-card v-for="card in cards" class="mb-4">
          <img :src=card.thumbnail_img>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src=card.channel_owner_avatar>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ card.channel_name_description }}</q-item-label>
              <q-item-label caption>{{card.subsciber}} subscribers</q-item-label>
            </q-item-section>
          </q-item>
          <q-card-section>
            <div class="text-h7">{{card.title}}</div>
            <div class="text-[#0000008a]">{{card.views}}</div>
          </q-card-section>
      </q-card>
      </div>
      
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  
  data(){
    return{
      cards:[
        {
          id:1,
          thumbnail_img:'https://cdn.quasar.dev/img/mountains.jpg',
          channel_name_description: 'Technical Guruji',
          channel_owner_avatar:'https://cdn.quasar.dev/img/avatar.png',
          subsciber:'1.1M',
          views:'70,990 views',
          title:'Iphone 15 Pro max unboxing'

        },
        {
          id:2,
          thumbnail_img:'https://cdn.quasar.dev/img/mountains.jpg',
          channel_name_description: 'Tech burner',
          channel_owner_avatar:'https://cdn.quasar.dev/img/boy-avatar.png',
          subsciber:'8M',
          views: '21,43,221 views',
          title:'Iphone 15 Pro max features'

        },
        {
          id:3,
          thumbnail_img:'https://cdn.quasar.dev/img/mountains.jpg',
          channel_name_description: 'CarryMInati',
          channel_owner_avatar:'https://cdn.quasar.dev/img/boy-avatar.png',
          subsciber:'20.1M',
          views:'11,00,001 views',
          title:'Chatguru roast'

        },
        {
          id:4,
          thumbnail_img:'https://cdn.quasar.dev/img/mountains.jpg',
          channel_name_description: 'Mr.Beast',
          channel_owner_avatar:'https://cdn.quasar.dev/img/boy-avatar.png',
          subsciber:'2.01M',
          views:'85,98,032 views',
          title:'Donating $120,200 to orphanage'

        },
        {
          id:5,
          thumbnail_img:'https://cdn.quasar.dev/img/parallax1.jpg',
          channel_name_description: 'Total Gaming',
          channel_owner_avatar:'https://cdn.quasar.dev/img/boy-avatar.png',
          subsciber:'4.6M',
          views:'31,00,123 views',
          title:'Rush game play | road to 5M family'

        },
        {
          id:6,
          thumbnail_img:'https://cdn.quasar.dev/img/parallax1.jpg',
          channel_name_description: 'Chai aur Code',
          channel_owner_avatar:'https://cdn.quasar.dev/img/boy-avatar.png',
          subsciber:'48K',
          views:'49,23,321 views',
          title:'Quasar framework with chai'

        },
        {
          id:7,
          thumbnail_img:'https://cdn.quasar.dev/img/parallax1.jpg',
          channel_name_description: 'Adda247',
          channel_owner_avatar:'https://cdn.quasar.dev/img/avatar.png',
          subsciber:'1.02K',
          views:'17,901 views',
          title:'Simplification + Approximation in one video'

        },
        {
          id:8,
          thumbnail_img:'https://cdn.quasar.dev/img/parallax1.jpg',
          channel_name_description: 'DSA with Hackerr',
          channel_owner_avatar:'https://cdn.quasar.dev/img/avatar.png',
          subsciber: '32.9K',
          views:'14,01,121 views',
          title:'What is Stack and Queue?'

        }
      ]
    }
  }
});
</script>
<style>
.my-card{
  border-radius: 1.5rem;
  /* max-width: 90%;
  max-height:450px */
}
  
</style>