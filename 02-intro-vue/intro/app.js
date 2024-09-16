const { createApp, ref } = Vue


const app = createApp({

    setup() {
        const message = ref("I'm Batman");
        const author = ref("Bruce Wayne");

        const changeQuote = () => {
            message.value = "I'm Deadpool";
            author.value = "Wade Wilson";
        }

        return {
            message,
            author,
            changeQuote
        }
    }
});

app.mount('#myApp')