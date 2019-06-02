<template>
  <order-form :is-edit="true" />
</template>

<script>
import OrderForm from './components/OrderForm'

export default {
  name: 'EditOrderForm',
  components: { OrderForm }
}
</script>
