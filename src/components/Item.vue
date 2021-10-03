<template>
  <div class="item">
      <div class="item--tag" v-if="item.offer">Oferta</div>

      <h2 class="item--title">{{item.title}}</h2>
      <p class="item--description">{{item.description}}</p>
      <p class="item--price">{{item.price | currency}}</p>
  </div>
</template>

<script>
export default {
    name: 'Item',
    filters: {
        currency(value) {
            return `R$ ${value.toLocaleString('pt-br', {minimumFractionDigits: 2})}`
        }
    },
    props: {
        item: {}
    }
}
</script>

<style lang="less" scoped>
    .item {
        width: 215.95px;
        height: 290px;
        border-radius: 8px;
        background: @light-orange;
        position: relative;
        margin: 20px;
        padding: 20px;
        &--tag {
            position: absolute;
            background: @red;
            border-radius: 8px;
            color: white;
            top: 15px;
            right: 15px;
            font-weight: 500;
            font-size: 12px;
            padding: 3px 8px;
        }
       
        &--title {
            font-weight: 600;
            font-size: 18px;
            margin: 8px auto;
        }
        &--description {
            color: @light-grey;
            font-weight: 300;
            font-size: 12px;
            margin: 0;
        }
        &--price {
            font-weight: 600;
            font-size: 18px;
            color: @orange;
            margin: 8px auto;
        }
    }
</style> 