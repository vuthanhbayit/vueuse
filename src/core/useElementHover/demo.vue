<script setup lang="ts">
import { ref } from '@vue/composition-api'
import { useElementHover } from '.'

const el = ref()
const isHovered = useElementHover(el)
</script>

<template>
  <button ref="el">
    <span>{{ isHovered ? 'Thank you!' : 'Hover me' }}</span>
  </button>
</template>
