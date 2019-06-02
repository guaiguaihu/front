<template>
  <order-form :is-edit="false" />
</template>

<script>
import OrderForm from './components/OrderForm'

export default {
  name: 'AddOrderForm',
  components: { OrderForm }
}
</script>
