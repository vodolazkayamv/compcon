<template>
  <div>
    <v-row id="scroll" dense style="height: calc(100vh - 185px); overflow-y: scroll">
      <v-col>
        <v-card flat outlined height="100%">
          <v-card-text>
            <player-card
              v-if="selected"
              :mech="selected"
              rest
              @delete-actor="activeMission.RemovePilot($event)"
            />
            <encounter-nav
              v-if="selected"
              :mission="activeMission"
              :encounter="encounter"
              :actor="selected"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <hr />
    <v-row dense style="min-height: 100px">
      <v-col cols="11">
        <v-card flat outlined height="100%">
          <v-slide-group
            v-model="selectedPilot"
            mandatory
            show-arrows
            center-active
            style="height: calc(100% - 8px)"
          >
            <slide-item v-for="a in pilots" :key="a.ID" :actor="a" />
          </v-slide-group>
        </v-card>
      </v-col>
      <v-col cols="1" class="text-center">
        <v-menu offset-x left>
          <template v-slot:activator="{ on }">
            <v-btn block color="secondary" outlined class="mr-1" style="height:100%" v-on="on">
              Complete
              <br />
              Rest
            </v-btn>
          </template>
          <v-card>
            <v-card-text class="text-center font-weight-bold">
              This will conclude the rest and progress the mission. This can not be undone. Are you
              sure you want to continue?
              <v-divider class="my-2" />
              <v-row dense>
                <v-btn small text>CANCEL</v-btn>
                <v-btn small color="primary" class="ml-auto" @click="$emit('finish')">
                  CONFIRM
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SlideItem from '../components/SlideItem.vue'
import PlayerCard from '../components/PlayerCard.vue'
import EncounterNav from '../components/EncounterNav.vue'
import { Pilot } from '@/class'

export default Vue.extend({
  name: 'rest-view',
  components: { SlideItem, PlayerCard, EncounterNav },
  props: {
    activeMission: {
      type: Object,
      required: true,
    },
    rest: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    selectedPilot: null,
  }),
  computed: {
    pilots(): Pilot[] {
      return this.activeMission.Pilots.map(x => x.ActiveMech)
    },
    selected(): Pilot {
      return this.pilots.find(x => x.ID === this.selectedPilot)
    },
  },
  watch: {
    selectedPilot() {
      document.getElementById('scroll').scrollTop = 0
    },
  },
})
</script>
