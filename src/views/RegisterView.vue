<template>
    <div>
        <h1>Registration</h1>

        <input
            v-model="user_name"
            type="text"
            name="user_name"
            placeholder="user name"
        />
        <br />
        <input
            v-model="user_password"
            type="password"
            name="user_password"
            placeholder="password"
        />
        <br />
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from "@/services/Services/AuthenticationService.js";

export default {
    data() {
        return {
            user_name: "",
            user_password: "",
        };
    },
    methods: {
        async register() {
            const response = await AuthenticationService.register({
                user_id: 1,
                user_name: this.user_name,
                user_password: this.user_password,
                status: "CREATOR"
            });
            console.log(response.data)
        },
    },
};
</script>

<style scoped></style>
