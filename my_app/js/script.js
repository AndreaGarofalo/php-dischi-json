const { createApp } = Vue;
const apiUri = "http://localhost/php-dischi-json/api/cd/index.php";

const app = createApp({
  data() {
    return {
      disks: [],
    };
  },
  created() {
    axios.get(apiUri).then((res) => {
      this.disks = res.data;
    });
  },
});

app.mount("#app");
