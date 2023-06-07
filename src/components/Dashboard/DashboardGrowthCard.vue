<script setup lang="ts">
import 'chart.js/auto'
import { Line } from 'vue-chartjs'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      responsive: true,
      label: 'Revenue',
      data: [4500, 4320, 4750, 4460, 4700, 5209, 4609, 4870, 4600, 4800, 4600, 5230],
      fill: true,
      backgroundColor: 'rgba(107,119,255,0.1)',
      borderColor: 'rgba(107,119,255,1)',
      tension: 0.4,
      borderWidth: 2,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#3D58FF',
      pointHoverBorderColor: '#3D58FF',
      pointHoverBackgroundColor: '#fff'
    }
  ]
}

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: 'transparent',
        borderColor: 'transparent',
        tickColor: 'transparent'
      },
      border: {
        color: 'transparent'
      },
      ticks: {
        color: 'red',
        display: false
      }
    },
    x: {
      grid: {
        color: '#EEF0F3'
      },
      border: {
        color: 'transparent'
      },
      ticks: {
        color: '#141330',
        font: {
          weight: 400,
          family: 'Inter, sans-serif',
          size: 14
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: false
    },
    tooltip: {
      titleFont: {
        family: 'Inter, sans-serif',
        weight: 700,
        size: 16
      },
      bodyFont: {
        family: 'Inter, sans-serif',
        weight: 400,
        size: 12
      },
      titleColor: '#141330',
      bodyColor: '#141330',
      backgroundColor: '#fff',
      padding: {
        left: 16,
        right: 16,
        top: 16,
        bottom: 16
      },
      cornerRadius: 8,
      displayColors: false,
      caretSize: 8,
      caretPadding: 0,
      callbacks: {
        title: function (context: any) {
          let customTitle = ''

          if (customTitle) {
            customTitle += ': '
          }
          if (context[0].parsed.x !== null) {
            customTitle += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0
            }).format(context[0].raw)
          }
          return customTitle
        },
        label: function () {
          return 'Revenue'
        }
      }
    }
  }
}
</script>
<template>
  <!-- START: Your Growth -->
  <div class="w-full min-h-[325px] bg-subtleGrey rounded-2xl p-4">
    <p class="mb-5 text-base font-semibold text-dark">
      Your Growth <br />
      <span class="text-sm font-normal">1 Year</span>
    </p>

    <div class="w-full h-[220px]">
      <Line id="yourGrowthChart" :data="data" :options="options" />
    </div>
  </div>
  <!-- END: Your Growth -->
</template>
