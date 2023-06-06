<script setup lang="ts">
import DashboardSidebar from '@/components/Dashboard/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Dashboard/Layout/DashboardTopBar.vue'
import DashboardStatisticCard from '@/components/Dashboard/DashboardStatisticCard.vue'
import DashboardGrowthCard from '@/components/Dashboard/DashboardGrowthCard.vue'
import DashboardTransactionCard from '@/components/Dashboard/DashboardTransactionCard.vue'
import DashboardGoalCard from '@/components/Dashboard/DashboardGoalCard.vue'
import DashboardChallengeCard from '@/components/Dashboard/DashboardChallengeCard.vue'
</script>
<template>
  <div class="flex min-h-screen pb-10">
    <DashboardSidebar activeMenu="dashboard" />
    <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
      <DashboardTopBar :isDashboard="true" />
      <div class="flex flex-col lg:flex-row gap-[30px]">
        <section class="w-full flex flex-col gap-[30px]">
          <!-- Stastistic Card -->
          <DashboardStatisticCard />
          <!-- Your Growth -->
          <DashboardGrowthCard />
          <!-- Latest Transaction -->
          <DashboardTransactionCard />
        </section>
        <section class="lg:max-w-[300px] w-full h-max mb-[30px] bg-subtleGrey rounded-2xl p-4">
          <!-- Goals Card -->
          <DashboardGoalCard />
          <!-- Challenges List -->
          <DashboardChallengeCard />
        </section>
      </div>
    </main>
  </div>
</template>
