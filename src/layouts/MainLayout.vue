<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated v-if="$q.platform.is.desktop">
      <q-toolbar class="bg-white">          
          <q-toolbar-title >
            <div class="flex flex-row" style="justify-content: space-between;">
              <div v-if="miniState" class="flex items-center">
                <q-icon color="red" name="smart_display" size="md" /><span class="font-bold text-lg text-[#000000]">YouTube</span>
              </div>
              <div class="flex flex-row" style="width:600px;gap:10px">
                <q-input placeholder="Search" dense rounded outlined v-model="search" input-class="text-left" class="q-ml-md w-[85%]">
                  <template v-slot:append>
                    <q-icon v-if="search === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                  </template>
                </q-input>
                <q-btn flat dense round color="primary" icon="mic" class="w-[7%]"/>
              </div>
              <div class="flex flex-row" style="gap:10px">
                  <q-btn class="text-[#000000]" flat round dense unelevated icon="more_vert"/>
                  <q-btn outline rounded color="primary" icon="account_circle" label="Account" />
                  <q-btn flat round dense unelevated class="text-[#000000]" icon="invert_colors" />
              </div>
            </div>
          </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-header elevated v-if="$q.platform.is.mobile">
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <div class="grid grid-cols-12 justify-between" style="gap:8px">
            <div class="col-span-4 items-center flex">
              <q-icon color="red" name="smart_display" size="sm" /><span class="pl-1 font-bold text-sm text-[#000000]">YouTube</span>
            </div>
            <div class="col-span-6 row" style="gap:7px">
                <q-input placeholder="Search" dense rounded outlined v-model="search" input-class="text-left" class="w-[80%]">
                  <template v-slot:append>
                    <q-icon v-if="search === ''" name="search" />
                    <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                  </template>
                </q-input>
                <q-btn size="sm" flat dense round color="primary" icon="mic" class="w-[6%] items-center"/>
              </div>
            <div class="col-span-2 flex justify-end">
              <q-btn size="sm" unelevated flat dense round color="primary" icon="account_circle"/>
              <q-btn size="sm" class="text-[#000000]" flat round dense unelevated icon="more_vert"/>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-if="$q.platform.is.desktop"
        v-model="leftDrawerOpen"
        show-if-above

        :mini="!leftDrawerOpen || miniState"
        @click.capture="toggleLeftDrawer"

        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-slate-300' : 'bg-slate-50'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list>
            <q-item class="flex justify-flex-start" v-ripple>
              <q-item-section avatar>
                <q-icon class="text-grey" flat @click="miniState = !miniState" name="menu" />
              </q-item-section>
              <q-item-section class="flex flex-row" style="justify-content: flex-start;align-items: center;gap:2px">
                <q-icon color="red" name="smart_display" size="md"/>
                <span class="font-bold text-lg">YouTube</span>
              </q-item-section>
              
            </q-item>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home_filled" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="queue_music" />
              </q-item-section>

              <q-item-section>
                Shorts
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="subscriptions" />
              </q-item-section>

              <q-item-section>
                Subscriptions
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Videos
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="history" />
              </q-item-section>

              <q-item-section>
                Your History
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar'
import IndexPage from 'src/pages/IndexPage.vue'

const $q = useQuasar()

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    IndexPage
  },

  setup () {
    return {
      linksList:ref([]),
      leftDrawerOpen: ref(false),
      miniState: ref(false),
      contentClass: ref('bg-red'),
      search: ref(''),
      
    }
  },
  methods:{
    toggleLeftDrawer(){
      if (this.miniState.value) {
        this.miniState.value = false
      }
    }
  }
})
</script>
