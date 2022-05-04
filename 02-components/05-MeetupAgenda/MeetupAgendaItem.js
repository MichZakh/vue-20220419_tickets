import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  agendaItemIcons,
  agendaItemDefaultTitles,

  computed: {
    getIcon() {
      return `/assets/icons/icon-${this.$options.agendaItemIcons[this.agendaItem.type]}.svg`;
    },

    getTitle() {
      return this.agendaItem.title
        ? this.agendaItem.title
        : this.$options.agendaItemDefaultTitles[this.agendaItem.type];
    },
    getTimes() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="getIcon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{getTimes}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{getTitle}}</h3>
        <p v-if = "agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});
