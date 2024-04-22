<script setup>
import Layout from '../components/layout/Layout.vue';
import Navbar from '../components/Navbar.vue';
import MortageLoan from '../components/MortageLoan.vue';
import SignupNewsletter from '../components/SignupNewsletter.vue';
import PaginationCards from '../components/PaginationCards.vue';
</script>
<template>
    <Layout>
        <Navbar />
        <div class="bg-primary">
            <PaginationCards />
        </div>
        <MortageLoan />
        <SignupNewsletter />
    </Layout>
</template>
