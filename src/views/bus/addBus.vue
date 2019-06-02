<template>
  <bus-form :is-edit="false" />
</template>

<script>
import BusForm from './components/BusForm'

export default {
  name: 'AddBusForm',
  components: { BusForm }
}
</script>
