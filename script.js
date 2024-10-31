new Vue({
    el: "#app",
    data: {
      question: "Quer jantas pizza comigo?",
      response: null,
    },
    methods: {
      answer(choice) {
        if (choice === "Sim") {
          this.response = "Ebaa!";//mesnsagem que vai aparecer
        } else {
          this.response = "Me apaga dos seus contatos";
        }
      },
    },
  });
  