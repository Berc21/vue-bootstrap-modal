

Vue.component('tabs', {
    template: `
    <div>
    <ul class="nav nav-tabs">
        <li  v-for="tab in tabs" class="nav-item" :class="{'active': tab.isActive}" >
        <a class="nav-link" @click="selectTab(tab)" :href="tab.href">{{ tab.name }}</a>
        </li>
  </ul>
    <br>
    <div class="container"> 
        
        <slot></slot>

        </div>
    </div>
    `,
    data(){
        return { tabs: [] }
    }
    ,

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(item) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == item.name)
            });
        }
    },
});

Vue.component('tab', {
    template: `
        <div v-show='selected' >
        <slot> </slot> 
        </div>
    `,
    props: { 
        name: { required: true},
        selected: { default: false}
    
    }, 
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
   
    }
}
);

 let app = new Vue({
    el: '#root',
  });
  
  