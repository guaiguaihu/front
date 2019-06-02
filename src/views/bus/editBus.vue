<template>
  <bus-form :is-edit="true" />
</template>

<script>
import BusForm from './components/BusForm'

export default {
  name: 'EditBusForm',
  components: { BusForm }
}
</script>
