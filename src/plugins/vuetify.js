import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                'primary': '#FF9900',
                'secondary': '#232F3E',
                'accent': '#31465F',
                'error': '#C94628',
                'warning': '#C9715D',
                //"info": "#009688",
                'info': '#1565C0',
                //"success": "#3A8A5A"
                'success': '#1E88E5'
            }
        }
    }
});
